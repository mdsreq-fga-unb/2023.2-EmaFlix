import "../css/VideoConf.css"

import axios from "axios";

import React, { useState } from 'react';

import Filter from "./Filter"

const VideoConf = () => {

    const [video, setVideo] = useState(null);
    const [poster, setPoster] = useState(null);
    const [tags, setTags] = useState('');
    const [idade, setIdade] = useState('');
    const [genero, setGenero] = useState('');
    const [titulo, setTitulo] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [id, setId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (video) {
            const formData = new FormData();
            formData.append('video', video);
            formData.append('title', titulo);
            formData.append('age', idade);
            formData.append('tags', tags);
            formData.append('genre', genero);
            formData.append('synopsis', sinopse);
            formData.append('id', id);
            try {
                const response = await axios.post('http://localhost:3000/upload', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                console.log('Resposta do servidor:', response.data);
            } catch (error) {
                console.log('Erro ao fazer upload:', error);
            }
        } else {
            console.log('Nenhum arquivo selecionado');
        }
    };

    const idades = ['Livre', '10', '12', '14', '16', '18'];
    const generos = [
        "Ação",
        "Animação",
        "Aventura",
        "Comédia",
        "Documentário",
        "Drama",
        "Fantasia",
        "Ficção Científica",
        "Horror",
        "Musical",
        "Romance",
        "Suspense",
        "Western",
        "Crime",
        "Biografia"
    ];

    return (
        <div className="options-painel">
            <div className="video-conf">
                <h1>Upload de Vídeo</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="video">Upload de vídeo</label>
                        <input
                            className="input-upload"
                            type="file"
                            accept=".mp4"
                            id="video"
                            onChange={handleVideoChange}
                        />
                        <button onClick={handleUpload}>Enviar</button>
                    </div>
                    <div>
                        <label htmlFor="poster">Poster</label>
                        <input
                            className="input-upload"
                            type="file"
                            id="poster"
                            onChange={(e) => setPoster(e.target.files[0])}
                        />
                    </div>
                    <div>
                        <label htmlFor="Titulo">Título</label>
                        <input
                            className="input-upload"
                            type="text"
                            id="Titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="tags">Tags</label>
                        <input
                            className="input-upload"
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="sinopse">Sinopse</label>
                        <input
                            className="input-upload"
                            type="text"
                            id="sinopse"
                            value={sinopse}
                            onChange={(e) => setSinopse(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="idade">Idade</label>
                        <select id="idade" value={idade} onChange={(e) => setIdade(e.target.value)}>
                            <option value="">Selecione uma idade</option>
                            {idades.map((idadeOption) => (
                                <option key={idadeOption} value={idadeOption}>
                                    {idadeOption}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id">Id</label>
                        <input
                            className="input-upload"
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="genero">Gênero</label>
                        <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
                            <option value="">Selecione um gênero</option>
                            {generos.map((generoOption) => (
                                <option key={generoOption} value={generoOption}>
                                    {generoOption}
                                </option>
                            ))}
                        </select>
                        <button type="submit" onClick={handleUpload}>Upload</button>
                    </div>
                </form>
            </div>
            <div className="videos-list">
                <h1>Títulos da plataforma</h1>
                <Filter />
            </div>
        </div>

    );
};

export default VideoConf;