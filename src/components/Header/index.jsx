import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="px-4 px-md-5 d-flex justify-content-lg-between">
        <Container fluid className="p-0">
          {/* Brand/logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/AEM-logo-2.png`}
              className="d-inline-block align-top"
              alt="AEM Logo"
              id="logo"
            />
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Collapsible content */}
          <Navbar.Collapse id="responsive-navbar-nav" className="lead py-4">
            <Nav className="mx-auto text-center col-4 col-lg-12 justify-content-lg-end">
              {/* Direct links */}
              <Nav.Link as={Link} to="/tuning" className="text-light navLink">
                Tuning
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/feilsøking"
                className="text-light navLink">
                Feilsøking
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/prisliste"
                className="text-light navLink">
                Prisliste
              </Nav.Link>
              <Link
                to="/kontakt"
                className="btn btn-primary border-2 border-info text-light fs-5 fw-light mt-3 mt-lg-0 ms-lg-2">
                Kontakt
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routing
      <Routes>
        <Route path="/" />
        <Route path="/tuning" />
        <Route path="/feilsøking" />
        <Route path="/prisliste" />
        <Route path="/kontakt" />
      </Routes> */}
    </header>
  );
}

export default Header;
