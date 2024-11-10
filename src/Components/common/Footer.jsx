import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className='mb-3'>Koki Construction</h3>
            <div className='pe-5'>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Fugiat, quis quas eligendi necessitatibus iste similique veniam in.
                Corporis porro minus inventore repellendus,
               sunt nobis perspiciatis ea atque molestiae dolores animi.</p>
            </div>
           

          </div>
           <div className="col-md-3">
            <h3 className='mb-3'>Liens</h3>
            <ul>
              <li><a href=''>Accueil</a></li>
              <li><a href="">A propos de nous</a></li>
              <li><a href="">Nos projects</a></li>
              <li><a href="">Contactez-nous</a></li>
              <li><a href="">Blogs</a></li>
            </ul>
            
          </div>
           <div className="col-md-3">
            <h3 className='mb-3'>Contactez-nous</h3>
            <ul>
              <li>
                <a href=''>78-436-36-64</a>
              </li>
               <li>
                <a href="">info@exple.com</a>
              </li>
            </ul>
            <p>Dakar,Grand-yoff <br/> cite-millionnaire</p>
            
          </div>
           <div className="col-md-3">
            <h3 className='mb-3'>Abonnez-vous</h3>
            <form>
              <div>
                <input type="text" className='form-control' />
                <button type="button" className='btn btn-primary mt-2'>Envoyer</button>
              </div>
            </form>
            
          </div>
          <hr/>
          <div className='text-center pt-4'>copyright &copy; 2024 Koki construction. All rights reserved</div>
        </div>

      </div>
    </footer>
  )
}

export default Footer