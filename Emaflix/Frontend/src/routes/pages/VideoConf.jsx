import "../css/VideoConf.css"

import React, { useState } from 'react';

import Filter from "./Filter"


const VideoConf = () => {

    const [file, setFile] = useState(null);
    const [poster, setPoster] = useState(null);
    const [tags, setTags] = useState('');
    const [idade, setIdade] = useState('');
    const [genero, setGenero] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <label htmlFor="video">Upload de video</label>
                        <input
                            className="input-upload"
                            type="file"
                            id="video"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
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
                        <label htmlFor="genero">Gênero</label>
                        <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
                            <option value="">Selecione um gênero</option>
                            {generos.map((generoOption) => (
                                <option key={generoOption} value={generoOption}>
                                    {generoOption}
                                </option>
                            ))}
                        </select>
                        <button type="submit">Upload</button>
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