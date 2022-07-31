import React from 'react'
import BannerImg from '../../images/banner-2.png'
function Section3() {
  return (
    <section className='section3'>
       <div className='container'>
        <div className='left'>
        <img src={BannerImg} alt='banner img' />
        <div className='desc-left-img'>
            <h6>MERRY</h6>
            <h1>Christmas 40<span>% <p>off</p></span></h1>
            <button className='btn'>Shop Now</button>
        </div>
        </div>

        <div className='right'>
        <div className='right-title'>
        <h4>Your Next</h4>
        <h1>Purchase</h1>
        <h2> 10 <span>% <p>off</p></span></h2>
        <button className='btn'>Shop Now</button>

        </div>
        </div>
       </div>
        </section>
  )
}

export default Section3