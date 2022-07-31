import React from 'react'
import './Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import SlideImg1 from'../../images/Home-default-1510-3.png'
import SlideImg2 from'../../images/Home-default-1510-4.png'
function slideComp() {

  return (

<Swiper 
autoplay={true}
    // loop={true}
      modules={[Navigation, Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      paginatio
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>  
        <div className='slide'>
           <img src={SlideImg1} alt="HomImg"/>
           <div className='slide-desc'>
            <h2>The White Collection</h2>
           </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={SlideImg2} alt="HomeImg"/>
           <div className='slide-desc'>
            <h2>The White Collection</h2>
           </div>
          </div>
          </SwiperSlide>

 </Swiper>
  )
}

export default slideComp