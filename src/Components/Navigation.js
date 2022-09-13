import React from "react";
import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Logo from "../assets/netspruze-logo.png"

const Navigation = ({active}) => {
  return  (
      <>
      <Navbar className="app-navbar" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} width="100%" className="app-navbar-image"></Image>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active nav-link-home" :  "nav-link  nav-link-home" }>Netspruze</NavLink>
        </Navbar.Brand>
        <Nav className="me-right">
          {/* <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>Home</NavLink> */}
          <NavLink to="/products" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>Products</NavLink>
          <NavLink to="/contact-us" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>Contact Us</NavLink>
          <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link active" :  "nav-link" }>About Us</NavLink>
        </Nav>
        </Container>
      </Navbar>
      </>
  )}

export default Navigation