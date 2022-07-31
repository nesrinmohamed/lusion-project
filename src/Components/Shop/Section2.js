import React from 'react'
import {FaShoppingBasket} from 'react-icons/fa'
import noun1 from'../../images/noun_Art_2035634.png'
import noun2 from '../../images/noun_Delivery Bike_1367906.png'
import noun3 from '../../images/noun_goal_2805632.png'
import noun4 from '../../images/noun_Pinky Promise_4103302.png'
import noun5 from '../../images/noun_Problem Solving_3239817.png'
import noun6 from '../../images/noun_Sewing Machine_4266660.png'
function Section2() {
  return (
    <section className='section2'>
<div className="row ">
    <img src={noun1} alt='' />
    <img src={noun2} alt='' />
    <img src={noun3} alt='' />
    <img src={noun4} alt='' />
    <img src={noun5} alt='' />
    <img src={noun6} alt='' />
</div>
        <div className='title-s'>
        <div>
          <p>Product 2</p>
          <h2>$100.00</h2>
        </div>
      <div className="icon-item"><FaShoppingBasket/></div>
      </div>

        </section>
  )
}

export default Section2