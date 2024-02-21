import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

function Troubleshoot() {
  return (
    <main id="tuning">
      <section
        id="troubleshoot"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/car-dashboard-wheel-close-up.jpg)`,
        }}>
        <div id="content">
          <div className="p-4 p-md-5 pb-2 pb-md-4">
            <h1 className="text-light display-4 dashedUnderline">
              Feilsøking
              <span className="ms-3">
                <FontAwesomeIcon icon={faScrewdriverWrench} size="xs" />
              </span>
            </h1>
          </div>
          <div className="text-light p-4 p-md-5 pt-md-0 fw-light">
            <p>
              Feilsøking av en bil med fokus på feilkoder innebærer å bruke en
              OBD-II skanner for å lese av diagnostiske feilkoder fra bilens
              datamaskin. Dette gir en indikasjon på bilens problemer. Prosessen
              omfatter:
            </p>
            <ol className="ps-3 mt-4">
              <li>
                <span className="fw-bold">Koble til OBD-II Skanner:</span> Fest
                skanneren til bilens OBD-II port og les av feilkodene.
              </li>
              <li>
                <span className="fw-bold">Tolk Feilkoder:</span> Bruk koden(e)
                for å identifisere spesifikke problemer eller feilområder.
              </li>
              <li>
                <span className="fw-bold">Undersøkelse:</span> Utfør en
                detaljert inspeksjon basert på feilkodene for å finne den
                underliggende årsaken.
              </li>
              <li>
                <span className="fw-bold">Reparasjon:</span> Gjør nødvendige
                reparasjoner eller justeringer for å rette opp i problemene som
                feilkodene indikerer.
              </li>
              <li>
                <span className="fw-bold">Tilbakestille Feilkoder:</span> Etter
                reparasjon, tilbakestille feilkodene og kjør en test for å sikre
                at problemet er løst.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Troubleshoot;
