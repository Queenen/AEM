import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";

function Tuning() {
  return (
    <main id="tuning">
      <section
        id="tuningInfo"
        className="d-flex justify-content-center align-content-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/2150635401.jpg)`,
        }}>
        <div id="content">
          <div className="p-4 p-md-5 pb-2 pb-md-4">
            <h1 className="text-light display-4 dashedUnderline">
              Tuning
              <span className="ms-3">
                <FontAwesomeIcon icon={faUncharted} />
              </span>
            </h1>
          </div>
          <div className="text-light p-4 p-md-5 pt-md-0 fw-light">
            <p>
              Chip tuning, også kjent som ECU-omprogrammering, er en prosess som
              endrer programvaren i bilens motorstyringsenhet for å forbedre
              ytelsen.
            </p>
            <p>
              Dette justerer parametere som drivstoffinnsprøytning og
              tenningstidspunkt for å øke bilens kraft, drivstoffeffektivitet og
              kjøreopplevelse. Det er en software-basert metode som låser opp
              skjult ytelsespotensial uten å endre motorens fysiske komponenter.
            </p>
            <p className="fs-5 dashedUnderline mb-4">
              Hva er potensialet til min bil?
            </p>
            <p>
              Avhengig av hvilken bil du har vil resultatet etter tuning være
              ulikt. Ta gjerne
              <Link to="/kontakt" className="text-light mx-2">
                kontakt
              </Link>{" "}
              så kan jeg beregne forbedringspotensialet til akkurat din bil!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tuning;
