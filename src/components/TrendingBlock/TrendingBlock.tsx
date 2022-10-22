import React from "react";
import CardTrading from "../CardTrading/CardTrading";
import UserUnit from "../UserUnit/UserUnit";

function TrendingBlock() {
  return (
    <div className="trending__block">
      <div className="trending__block__who">
        <div className="trending__block__who__image">
          <div className="trending__block__who__image__inner">
            <img
              src="assets/images/__content/trading/1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="trending__block__who__info">
          <div className="trending__block__who__name">
            DigiDaigaku Genesis
          </div>
          <div className="trending__block__who__count">
            121 NFTs
          </div>
          <UserUnit />
        </div>
      </div>
      <div className="trending__list js_trending__list">
        <CardTrading />
        <CardTrading />
        <CardTrading />
      </div>
    </div>
  );
}

export default TrendingBlock;
