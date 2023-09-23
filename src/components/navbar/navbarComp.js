import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { ailusion_logo } from "../../global/icons/media";
import { BsArrowRight } from "react-icons/bs";
import "./navbarComp.scss";

function NavbarComp() {
  return (
    <Navbar className="navbar_container" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={ailusion_logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ marginRight: "25px" }}
          />
          <span className="logo_text">AILUSION</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto"></Nav> */}
          <Nav>
            <Nav.Link href="#deets">Products</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#deets">
              <div className="waitlist_btn">
                Join Waitlist{" "}
                <BsArrowRight style={{ marginLeft: 10 }} size={20} />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
