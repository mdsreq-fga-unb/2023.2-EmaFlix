import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ImgCard from "../../img/homem-aranha-poster-teste.jpg"

import "../css/Home.css"

import Card from "../../components/pages/Card";

const Home = () => {
    return (
        <div className="background-color">
        <div className="cards">
            <Card path={ImgCard} title={"Homem-aranha"}/>
        </div>
        </div>
    )
};



export default Home