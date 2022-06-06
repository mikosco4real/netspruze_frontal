import React from "react";
import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = ({active}) => {
  return  (
      <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">Netspruze Limited</Navbar.Brand>
        <Nav className="me-right">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>Home</NavLink>
          <NavLink to="/contact-us" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>Contact Us</NavLink>
          <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>About Us</NavLink>
        </Nav>
        </Container>
      </Navbar>
      </>
  )}

export default Navigation