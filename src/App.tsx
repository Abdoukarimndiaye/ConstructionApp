
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/frontend/Home';
import About from './Components/frontend/About';
import Services from './Components/frontend/Services';
import Project from './Components/frontend/Project';
import Blog from './Components/frontend/Blog';
import Contact from './Components/frontend/Contact';
import './assets/css/style.scss';



function App() {
  

  return (
    <>

   <BrowserRouter>
   <Routes>
    
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>} />
      <Route path='/services' element ={<Services/>} />
      <Route path='/Projet' element={<Project/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
     
    </>
  )
}

export default App
