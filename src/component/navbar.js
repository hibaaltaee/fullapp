import React from "react";
import { useState } from "react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import About from "../pages/about"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../component/navbar.css";

function NavScrollExample() {
  return (
    <div>
           <Navbar expand="sm" className="bb">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100px"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"
        
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-2 my-sm-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link to ="/">Home</Link>  
           <Link to ="/menu">menu</Link> 
           <Link to ="/about">About</Link>
           <Link to ="/reservation">Reservation</Link>
           <Link to ="/login">login</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default NavScrollExample;