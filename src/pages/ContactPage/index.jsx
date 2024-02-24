import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <main id="contact">
        <div className="text-light p-4 p-sm-5 bg-secondary ">
          <div id="contactInfo" className="px-4 px-lg-5 pb-sm-4 lh-lg">
            <h1 className="display-5 mb-4 mb-sm-5 bg-secondary dashedUnderline" style={{ textUnderlineOffset: "20px" }}>Kontakt</h1>
            <p>
              Kontakt meg gjerne på epost eller telefon ved eventuelle spørsmål,
              ytterligere informasjon eller for å avtale en
              konsultasjon/timesbestilling.
            </p>
            <p>
              Jeg forplikter meg til å svare på alle henvendelser med høyeste
              prioritet. Takk for at du velger AEM, jeg ser frem til å høre fra
              deg! 
            </p>
          </div>
          <section
            id="getInTouch"
            className="bg-secondary text-light text-center p-4 d-flex flex-wrap gap-4 gap-sm-5 gap-xl-0 ">
            <div
              id="callCard"
              className="border border-2 border-radius-2 py-4 py-sm-5 col-12 col-lg-8">
              <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3" />
              <h2>Telefon</h2>
              <p className="fw-bold mt-4">Jimmy Nicklas Andersen</p>
              <p>+47 941 73 799</p>
              <br></br>
              <a
                href="tel:+4794173799"
                className="btn btn-info text-light p-2 w-75">
                Ring meg
              </a>
            </div>
            <div
              id="emailCard"
              className="border border-2 border-radius-2 py-4 py-sm-5 col-12 col-lg-8">
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3" />
              <h2>Epost</h2>
              <p className="fw-bold mt-4">Jimmy Nicklas Andersen</p>
              <p>
                andersen.elektromekaniske<br></br>@gmail.com
              </p>
              <a
                href="mailto:andersen.elektromekaniske@gmail.com"
                className="btn btn-info text-light p-2 w-75">
                Send epost
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
