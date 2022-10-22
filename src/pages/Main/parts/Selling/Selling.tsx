import React from "react";
import SellingItem from "./SellingItem/SellingItem";

function Selling() {
  return (
    <section className="home__selling">
      <div className="container">
        <div className="home__selling__inner">
          <div className="home__selling__title">
            Start Selling Your NFTs
          </div>
          <div className="home__selling__list">
            <SellingItem />
            <SellingItem />
            <SellingItem />
          </div>
          <div className="home__selling__bottom">
            <a
              href=""
              className="btn__default btn__x btn__selling"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Selling;
