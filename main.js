// Include Shaka Player via its npm package or a script tag
// For npm: import shaka from 'shaka-player/dist/shaka-player.ui.js';
import shaka from 'shaka-player';

async function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  const tracks = player.getVariantTracks();
  // Populate your UI component with these tracks
  // For example, create a dropdown menu with each track as an option
  // Attach player to the window to make it easy to access in the JS console.

  window.player = player;

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

// Update your UI on quality change
player.addEventListener('adaptation', () => {
  const track = player.getVariantTracks().find(t => t.active);
  updateYourUI(track.height); // This is a custom function to update your UI
});
    var userUrl = location.search;
    console.log(userUrl)
  // Try to load a manifest.
  // This is an arbitrary URL and should be replaced with your video URL.
  try {

    await player.load('http://localhost:8000/video', null, 'video/mp4');
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (e) {
    onError(e);
  }
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);

