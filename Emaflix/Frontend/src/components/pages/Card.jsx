import "../css/Card.css"

import axios from "axios"

import { useEffect, useState } from "react";

import CardImagem from '../../img/Card - 1000 x 670.png'
import { Link } from "react-router-dom";

const Cards = () => {
    const [videos, setVideos] = useState([]);

    console.log(videos);
    useEffect(() => {
      const getMovies = async () => {
        try {
          const response = await axios.get("http://localhost:3001/videos");
          setVideos(response.data);

        } catch (error) {
          console.error("Erro ao buscar");

        }
      };
      getMovies();
    }, []);

  return (
    <>
      {videos.map((video) => (
        <Link to={`/video/${video.ContentId}`} key={video.ContentId}>
        <div className="card" >
        <img className="card-img" src={CardImagem} alt="" srcset="" />
        <h2>{video.title}</h2>
        </div>
        </Link>
        
      ))}
    </>
  );
}

export default Cards;