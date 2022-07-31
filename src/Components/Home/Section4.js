import React from 'react'
import Img1 from'../../images/img1.jpg'
import Img2 from '../../images/img2.jpg'
import Img3 from '../../images/img3.jpg'
import Img4 from '../../images/img4.jpg'
import Img5 from '../../images/img5.jpg'
import Img6 from '../../images/img6.jpg'
function Section4() {
  return (
    <div className='section4 container '>
<div className='left-s'>
    <div className='row'>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
        <img src={Img6} alt="" />
    </div>
</div>
<div className='right-s' >
<h1 style={{fontSize:'4rem'}}>Vintage Style</h1>
<p>Lorem inspum simply dummy text of the printing
    and typesetting inductry. lorem has been the industry 
    standard dummy text ever scince the 1500 , when a unknown printer 
</p>
<h3>______#Lusiontheme</h3>
</div>
    </div>
  )
}

export default Section4