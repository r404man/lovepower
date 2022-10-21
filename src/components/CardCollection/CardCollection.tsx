import React from "react";

function CardCollection() {
  return (
    <div className="home__collection__item">
      <a href="" className="home__collection__item__image">
        <div className="home__collection__item__image__inner">
          <img
            src="assets/images/pages/home/collection/2.jpg"
            alt="@@name"
          />
        </div>
      </a>
      <div className="home__collection__item__info">
        <a
          href="#"
          className="home__collection__item__name"
        >
          @@name
        </a>
        <div className="home__collection__item__floor">
          Floor: 73 LPM
        </div>
      </div>
      <div className="home__collection__item__info_2">
        <div className="home__collection__item__move @@classPrice">
          @@price
        </div>
        <div className="home__collection__item__info_lpm">
          166,25 LPM
        </div>
      </div>
    </div>
  );
}

export default CardCollection;
