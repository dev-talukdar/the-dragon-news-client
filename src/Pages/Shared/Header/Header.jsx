import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
           <div className="text-center mt-5 mx-auto">
           <img className='img-fluid' src={logo} alt="" />
           <p><small>Journalism without fear or favor</small></p>
           <p>{moment().format("dddd, MMMM D YYYY ")}</p>
           </div>

           <div className='d-flex bg-light p-3'>
            <Button variant='danger'>Latest</Button>
            <Marquee>
  I can be a React component, multiple React components, or just some text.
  Allow your users to add an extra layer of security to their account. Once enabled, integrated and configured, users can sign in to their account in two steps, using SMS
</Marquee>
           </div>

           {/* Navbar section started  */}

           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link> 
            <Nav.Link href="#pricing">Carreer</Nav.Link> 
            
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Container>
    );
};

export default Header;