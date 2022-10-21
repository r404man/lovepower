import React from "react";

function Promo() {
  return (
    <section className="home__promo">
      <div className="container">
        <div className="home__promo__info">
          <div className="home__promo__title">
            Love Power Marketplace
          </div>
          <div className="home__promo__text">
            Your one-stop marketplace to mint, list, buy and
            sell NFT collections.
          </div>
          <div className="home__promo__btns">
            <a
              href=""
              className="btn__default btn__1 btn__home__promo_1"
            >
              Create
            </a>
            <a
              href=""
              className="btn__default btn__2 btn__home__promo_2"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className="home__promo__image">
        <img src="assets/images/pages/home/promo.png" />
      </div>
    </section>
  );
}

export default Promo;
