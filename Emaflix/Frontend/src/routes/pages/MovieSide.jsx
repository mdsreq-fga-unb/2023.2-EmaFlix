import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = ({ match }) => {
  const { id } = useParams;

  return (
    <div>
      <h1>Detalhes do Vídeo {id}</h1>
      {/* Mostrar os detalhes do vídeo */}
    </div>
  );
};

export default VideoDetail;