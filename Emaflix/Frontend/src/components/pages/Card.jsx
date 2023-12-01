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
      const filtered = videos.filter(applyFilters);
      setFilteredVideos(filtered);
  }, [videos, filtros]);

  console.log(filtros)

  const applyFilters = (video) => {
    if (!filtros) {
      return true;
    }

    console.log(filtros)

    const title = filtros;
    const age = filtros;
    const tags = filtros;
    const genro = filtros;

    console.log("O title é " + title);
    console.log(video.title)
  
    if (title && video.title.toLowerCase().includes(title.toLowerCase())) {
      return true;
    }
  
    if (age && video.age.toString() === age.toString()) {
      return true;
    }
  
    if (tags && video.tags) {
      const tagMatch = video.tags.some(videoTag => tags.includes(videoTag.toLowerCase()));
      if (tagMatch) {
        return true;
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
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default Cards;
