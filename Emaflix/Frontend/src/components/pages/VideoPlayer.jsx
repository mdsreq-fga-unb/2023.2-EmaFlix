import React, { useState, useEffect, useRef } from 'react';
import shaka from 'shaka-player';
import Poster from '../../img/Emaflix_clear.png'

const VideoPlayer = ({Url}) => {
  const [player, setPlayer] = useState(null);
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(Url);

  useEffect(() => {
    if(Url !== undefined || Url !== null) {
      setVideoUrl(Url);
    }
  },[Url]);

  useEffect(() => {
    async function initApp() {
      shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
      
        initPlayer();
      } else {
        console.error('Browser not supported!');
      }
    }

    async function initPlayer() {
      const videoElement = videoRef.current;
      const playerInstance = new shaka.Player(videoElement);

      const tracks = playerInstance.getVariantTracks();
      setPlayer(playerInstance);

      playerInstance.addEventListener('error', onErrorEvent);

      playerInstance.addEventListener('adaptation', () => {
        const track = playerInstance.getVariantTracks().find(t => t.active);
        updateYourUI(track.height); // This is a custom function to update your UI
      });

      try {
        await playerInstance.load(videoUrl, null, 'video/mp4');
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
    <div style={{maxWidth: "100%", height: "auto"}}>
      <video ref={videoRef} poster={Poster} style={{width: "100%", height: "auto",paddingRight: "10px",}} controls autoPlay />
    </div>
  );
};

export default VideoPlayer;
