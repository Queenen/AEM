import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-4 py-lg-5 bg-primary text-light d-flex flex-wrap justify-content-center justify-content-evenly">
      <ul className="list-unstyled small lh-lg m-0 d-flex flex-column col-4 col-sm-2 ps-4 ps-lg-5">
        <li disabled className="fw-bold fs-6 dashedUnderline mb-4">
          Informasjon
        </li>
        <li>
          <Nav.Link as={Link} to="/AEM">
            Om AEM
          </Nav.Link>
        </li>
      </ul>
      <ul className="list-unstyled small lh-lg m-0 d-flex flex-column col-auto pe-4 pe-sm-0">
        <li disabled className="fw-bold fs-6 dashedUnderline mb-4">
          Kontakt
        </li>
        <li className="d-flex flex-column">
            <p><span className="fw-bold">Tlf:</span> +47 941 73 799</p>
            <p><span className="fw-bold">Epost:</span> andersen.elektromekaniske<br className="d-sm-none"/>@gmail.com</p>
        </li>
      </ul>
      <div className="d-none d-sm-block d-flex flex-column col-sm-2 text-end pe-sm-4 pe-lg-5">
        <Nav.Link as={Link} to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/AEM-logo-2.png`}
            alt="AEM logo"
            id="logo"
          />
        </Nav.Link>
      </div>
      <div className="col-12 pt-3">
        <hr/>
      <p className=" text-center small fw-light">© 2024 Andersen Elektro Mekaniske. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
