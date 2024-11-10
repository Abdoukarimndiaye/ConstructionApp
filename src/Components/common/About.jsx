import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
    <>
          <section className="section-2 py-5">
        <div className="container py-5">
          <div className="row pt-4">
            <div className="col-md-6 ">
                  <img src={AboutImg} alt="" className='w-100' />
            </div>
            <div className="col-md-6">
              <span >A propos de nous</span>
              <h2>Lorem ipsum dolor sit amet </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi, debitis minus quia deleniti esse incidunt nobis, omnis iste aspernatur recusandae ratione, pariatur quisquam ipsam.
                 Repudiandae atque totam dolor! Cumque!</p>
            
            </div>
          </div>
        </div>
       </section>

    </>
    
  )
}

export default About