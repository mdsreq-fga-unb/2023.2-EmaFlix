import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/MovieSide.css"
import VideoPlayer from '../../components/pages/VideoPlayer';
import axios from 'axios';

const MovieSide = () => {
    const { id } = useParams();
    const [moviesPath, setMoviesPath] = useState([]);

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

    console.log(id)
    console.log(moviesPath)

    return (
        <>
                <div className="video-container">
                    <h2>{moviesPath.path}</h2>
                    <VideoPlayer className="video-player" />
                </div>
            
        </>
    );
};

export default MovieSide;