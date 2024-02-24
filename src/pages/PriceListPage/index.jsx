import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function priceList(){
    return <>
    <main id="priceList" className="d-md-flex flex-wrap align-content-sm-stretch bg-black">
    <div className="flex-grow-1 col-md-6 col-lg-4 order-md-2">
        <img src={`${process.env.PUBLIC_URL}/images/workshop.jpg`} alt="man standing inside a workshop" id="priceListImg" />
        </div>
        <section id="prices" className="bg-secondary p-4 p-sm-5 flex-grow-1 col-md-auto d-flex flex-column justify-content-md-center">
            <h1 className="display-5 text-light dashedUnderline" style={{ textUnderlineOffset: "20px" }}>Prisliste <span><FontAwesomeIcon icon={faCoins} size="xs" className="ms-3" style={{marginBottom:"-5px"}} /></span></h1>
            
            <table class="table border border-1 mt-5 order-md-1">
  <tbody>
    <tr>
      <td className="bg-primary text-light fs-5 p-3">Diagnostisering</td>
      <td className="bg-primary text-light text-end fs-5 fw-light p-3"><span className="me-1">Fra</span> 500 kr</td>
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
        <p>
Å tune bilen din øker ikke bare ytelsen,
men forbedrer også drivstoffeffektiviteten
slik at bilen din kan kjøre lenger på mindre drivstoff.</p>
        <h3 className="fs-4 fw-light mt-4 mb-3">Det finnes to stadier med tuning:</h3>
        <p><span className="text-decoration-underline">Steg 1</span> representerer den mest grunnleggende tilnærmingen for å øke ytelsen. 
Dette innebærer å legge inn en tilpasset programvarefil i kjøretøyet. 
Ved å fjerne dieselpartikkelfilteret oppnås desto bedre effekt, dette kalles for <span className="text-decoration-underline">steg 2.</span></p>
        </div>
        </section>
        </main>
        </>
};

export default priceList;