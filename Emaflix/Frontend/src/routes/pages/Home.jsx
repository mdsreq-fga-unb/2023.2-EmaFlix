import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ImgCard from "../../img/homem-aranha-poster-teste.jpg"

import "../css/Home.css"

import Carousel from "../../components/pages/Carrossel.jsx";

import Card from "../../components/pages/Card";

const posters = [
    "../../img/homem-aranha-poster-teste.jpg",
]

const Home = () => {
    return (
        <div className="background-color">
            <div className="margin">
        <Carousel/>
        </div>
        </div>
        
    )
};



export default Home
