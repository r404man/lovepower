import React from "react";

function CardTrading() {
  return (
    <div className="trending__item">
      <div className="trending__item__image">
        <div className="trending__item__image__inner">
          <img
            src="assets/images/__content/card__drop/1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="trending__item__info">
        <div className="trending__item__info__add_text">
          Buy now
        </div>
        <div className="trending__item__info__add_value">
          0.869 LPM
        </div>
      </div>
    </div>
  );
}

export default CardTrading;
