import React, { useState, useEffect, useRef } from 'react';
import shaka from 'shaka-player';
import Poster from '../../img/Emaflix_clear.png'

const VideoPlayer = () => {
  const [player, setPlayer] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
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
      const videoElement = videoRef.current;
      const playerInstance = new shaka.Player(videoElement);

      const tracks = playerInstance.getVariantTracks();
      // Populate your UI component with these tracks
      // For example, create a dropdown menu with each track as an option

      // Attach player to the state variable to make it easy to access in the JS console.
      setPlayer(playerInstance);

      // Listen for error events.
      playerInstance.addEventListener('error', onErrorEvent);

      // Update your UI on quality change
      playerInstance.addEventListener('adaptation', () => {
        const track = playerInstance.getVariantTracks().find(t => t.active);
        updateYourUI(track.height); // This is a custom function to update your UI
      });

      // Try to load a manifest.
      // This is an arbitrary URL and should be replaced with your video URL.
      try {
        await playerInstance.load('http://localhost:8000/video', null, 'video/mp4');
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
      } catch (e) {
        onError(e);
      }
    }

    initApp();
  }, []);

  const onErrorEvent = (event) => {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
  };

  const onError = (error) => {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
  };

  return (
    <div>
      <video ref={videoRef} poster={Poster}  width="1080" controls autoplay />
    </div>
  );
};

export default VideoPlayer;
