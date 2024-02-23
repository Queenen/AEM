import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function priceList(){
    return <>
    <main id="priceList" className="d-md-flex align-content-sm-stretch">
    <div className="flex-grow-1 col-md-6 order-md-2">
        <img src={`${process.env.PUBLIC_URL}/images/workshop.png`} alt="man standing inside a workshop" id="priceListImg" />
        </div>
        <section id="prices" className="bg-secondary p-4 p-sm-5 flex-grow-1 col-md-6 d-flex flex-column align-items-md-center justify-content-md-center">
            <h1 className="display-3 mb-0 text-light">Prisliste <span><FontAwesomeIcon icon={faCoins} size="1x" className="ms-3" /></span></h1>
            
            <table class="table border border-1 mt-4 mt-sm-5 order-md-1">
  <tbody>
    <tr>
      <td className="bg-primary text-light fs-5 p-3">Diagnostiering</td>
      <td className="bg-primary text-light text-end fs-5 fw-light p-3">500 kr</td>
    </tr>
    <tr>
      <td className="bg-secondary text-light fs-5 p-3">Tuning</td>
      <td className="bg-secondary text-light text-end fs-5 fw-light p-3"><span className="me-1">Fra</span> 3500 kr</td>
    </tr>
    <tr>
      <td className="bg-secondary text-light fs-5 p-3">Annet</td>
      <td className="bg-secondary text-light text-end fs-5 fw-light p-3"><Link to="/kontakt" className="text-light">Ta kontakt</Link></td>
    </tr>
  </tbody>
</table>
        </section>
        </main>
        </>
};

export default priceList;