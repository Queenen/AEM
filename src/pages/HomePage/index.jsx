import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCar } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main id="home" className="container-fluid p-0">
      <div className="row-fluid d-lg-flex flex-wrap">
        <div className="col-lg-6 order-lg-2">
          <section
            id="tuning"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/2150635401.jpg)`,
            }}>
            <div id="overlay"></div>
            <div id="content">
              <h1 className="text-light display-4 px-4 px-md-5">
                Opplev Gleden av Optimalisert Ytelse
              </h1>
              <Nav.Link as={Link} to="/tuning">
                <button className="btn btn-info text-light p-3 w-75 text-start px-4">
                  Mer om Tuning
                  <span>
                    <FontAwesomeIcon className="ms-2" icon={faAnglesRight} />
                  </span>
                </button>
              </Nav.Link>
            </div>
          </section>
        </div>

        <div className="col-lg-12 order-lg-1">
        <Nav.Link as={Link} to="/kontakt">
            <section
              id="tuneCalc"
              className="bg-secondary px-4 px-md-5 py-5 text-center">
              <h1 className="fs-3 text-light fw-light">
                Sjekk potensialet til bilen din, ta kontakt
                <span className="text-decoration-underline ms-2">her</span>
                <FontAwesomeIcon className="ms-3" icon={faCar} />
              </h1>
            </section>
            </Nav.Link>
        </div>
        <div className="col-lg-6 order-lg-3">
          <section
            id="troubleshoot"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/car-dashboard-wheel-close-up.jpg)`,
            }}>
            <div id="overlay"></div>
            <div id="content">
              <h1 className="text-light display-4 px-4 px-md-5">
                Presis Feilsøking, Rask Løsning
              </h1>
              <Nav.Link as={Link} to="/feilsøking">
                <button className="btn btn-info text-light p-3 w-75 text-end px-4">
                  Mer om Feilsøking
                  <span>
                    <FontAwesomeIcon className="ms-2" icon={faAnglesRight} />
                  </span>
                </button>
              </Nav.Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
