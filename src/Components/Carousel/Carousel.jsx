import React from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Carousel1 from '../../img/Carousel1.jpg';
import Carousel2 from '../../img/Carousel2.jpg';
import Carousel3 from '../../img/Carousel3.jpg';
import Carousel4 from '../../img/Carousel4.jpg';
import Carousel5 from '../../img/Carousel5.jpg';
import Carousel6 from '../../img/Carousel6.jpg';


export default function Carousel() {
  return (
    <div className="container">

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Carousel1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Carousel4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="slide_image" />
        </SwiperSlide>



        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

