import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <img
              src="https://www.deputy.com/uploads/2018/08/Screen-Shot-2018-08-08-at-12.19.36-PM.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Brand href="#home">e-hunger</Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
