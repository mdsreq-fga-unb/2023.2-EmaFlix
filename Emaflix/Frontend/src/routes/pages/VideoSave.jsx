import { useEffect, useState } from "react";
import Cards from "../../components/pages/Card";
import "../css/VideoSave.css";

const VideoSave = () => {
    const [videoSavebanco, setVideoSavebanco] = useState('');
    const [MeusVideos, setMeusVideos] = useState('');

    const GetVideoSave = async () => {
        try {
            const response = await axios.get("https://recanto-cinema-a74e4167e1ec.herokuapp.com/userconfig");
            setVideoSavebanco(response.data);
            console.log(videoSavebanco);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        GetVideoSave();
    };

    useEffect(() => {
        const Videosbanco = localStorage.getItem('myvideos');
        const User = Videosbanco.split(',').map(Number).map(String);
        setMeusVideos(User);
    }, []);
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
