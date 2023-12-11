import "../css/Card.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const renderVideoCard = (video, UserLogado, handleDelete) => (
  <Link to={`/video/${video.ContentId}`} key={video.ContentId}>
    <div className="card" key={video.ContentId}>
      <img className="card-img" src={video.poster} alt="" srcSet="" />
      <h2>{video.title}</h2>
      <div className="card-genero">
        {video.genre && video.genre.length > 0 && (
          <ul>
            {video.genre.map((genero, index) => (
              <li key={index}>{genero}
                {UserLogado === 'conf' && (
                  <button className="button-delete" onClick={() => handleDelete(video.ContentId)}>
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </Link>
);

const Cards = () => {
  const [videos, setVideos] = useState([]);
  const UserLogado = localStorage.getItem("actions");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/videospath");
        setVideos(response.data.movieDetail);
      } catch (error) {
        console.error("Erro ao buscar");
      }
    };
    getMovies();
  }, []);

  console.log("Este são os objetos do vídeo:");
  console.log(videos);
  const handleDelete = (contentId) => {
    
  };

  return (
    <>
      {videos.length > 0 && videos.map((video) => renderVideoCard(video, UserLogado, handleDelete))}
    </>
  );
};

export default Cards;
