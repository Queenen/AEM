import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function priceList(){
    return <>
    <main id="priceList" className="d-md-flex flex-wrap align-content-sm-stretch bg-black">
    <div className="flex-grow-1 col-md-6 col-lg-4 order-md-2">
        <img src={`${process.env.PUBLIC_URL}/images/workshop.png`} alt="man standing inside a workshop" id="priceListImg" />
        </div>
        <section id="prices" className="bg-secondary p-4 p-sm-5 flex-grow-1 col-md-auto d-flex flex-column align-items-md-center justify-content-md-center">
            <h1 className="display-3 mb-0 text-light">Prisliste <span><FontAwesomeIcon icon={faCoins} size="1x" className="ms-3" /></span></h1>
            
            <table class="table border border-1 mt-4 mt-sm-5 order-md-1">
  <tbody>
    <tr>
      <td className="bg-primary text-light fs-5 p-3">Diagnostisering</td>
      <td className="bg-primary text-light text-end fs-5 fw-light p-3">500 kr</td>
    </tr>
    <tr>
      <td className="bg-secondary text-light fs-5 p-3">Tuning</td>
      <td className="bg-secondary text-light text-end fs-5 fw-light p-3"><span className="me-1">Fra</span> 3500 kr</td>
    </tr>
    <tr>
      <td className="bg-primary text-light fs-5 p-3">Annet</td>
      <td className="bg-primary text-light text-end fs-5 fw-light p-3"><Link to="/kontakt" className="text-light">Ta kontakt</Link></td>
    </tr>
  </tbody>
</table>
        </section>
        <section id="tuningFact" className="bg-black text-light p-4 p-sm-5 lh-lg order-md-3 mx-md-auto">
        <div id="content" className="bg-black">
        <h2 className="mb-3 mb-md-4 display-6">Visste du at...</h2>
        <p>Å tune bilen din øker ikke bare ytelsen, noe som gjør den raskere og mer responsiv, men forbedrer også drivstoffeffektiviteten, slik at bilen din kan kjøre lenger på mindre drivstoff.</p>
        <p className="mb-0">I tillegg kan regelmessig tuning forlenge levetiden til bilen din ved å sørge for at motoren og andre kritiske komponenter er i optimal tilstand. Det handler ikke bare om fart; det handler om å gjøre smartere bruk av det som er under panseret, både for miljøet og lommeboken din.</p>
        </div>
        </section>
        </main>
        </>
};

export default priceList;