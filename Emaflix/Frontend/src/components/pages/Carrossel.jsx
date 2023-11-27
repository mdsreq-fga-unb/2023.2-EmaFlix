import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../css/Carrossel.css"

import Poster from "../../img/homem-aranha-poster-teste.jpg"

const handleDragStart = (e) => e.preventDefault();


const items = [
  <img className="imagem-carrosel-responsive" src={Poster} onDragStart={handleDragStart} role="presentation" />,
  <img className="imagem-carrosel-responsive"src={Poster} onDragStart={handleDragStart} role="presentation" />,
  <img className="imagem-carrosel-responsive" src={Poster} onDragStart={handleDragStart} role="presentation" />,
];

const Carrossel = () => {
  return (
    <AliceCarousel autoWidth={true} disableButtonsControls={true} mouseTracking infinite={true} autoPlayInterval={3000} autoPlay={true} items={items} />
  );
}

export default Carrossel