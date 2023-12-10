import { useEffect, useState } from "react";
import Cards from "../../components/pages/Card";
import "../css/VideoSave.css";

const VideoSave = () => {
    const [MeusVideos, setMeusVideos] = useState([]);

    useEffect(() => {
        const Videosbanco = localStorage.getItem('myvideos');
        const User = Videosbanco.split(',').map(Number);
        console.log(User);
        setMeusVideos(User);
    }, []);
    return (
        <div className="video-save">
            <h2>Meus Vídeos salvos</h2>
            <div className="videos-salvos">
                {MeusVideos.map((video, index) =>
                    <Cards key={index} filtros={video} local={1} />
                )}
            </div>
        </div>
    )
};

export default VideoSave;
