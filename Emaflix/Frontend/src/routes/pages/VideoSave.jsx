import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Cards from "../../components/pages/Card";

import "../css/VideoSave.css"
import axios from "axios";

const userLogado = "Danilo.Naves";

const VideoSave = () => {
    const [MeusVideos, setMeusVideos] = useState([]);

    useEffect(() => {
        const getMyVideos = async () => {
            try {
                const response = await axios.get("http://localhost:3004/user");
                const User = response.data.find(user => user.user === userLogado)
                setMeusVideos(User.myvideos);
                console.log("videos///" + MeusVideos);
            } catch (error) {
                console.log("Erro ao bucar conteúdo")
            }
        }
        getMyVideos();
    }, [])
    return (
        <div className="video-save">
            <h2>Meus Vídeos salvos</h2>
            <div className="videos-salvos">
                {MeusVideos.map((video) =>
                    <Cards filtros={video} local={1} />
                )}
            </div>
        </div>
    )
};



export default VideoSave