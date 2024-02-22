import React from "react";

function AEM() {
  return (
    <>
      <main id="AEM">
        <section id="hero" className="d-flex">
          <div className="p-4 p-sm-5 d-flex flex-column align-items-center justify-content-center col-6">
            <h1 className="fw-bold fs-4 mb-4 mb-lg-5">
              Jimmy Nicklas Andersen
            </h1>
            <ul className="ps-3 p-sm-0 me-sm-2 lh-lg">
              <li>Industrimekaniker</li>
              <li>Landbruksmaskin mekaniker</li>
              <li>Erfaren biltuner</li>
              <li>Gode referanser</li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src={`${process.env.PUBLIC_URL}/images/andersen.png`}
              alt="profile"
              id="profileImg"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default AEM;
