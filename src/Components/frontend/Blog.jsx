import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import blogImg from '../../assets/images/construction2.jpg';


const Blog = () => {
  return (
    <>
    <Header/>
    <main>
    <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container">
            <div className="text-left">
              <span>Qualité.integrité.valeur</span>
              <h1>Blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit Ea at, recusandae </p>
           
            </div>
          </div>
       
        </div>
      </section>
        
    <section className='section-6 bg-light py-5'>
        <div className="container py-5">
           <div className="section-header text-center">
           <span>BLOGS</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
       <div className="row pt-4">
        <div className="col-md-4">
          <div className="card shadow border-0 ">
            <div className='card-img-top'>
              <img src={blogImg} alt="" className='w-100' />
            </div>
            <div className="card-body p-4">
              <div className='mb-3'>
                <a href='' className='title'>lorem ipsum</a>
              </div>
              <a href="" className='btn btn-primary small'>lire plus</a>
            </div>
          </div>
          
        </div>
        
         <div className="col-md-4">
          <div className="card shadow border-0 ">
            <div className='card-img-top'>
              <img src={blogImg} alt="" className='w-100' />
            </div>
            <div className="card-body p-4">
              <div className='mb-3'>
                <a href='' className='title'>lorem ipsum</a>
              </div>
              <a href="" className='btn btn-primary small '>lire plus</a>
            </div>
          </div>
          
        </div>
         <div className="col-md-4">
          <div className="card shadow border-0 ">
            <div className='card-img-top'>
              <img src={blogImg} alt="" className='w-100' />
            </div>
            <div className="card-body p-4">
              <div className='mb-3'>
                <a href='' className='title'>lorem ipsum</a>
              </div>
              <a href="" className='btn btn-primary small'>lire plus</a>
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

export default Blog