import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/MovieSide.css"
import VideoPlayer from '../../components/pages/VideoPlayer';
import axios from 'axios';
import { get } from 'mongoose';

const MovieSide = () => {
    const { id } = useParams();
    const [moviesPath, setMoviesPath] = useState([]);
    const [videos, setVideos] = useState([]);
    const userLogado = localStorage.getItem('actions');
    const [comments, setComments] = useState([]);
    const [commentConfirme, setCommentConfirme] = useState([]);
    console.log("Este é o user logado" + userLogado);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get("http://localhost:3000/videospath");
                const moviesInfo = response.data.movieDetail;
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
                const response = await axios.get("http://localhost:3000/videos");
                const movies = response.data.video;
                console.log(movies);
                const moviesFound = movies.find(movie => movie.ContentId == id)
                setMoviesPath(moviesFound);

            } catch (error) {
                console.log("erro em buscar conteúdo");
            }
        };
        getPathMovies();
    }, [id]);

    const comentar = async () => {
        let newComment = comments;
        try {
            const response = await axios.put(`http://localhost:3000/addcomentario`, {
                id: id,
                comment: newComment
            });
            const apiresposta = response.data.message;
            if (apiresposta == 'Comentário adicionado com sucesso') {
                setCommentConfirme("Comentário adicionado com sucesso, e logo estará disponível para visualização");
            }

            getMovies();
        } catch (error) {
            console.log(error);
        }
    }

    const AlterarComments = (event) => {
        setComments(event.target.value);
    }

    if (!moviesPath) {
        return <p>Vídeo não encotrado irmão, cara trabalha num server de mine</p>;
    }

    return (
        <div className="movie-side">
            <div className="video-container">
                <VideoPlayer className="video-player" />
                <div className="comments">
                    <h2>Comentarios: </h2>
                    <ul className="barraderolagem">
                        {moviesPath && moviesPath.comments && moviesPath.comments.map((comment, index) => (
                            <li key={index}>{comment}{userLogado === 'conf' && (
                                <button className="buttonDelete" onClick={() => DeletarComments(video.ContentId)}><span className="material-symbols-outlined">delete</span></button>
                            )}</li>
                        ))}
                    </ul>
                    <div className='comentarios-input'>
                        <input type='text' value={comments} onChange={AlterarComments} className="comentar" placeholder="Comente aqui" />
                        <button onClick={comentar} className="comentar">Comentar</button>
                        <div>
                            <p className='aviso-comment'>{commentConfirme}</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container-info">
                <div className="container-info-gerais">
                    <h2>{videos.title}</h2>
                    {videos && videos.genre && videos.genre.map((item, index) => (
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