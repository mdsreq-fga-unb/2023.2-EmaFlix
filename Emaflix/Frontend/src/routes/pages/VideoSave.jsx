import { useEffect, useState } from "react";
import Cards from "../../components/pages/Card";
import "../css/VideoSave.css";

const VideoSave = () => {
    const [MeusVideos, setMeusVideos] = useState('');
    useEffect(() => {
        const Videosbanco = localStorage.getItem('myvideos');
        const User = Videosbanco.split(',').map(Number).map(String);
        setMeusVideos(User);
    }, []);
    console.log("o valor do filtro é" + MeusVideos);
    return (
        <div className="video-save">
            <h2>Meus Vídeos salvos</h2>
            <div className="videos-salvos">
                <Cards filtros={MeusVideos} local={1}/>
            </div>
        </div>
    )
};

export default VideoSave;
