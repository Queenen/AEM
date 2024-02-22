import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 p-lg-5 bg-primary text-light d-flex justify-content-center justify-content-between justify-content-md-evenly">
      <ul className="list-unstyled small lh-lg m-0">
        <li disabled className="fw-bold fs-6 dashedUnderline mb-4">
          Om AEM
        </li>
        <li>
          <Nav.Link as={Link} to="/AEM">
            Om AEM
          </Nav.Link>
        </li>
      </ul>
      <ul className="list-unstyled small lh-lg m-0">
        <li disabled className="fw-bold fs-6 dashedUnderline mb-4">
          Få Hjelp
        </li>
        <li>
          <Nav.Link as={Link} to="/personvern">
            Personvern & Cookies
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/brukervilkår" className="mt-3">
            Brukervilkår
          </Nav.Link>
        </li>
      </ul>
      <Nav.Link as={Link} to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/AEM-logo-2.png`}
          alt="AEM logo"
          id="logo"
        />
      </Nav.Link>
    </footer>
  );
}

export default Footer;
