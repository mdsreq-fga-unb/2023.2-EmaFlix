import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "../css/Home.css"

import VideoPlayer from "../../components/pages/VideoPlayer";

const Home = () => {
    return (
        <div className="player">
            <VideoPlayer/>
        </div>
    )
};



export default Home