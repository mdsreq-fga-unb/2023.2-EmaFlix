import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/MovieSide.css"
import VideoPlayer from '../../components/pages/VideoPlayer';

const MovieSide = () => {
    const { id } = useParams();
    const [moviesPath, setMoviesPath] = useState([]);

    useEffect(() => {
        const getPathMovies = async () => {
            try {
                const response = await axios.get("http://localhost:3001/movies-path");
                setMoviesPath(response.data.moviespath);

            } catch (error) {
                console.log("erro em buscar conteúdo");

            }
        };
        getPathMovies();
    }, []);

    console.log(id)

    return (
        <>
            {moviesPath.map((movie) => (
                <div className="video-container">
                    <h2>{movie.path}</h2>
                    <VideoPlayer className="video-player" />
                </div>
            ))
            }
        </>
    );
};

export default MovieSide;