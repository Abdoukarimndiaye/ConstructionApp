import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header>
              <div className="container py-3">
         <Navbar expand="lg" className="bg">
      
        <Navbar.Brand href="#home" className="logo"><span>KOKI </span>construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link">Accueil</Nav.Link>
            <Nav.Link href="/about" className="nav-link">A propos de nous</Nav.Link>
            <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
            <Nav.Link href="/projet" className="nav-link">Projets</Nav.Link>
            <Nav.Link href="/blog" className="nav-link">Blogs</Nav.Link>
             <Nav.Link href="/contact" className="nav-link">Contact-nous</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    </header>




  )
}

export default Header