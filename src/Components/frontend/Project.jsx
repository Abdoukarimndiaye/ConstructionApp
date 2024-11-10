import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import constructionImg from '../../assets/images/construction2.jpg';

const Project = () => {
  return (
    <>
    <Header/>
    <main>
    <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container">
            <div className="text-left">
              <span>Qualité.integrité.valeur</span>
              <h1>Our projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit Ea at, recusandae </p>
           
            </div>
          </div>
       
        </div>
      </section>
      <section className='section-3 bg-light py-5'>
        <div className="container py-5">
         <div className="section-header text-center">
           <span>Nos project</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
            <div className="row pt-4">
          <div className="col-md-4 col-lg-4">
            <div className="item">
              <div className="service-images">
                <img src={constructionImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Project 1</h3>
                </div>
                <div className="service-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti, saepe. Odit doloribus animi placeat, 
                     saepe praesentium deleniti at hic nemo obcaecati
                      eum ipsum assumenda dolore officiis corrupti laboriosam tenetur dicta.</p>
                </div>
                <a href='' className='btn btn-primary small'>lire plus</a>
              </div>
            </div>
          </div>
            <div className="col-md-4 col-lg-4">
            <div className="item">
              <div className="service-images">
                <img src={constructionImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Project 2</h3>
                </div>
                <div className="service-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti, saepe. Odit doloribus animi placeat, 
                     saepe praesentium deleniti at hic nemo obcaecati
                      eum ipsum assumenda dolore officiis corrupti laboriosam tenetur dicta.</p>
                </div>
                <a href='' className='btn btn-primary small'>lire plus</a>
              </div>
            </div>
          </div>
            <div className="col-md-4 col-lg-4">
            <div className="item">
              <div className="service-images">
                <img src={constructionImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Project 3 </h3>
                </div>
                <div className="service-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti, saepe. Odit doloribus animi placeat, 
                     saepe praesentium deleniti at hic nemo obcaecati
                      eum ipsum assumenda dolore officiis corrupti laboriosam tenetur dicta.</p>
                </div>
                <a href='' className='btn btn-primary'>lire plus</a>
              </div>
            </div>
          </div>
            <div className="col-md-4 col-lg-4">
            <div className="item">
              <div className="service-images">
                <img src={constructionImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Project 4</h3>
                </div>
                <div className="service-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti, saepe. Odit doloribus animi placeat, 
                     saepe praesentium deleniti at hic nemo obcaecati
                      eum ipsum assumenda dolore officiis corrupti laboriosam tenetur dicta.</p>
                </div>
                <a href='' className='btn btn-primary'>lire plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="item">
              <div className="service-images">
                <img src={constructionImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Project 4</h3>
                </div>
                <div className="service-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti, saepe. Odit doloribus animi placeat, 
                     saepe praesentium deleniti at hic nemo obcaecati
                      eum ipsum assumenda dolore officiis corrupti laboriosam tenetur dicta.</p>
                </div>
                <a href='' className='btn btn-primary'>lire plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="item">
              <div className="service-images">
                <img src={constructionImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Project 4</h3>
                </div>
                <div className="service-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti, saepe. Odit doloribus animi placeat, 
                     saepe praesentium deleniti at hic nemo obcaecati
                      eum ipsum assumenda dolore officiis corrupti laboriosam tenetur dicta.</p>
                </div>
                <a href='' className='btn btn-primary'>lire plus</a>
              </div>
            </div>
          </div>
        </div>

        </div>
     
       </section>
    </main>
    
    <Footer/>
    </>
    
  )
}

export default Project