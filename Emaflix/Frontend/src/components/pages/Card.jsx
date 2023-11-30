import "../css/Card.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CardImagem from '../../img/Card - 1000 x 670.png';
import { Link } from "react-router-dom";

const Cards = ({ filtros }) => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3002/videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Erro ao buscar");
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const filtered = videos.filter(applyFilters);
      setFilteredVideos(filtered);
    }
  }, [videos, filtros]);

  const applyFilters = (video) => {
    if (!filtros) {
      return true;
    }
  
    const { title, age, tags, genro } = filtros;
  
    if (title && !video.title.toLowerCase().includes(title.toLowerCase())) {
      return false;
    }
  
    if (age && video.age.toString() !== age.toString()) {
      return false;
    }
  
    if (tags && tags.length > 0) {
      const tagMatch = tags.some(tag => !video.tags.includes(tag));
      if (tagMatch) {
        return false;
      }
    }
  
    if (genro && !video.genro.some(g => g.toLowerCase() === genro.toLowerCase())) {
      return false;
    }
  
    return true;
  };

  return (
    <>
      {filteredVideos.length > 0 && (
        <>
          {filteredVideos.map((video) => (
            <Link to={`/video/${video.ContentId}`} key={video.ContentId}>
              <div className="card" key={video.ContentId}>
                <img className="card-img" src={CardImagem} alt="" srcSet="" />
                <h2>{video.title}</h2>
                <p>Age: {video.age}</p>
                <p>Tags: {video.tags.join(', ')}</p>
                <p>Poster: {video.poster}</p>
                <p>Genre: {video.genro}</p>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default Cards;
