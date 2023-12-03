import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/MovieSide.css"
import VideoPlayer from '../../components/pages/VideoPlayer';
import axios from 'axios';

const MovieSide = () => {
    const { id } = useParams();
    const [moviesPath, setMoviesPath] = useState([]);
    const [videos, setVideos] = useState([]);

    console.log(videos);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get("http://localhost:3002/videos");
                const moviesInfo = response.data;
                const movieInfoFound = moviesInfo.find(movie => movie.ContentId == id)
                setVideos(movieInfoFound);
            } catch (error) {
                console.error("Erro ao buscar");
            }
        };
        getMovies();
    }, [id]);

    useEffect(() => {
        const getPathMovies = async () => {
            try {
                const response = await axios.get("http://localhost:3001/moviespath");
                const movies = response.data;
                const moviesFound = movies.find(movie => movie.ContentId == id)
                setMoviesPath(moviesFound);

            } catch (error) {
                console.log("erro em buscar conteúdo");
            }
        };
        getPathMovies();
    }, [id]);

    if (!moviesPath) {
        return <p>Vídeo não encotrado irmão, cara trabalha num server de mine</p>;
    }

    console.log(moviesPath.comments)

    return (
        <div className="movie-side">
            <div className="video-container">
                <VideoPlayer className="video-player" />
                <div className="comments">
                    <h2>Comentarios: </h2>
                    <ul className="barraderolagem">
                        {moviesPath && moviesPath.comments && moviesPath.comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}

                    </ul>
                    <button className="comentar">Comentar</button>
                </div>
            </div>
            <div className="container-info">
                <div className="container-info-gerais">
                    <h2>{videos.title}</h2>
                    {videos && videos.genro && videos.genro.map((item, index) => (
                        <h3 key={index}>{item}</h3>
                    ))}
                    <h3>{videos.age}</h3>
                </div>
                <p><strong>Sinopse:</strong> {moviesPath.synopse}</p>
            </div>
        </div>
    );
};

export default MovieSide;