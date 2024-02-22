import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faGear } from "@fortawesome/free-solid-svg-icons";

function AEM() {
  return (
    <>
      <main id="AEM">
        <h1 className="bg-secondary text-white mb-0 p-5 pb-0 display-3">
          Om AEM
        </h1>
        <section
          id="hero"
          className="d-sm-flex align-items-sm-stretch bg-secondary ">
          <div className="order-2 col-sm-6 col-lg-8 flex-grow-1 p-5 pb-3 pb-sm-5 bg-secondary">
            <img
              src={`${process.env.PUBLIC_URL}/images/andersen.png`}
              alt="profile photography"
              id="profileImg"
            />
          </div>
          <div className="bg-secondary text-light order-1 col-sm-6 col-lg-4 flex-grow-1 p-5 pt-4 pt-sm-5 pe-sm-0 d-flex flex-column justify-content-center">
            <h2 className="d-flex mb-3 fs-2 fw-light">
              Jimmy Nicklas Andersen
            </h2>
            <div className="d-flex">
              <ul className="ps-3 mb-0 lh-lg">
                <li>Industrimekaniker</li>
                <li>Landbruksmaskin mekaniker</li>
                <li>Erfaren med biltuning og diagnose</li>
                <li>Gode referanser</li>
              </ul>
            </div>
          </div>
        </section>
        <hr className=" border border-light border-1 my-0 bg-secondary" />
        <div className="d-md-flex justify-content-center justify-content-evenly bg-black py-5">
          <section
            id="history"
            className="bg-black text-light px-5 pb-4 pb-md-0">
            <div className="mx-auto py-md-4">
              <h2 className="fs-1 fw-light mb-3">
                Historie
                <span>
                  <FontAwesomeIcon
                    className="ms-3"
                    icon={faClockRotateLeft}
                    size="1x"
                  />
                </span>
              </h2>
              <p className="mb-0">
                Jimmy Nicklas Andersen grunnla Andersen Elektro Mekaniske (AEM)
                i 2023, med et tydelig formål for øye: å tilby førsteklasses
                diagnostisering og tuningtjenester for biler. Med omfattende
                erfaring fra tidligere engasjementer og prosjekter, er Andersen
                dedikert til å frembringe arbeid av eksepsjonell kvalitet, som
                ikke bare innfrir, men overgår kundenes forventninger.
              </p>
            </div>
          </section>
          <section id="expertise" className="bg-black text-light px-5">
            <div className="mx-auto py-md-4">
              <h2 className="fs-1 fw-light mb-3">
                Ekspertise
                <FontAwesomeIcon className="ms-3" icon={faGear} size="1x" />
              </h2>
              <p className="mb-0">
                Med en imponerende samling av tuningverktøy av ypperste
                kvalitet, er Jimmy Nicklas Andersen i stand til å tilby
                presisjonsmessig tuning av biler fra årgang 1990 og nyere. Hans
                ekspertise og bruk av avansert utstyr sikrer at hver bil blir
                optimalisert for å møte dagens krav til ytelse og effektivitet,
                uavhengig av merke eller modell.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AEM;
