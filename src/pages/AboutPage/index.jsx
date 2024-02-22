import React from "react";

function AEM() {
  return (
    <>
      <main id="AEM">
        <h1 className="bg-secondary text-white mb-0 p-5 pb-0 display-3">
          Om AEM
        </h1>
        <section id="hero" className="d-sm-flex align-items-sm-stretch">
          <div className="order-2 col-sm-6 flex-grow-1 p-5 pb-3 pb-sm-5 bg-secondary">
            <img
              src={`${process.env.PUBLIC_URL}/images/andersen.png`}
              alt="profile photography"
              id="profileImg"
            />
          </div>
          <div className="bg-secondary text-light order-1 col-sm-6 flex-grow-1 p-5 pt-4 pe-sm-0 d-flex flex-column justify-content-center">
            <h1 className="d-flex justify-content-sm-center fs-3 mb-3">
              Jimmy Nicklas Andersen
            </h1>
            <div className="d-flex justify-content-sm-center">
              <ul className="ps-3 ps-sm-0 mb-0 lh-lg">
                <li>Industrimekaniker</li>
                <li>Landbruksmaskin mekaniker</li>
                <li>Erfaren med biltuning og diagnose</li>
                <li>Gode referanser</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AEM;
