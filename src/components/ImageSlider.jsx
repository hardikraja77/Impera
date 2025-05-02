import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/ImageSlider.css';

function ImageSlider() {
  const images = [
    '/images/naruto.jpeg',
    '/images/naruto1.jpeg',
    '/images/itachi.jpeg',
    '/images/itachi1.jpeg'
  ];

  return (
    <section className="image-slider">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="slider-slide">
            <img src={src} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ImageSlider;
