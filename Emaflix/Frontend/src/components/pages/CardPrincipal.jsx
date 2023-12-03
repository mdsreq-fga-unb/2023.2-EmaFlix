import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import '../css/CardPrincipal.css'
import CardPoster from '../../img/Processo seletivo.png'
import CardPoster2 from '../../img/festival-online.jpg'

const CardPrincipal = () => {
    return (
        <div className='card-principal'>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img className='poster-img' src={CardPoster2} alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img className='poster-img' src={CardPoster} alt="" srcset="" /></SwiperSlide>
    </Swiper>
        </div>
    )
}

export default CardPrincipal