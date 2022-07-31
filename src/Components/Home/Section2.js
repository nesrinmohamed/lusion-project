import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
import Layer1 from '../../images/Layer-134_1296x.jpg'
import Layer2 from '../../images/Layer-141-1000x1280_540x.jpg'
import Layer3 from '../../images/Untitled-2_360x.jpg'
import Layer4 from '../../images/Layer-142_360x.jpg'
import {AiFillEye} from 'react-icons/ai';

// SwiperCore.use([Navigation, Pagination]);
function Section2() {

  return (
    <section className='section2'>
       <div className='best-selling'>
     <h1>Best Selling</h1>
     <p>Lorem ipsum is simply dummy  text of the printing and typesetting Merry</p>
      </div>
      <div >
        <h3 className='slide-title'>All Products</h3>
      </div>

<Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      paginatio
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>  
        <div className='slide'>
           <img src={Layer1} alt="layer"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={Layer2} alt="layer2"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={Layer3} alt="layer3"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={Layer4} alt="layer4"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
      </SwiperSlide>

      <SwiperSlide>  
        <div className='slide'>
           <img src={Layer1} alt="layer"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={Layer2} alt="layer2"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={Layer3} alt="layer3"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
           <img src={Layer4} alt="layer4"/>
           <div>
            <p>Quitled Gilet With Hood</p>
            <h3>$179.00</h3>
            <AiFillEye className='icon'/>
           </div>
          </div>
      </SwiperSlide>
    </Swiper>

  
    </section>
  )
}

export default Section2