import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Contact = () => {
  return (
<>
<Header/>
<main>
<section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container">
            <div className="text-left">
              <span>Qualité.integrité.valeur</span>
              <h1>Contactz-nous</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit Ea at, recusandae </p>
           
            </div>
          </div>
       
        </div>
      </section>
      <section className='section-9 py-5'>
        <div className="container py-5">

          <div className="section-header text-center">
           <span>Contactez-nous</span>
           <h2>Lorem ipsum dolor </h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
         </div>
         <div className="row">
            <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                    <div className="card-body p-4">
                        <h3>Appelez nous</h3>
                        <div><a href='#'>78-436-36-64</a></div>
                        <div><a href='#'>78-866-52-55</a></div>

                        <h3 className='mt-4'>E-mail</h3>
                        <div><a href=''>exple@gmail.com</a></div>
                        <div><a href=''>exple2@gmail.com</a></div>

                        <h3 className='mt-4'>Adresse</h3>
                        <div>
                        Dakar,Grand-yoff<br/>
                        Cite-millionnaire,villa-163
                        </div>
                    </div>

                </div>

            </div>
            <div className="col-md-9">
                <div className="card shadow border-0 ">
                    <div className="card-body p-5">
                    <form>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">Nom</label>
                            <input type="text" className="form-control form-control-lg" placeholder='Votre nom' />

                        </div>
                        <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">Adresse electronique</label>
                        <input type="text" className="form-control form-control-lg" placeholder='Votre email' />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">Numero de telephone</label>
                            <input type="text" className="form-control form-control-lg" placeholder='+(0221)' />

                        </div>
                        <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">Sujet</label>
                        <input type="text" className="form-control form-control-lg" placeholder='Votre sujet' />

                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Commentaire</label>
                        <textarea className="form-control form-control-lg" placeholder='Votre sujet'name="" id="" rows={5}>

                        </textarea>
                        <button className='btn btn-primary mt-3 large'>Envoyer</button>

                        </div>
                    </div>


                    </form>

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

export default Contact