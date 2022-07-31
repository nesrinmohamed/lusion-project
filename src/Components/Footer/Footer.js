import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {SiQuicktime} from 'react-icons/si'
function Footer() {
  return (
<div className='footer'>
<div className='container'>
<div className='row '>
    <div class="col-lg-3 col-s-6">
      <h1>Company</h1>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Store Location</li>
        <li>Careers</li>
    </ul>
    </div>
    <div class="col-lg-3 col-s-6">
    <h1>Help</h1>
      <ul>
        <li> Order Tracking</li>
        <li>FAQ'S</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
    </ul>
    </div>
    <div class="col-lg-3 col-s-6">
    <h1>Follow Us</h1>
    <p>And get Free Shipping on all 
        your orders!
    </p>
    <div className="links">
        <FaFacebookF/>
        <FaInstagram/>
        <SiQuicktime/>
    </div>
    </div>
  </div>
  <div class="col-4 col-s-6 ">
     <h3>Sign up now & get 10% off</h3>
     <p style={{fontWeight: '600', padding:' 2rem 0'}}>Be the first to know about our new arrivals and
        exclusive offers
     </p>
     <form>
        <input type='text' placeholder='Your email address' />
        <input type='submit' value='submit' className='btn btn-black'/>
     </form>
    </div>
</div>
</div>
  )
}

export default Footer