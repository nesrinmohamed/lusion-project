import React from 'react'
import './Shop.css'
import Blog1 from '../../images/blog-home-1.jpg'
import Blog2 from '../../images/blog-home-2.jpg'
import Blog3 from '../../images/wrist-watch-2159785_1920_01.jpg'
import Blog4 from '../../images/bg-about05.png'
import {FaShoppingBasket} from 'react-icons/fa'
function Section1() {
  return (
    <section className='section1'>
      <div className='card'>
        <div className='card-item'>
      <img src={Blog1} alt='Blog1' />
      <div className='title'>
        <div>
          <p>Product 2</p>
          <h2>$100.00</h2>
        </div>
      <div className="icon-item"><FaShoppingBasket/></div>
      </div>
        </div>
        <div className='card-item'>
      <img src={Blog2} alt='Blog2' />
      <div className='title'>
        <div>
          <p>Product 1</p>
          <h2>$250.00</h2>
        </div>
      <div className="icon-item"><FaShoppingBasket/></div>
      </div>
        </div>
        <div className='card-item'>
      <img src={Blog3} alt='Blog3' />
      <div className='title'>
        <div>
          <p>Product 3</p>
          <h2>$150.00</h2>
        </div>
      <div className="icon-item"><FaShoppingBasket/></div>
      </div>
        </div>
        <div className='card-item'>
      <img src={Blog4} alt='Blog4' />
      <div className='title'>
        <div>
          <p>Product 4</p>
          <h2>$200.00</h2>
        </div>
      <div className="icon-item"><FaShoppingBasket/></div>
      </div>
        </div>
        </div>
    </section>
  )
}

export default Section1