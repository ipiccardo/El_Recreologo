import React from "react";
import "./navBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import Contacto from "../../Pages/Contacto/Contacto";
import Home from "../../Pages/Home/Home";
import Galeria from "../../Pages/Galeria/Galeria";

const hero = () => {
  return (
    <>
      <div className="hero">
        <Navbar expand="md">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navBar">
                <Nav.Link>
                  <NavLink to={"galeria"}>Galeria</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={"home"}>Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={"contacto"}>Contacto</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="galeria" element={<Galeria />}></Route>
        <Route path="home/contacto" element={<Contacto />}></Route>
        <Route path="galeria/contacto" element={<Contacto />}></Route>
      </Routes>
    </>
  );
};

export default hero;
