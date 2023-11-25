// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "../css/Carrossel.css"


import Poster from "../../img/homem-aranha-poster-teste.jpg"

import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2.5}
            centeredSlides={true}
            pagination={{
                clickable: true,
                type: 'fraction'
            }}
            modules={[Pagination, Navigation]}
            onSwiper={() => console.log()}
        >
            <SwiperSlide><div className="gradient"></div><div className="container-poster"><img className='poster-carrossel' src={Poster} /><h2>Homem Aranha - No Way casa</h2></div></SwiperSlide>
            <SwiperSlide><div className="container-poster"><img className='poster-carrossel' src={Poster} /><h2>Homem Aranha - No Way casa</h2></div></SwiperSlide>
            <SwiperSlide><div className="container-poster"><img className='poster-carrossel' src={Poster} /><h2>Homem Aranha - No Way casa</h2></div></SwiperSlide>
            <SwiperSlide><div className="container-poster"><img className='poster-carrossel' src={Poster} /><h2>Homem Aranha - No Way casa</h2></div></SwiperSlide>
            ...
        </Swiper>
    );
};
