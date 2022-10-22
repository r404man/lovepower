import React from "react";

function CardDrop() {
  return (
    <div className="card__drop">
      <div className="card__drop__image">
        <div className="card__drop__image__inner">
          <img
            src="assets/images/__content/card__drop/2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="card__drop__info">
        <div className="card__drop__who">
          <div className="card__drop__who__image">
            <div className="card__drop__who__image__inner">
              <img src="assets/images/pages/home/hide__seek/1.jpg" />
            </div>
          </div>
          <div className="card__drop__who__name">
            @@name
          </div>
        </div>
        <div className="card__drop__add_info">
          <div className="card__drop__add_info__title">
            Last sold
          </div>
          <div className="card__drop__add_info__value">
            @@price
          </div>
        </div>
        <a
          href=""
          className="btn__default bnt__y btn__card__drop"
        >
          Buy
        </a>
      </div>
    </div>
  );
}

export default CardDrop;
