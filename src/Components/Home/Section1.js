import React from 'react'
import Cate1 from '../../images/cate-df-1_360x.jpg' 
import Cate2 from '../../images/cate-df-2_360x.jpg' 
import Cate3 from '../../images/cate-df-3_360x.jpg' 
import Cate4 from '../../images/cate-df-4_360x.jpg' 

function Section1() {
  return (
    <section className='section1'>
      <div className='card'>
        <div className='card-item'>
      <img src={Cate1} alt='cate1' />
      <div className='img-title'>
    <h3 className='desc'>Clothing</h3>
    <p className='price'>5 items</p>
      </div>
        </div>
        <div className='card-item'>
      <img src={Cate2} alt='cate2' />
      <div className='img-title'>
    <h3 className='desc'>Bag Brand</h3>
    <p className='price'>20 items</p>
      </div>
        </div>

        <div className='card-item'>
      <img src={Cate3} alt='cate3' />
      <div className='img-title'>
    <h3 className='desc'>Accessories</h3>
    <p className='price'>6 items</p>
      </div>
        </div>

        <div className='card-item'>
      <img src={Cate4} alt='cate4' />
      <div className='img-title'>
    <h3 className='desc'>Shoes</h3>
    <p className='price'>8 items</p>
      </div>
        </div>
      </div>

    </section>
  )
}
export default Section1