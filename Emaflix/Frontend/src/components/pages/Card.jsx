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

const Cards = ({ filtros: ValueFilter }) => {
  console.log(ValueFilter);
  if(ValueFilter === undefined){
    ValueFilter = [];
  }
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
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

  useEffect(() => {
    const filterArray = Array.isArray(ValueFilter) ? ValueFilter : [ValueFilter];

    if (filterArray.length === 0) {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter(video =>
        filterArray.some(filter =>
          video.title.toLowerCase().includes(filter.toLowerCase()) ||
          (video.genre && video.genre.some(genre =>
            genre.toLowerCase().includes(filter.toLowerCase())
          )) ||
          (video.tags && video.tags.some(tag =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )) ||
          (video.age && video.age.toLowerCase().includes(filter.toLowerCase()))
        )
      );
      setFilteredVideos(filtered);
    }
  }, [ValueFilter, videos]);

  console.log("Estes são os objetos de vídeo:");
  console.log(filteredVideos);

  const handleDelete = (contentId) => {
  };

  return (
    <>
      {filteredVideos.length > 0 && filteredVideos.map((video) => renderVideoCard(video, UserLogado, handleDelete))}
    </>
  );
};

export default Cards;
