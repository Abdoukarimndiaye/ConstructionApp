import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import serviceImg from '../../assets/images/construction1.jpg';
import constructionImg from '../../assets/images/construction2.jpg';
import blogImg from '../../assets/images/construction2.jpg';
import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import avatarImg from  '../../assets/images/author-2.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import {default as  AboutNew} from '../common/About';











const Home = () => {
  return (
   <>
     <Header/>
    <main>
      <section className="section-1">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
              <span>Bienvenue dans notre univers de la construction</span>
              <h1>Creér des rêves <br/> avec précision et excellence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at, recusandae saepe est non explicabo facere quam quo libero distinctio, laudantium consequatur provident, eum sapiente iste exercitationem inventore. Dolore, modi!</p>
            <div className="mt-4">
          <a className='btn btn-primary large'>Contactez-nous</a>
          <a className='btn btn-secondary ms-2 large'>Nos projects</a>
            </div>
          
            </div>
          </div>
       
        </div>
      </section>
       {/* about us section */}
  <AboutNew/>




       {/* our servics */}
       <section className='section-3 bg-light py-5'>
        <div className="container-fluid py-5">

         <div className="section-header text-center">
           <span>Nos services</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
            <div className="row pt-4">
          <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-images">
                <img src={serviceImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Titre 1</h3>
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
            <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-images">
                <img src={serviceImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Titre 1</h3>
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
            <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-images">
                <img src={serviceImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Titre 1</h3>
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
            <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-images">
                <img src={serviceImg} alt="" className='w-100'/>
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Titre 1</h3>
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
        </div>
        </div>
       </section>


        {/* our servics */}
         <section className='section-4  py-5'>
          <div className="container py-5">
            <div className="section-header text-center">
           <span>Pourquoi nous choisir</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
         <div className="row">
          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <div className="card-icon">
                <img src={icon1} alt=""  />

              </div>
              <div className="card-title mt-3">
              <h3>titre 1</h3>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Libero sed optio vel assumenda consectetur blanditiis sint
                    </p>
              </div>
            </div>
             <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <div className="card-icon">
                <img src={icon2} alt=""  />

              </div>
              <div className="card-title mt-3">
              <h3>titre 2</h3>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Libero sed optio vel assumenda consectetur blanditiis sint
                    </p>
              </div>
            </div>
             <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <div className="card-icon">
                <img src={icon3} alt=""  />

              </div>
              <div className="card-title mt-3">
              <h3>titre 3</h3>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Libero sed optio vel assumenda consectetur blanditiis sint
                    </p>
              </div>
            </div>
          </div>
         </div>
          
          </section>


       <section className='section-3 bg-light py-5'>
        <div className="container-fluid py-5">
         <div className="section-header text-center">
           <span>Nos project</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
            <div className="row pt-4">
          <div className="col-md-3 col-lg-3">
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
            <div className="col-md-3 col-lg-3">
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
            <div className="col-md-3 col-lg-3">
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
            <div className="col-md-3 col-lg-3">
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
       {/* section-5 */}
       <section className='section-5 py-5'>
        <div className="container py-5">

          <div className="section-header text-center">
           <span>Temoignage</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
  <Swiper
  
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="card shadow border-0 p-4">
          <div className="card-body">
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className='content pt-4 pb-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quaerat deleniti ex, quisquam accusantium saepe aliquid 
                 tenetur, perferendis ipsa odit culpa error repellendus 
                 doloremque praesentium iure tempora at quasi adipisci incidunt.

              </p>
            </div>
            <hr/>
            <div className='meta d-flex'>
              <div>
                <img src={avatarImg} alt="" width={50} />
              </div>
              <div className='ps-2'>
                <div className='name'>
                  Karim
                </div>
                <div>
                  informaticien
                </div>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4">
          <div className="card-body">
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className='content pt-4 pb-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quaerat deleniti ex, quisquam accusantium saepe aliquid 
                 tenetur, perferendis ipsa odit culpa error repellendus 
                 doloremque praesentium iure tempora at quasi adipisci incidunt.

              </p>
            </div>
            <hr/>
            <div className='meta d-flex'>
              <div>
                <img src={avatarImg} alt="" width={50} />
              </div>
              <div className='ps-2'>
                <div className='name'>
                  Karim
                </div>
                <div>
                  informaticien
                </div>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4">
          <div className="card-body">
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className='content pt-4 pb-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quaerat deleniti ex, quisquam accusantium saepe aliquid 
                 tenetur, perferendis ipsa odit culpa error repellendus 
                 doloremque praesentium iure tempora at quasi adipisci incidunt.

              </p>
            </div>
            <hr/>
            <div className='meta d-flex'>
              <div>
                <img src={avatarImg} alt="" width={50} />
              </div>
              <div className='ps-2'>
                <div className='name'>
                  Karim
                </div>
                <div>
                  informaticien
                </div>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4">
          <div className="card-body">
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className='content pt-4 pb-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quaerat deleniti ex, quisquam accusantium saepe aliquid 
                 tenetur, perferendis ipsa odit culpa error repellendus 
                 doloremque praesentium iure tempora at quasi adipisci incidunt.

              </p>
            </div>
            <hr/>
            <div className='meta d-flex'>
              <div>
                <img src={avatarImg} alt="" width={50} />
              </div>
              <div className='ps-2'>
                <div className='name'>
                  Karim
                </div>
                <div>
                  informaticien
                </div>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4">
          <div className="card-body">
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className='content pt-4 pb-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quaerat deleniti ex, quisquam accusantium saepe aliquid 
                 tenetur, perferendis ipsa odit culpa error repellendus 
                 doloremque praesentium iure tempora at quasi adipisci incidunt.

              </p>
            </div>
            <hr/>
            <div className='meta d-flex'>
              <div>
                <img src={avatarImg} alt="" width={50} />
              </div>
              <div className='ps-2'>
                <div className='name'>
                  Karim
                </div>
                <div>
                  informaticien
                </div>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
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
  
  );
}

export default Home