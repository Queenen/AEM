import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 p-lg-5 bg-primary text-light d-flex justify-content-center justify-content-evenly">
      <ul className="list-unstyled small lh-lg m-0 d-flex flex-column col-4 col-md-2">
        <li disabled className="fw-bold fs-6 dashedUnderline mb-4">
          AEM
        </li>
        <li>
          <Nav.Link as={Link} to="/AEM">
            Om AEM
          </Nav.Link>
        </li>
      </ul>
      <ul className="list-unstyled small lh-lg m-0 d-flex flex-column col-4 col-md-2">
        <li disabled className="fw-bold fs-6 dashedUnderline mb-4">
          Få Hjelp
        </li>
        <li>
          <Nav.Link as={Link} to="/personvern">
            Personvern & Cookies
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/brukervilkår" className="mt-2">
            Brukervilkår
          </Nav.Link>
        </li>
      </ul>
      <div className="d-none d-sm-block d-flex flex-column col-2">
        <Nav.Link as={Link} to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/AEM-logo-2.png`}
            alt="AEM logo"
            id="logo"
          />
        </Nav.Link>
      </div>
    </footer>
  );
}

export default Footer;
