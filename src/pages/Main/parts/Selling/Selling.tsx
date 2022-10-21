import React from "react";
import "./selling.scss";

function Selling() {
  return (
    <section className="home__selling">
      <div className="container">
        <div className="home__selling__inner">
          <div className="home__selling__title">
            Start Selling Your NFTs
          </div>
          <div className="home__selling__list">
            <div className="home__selling__item home__selling__item--1">
              <div className="home__selling__item__title">
                Mint your NFTs with no fees
              </div>
              <img
                className="home__selling__item__image"
                src="assets/images/pages/home/selling/1.png"
                // src={}
              />
            </div>
            <div className="home__selling__item home__selling__item--2">
              <div className="home__selling__item__title">
                Put NFTs on sale or on auction
              </div>
              <img
                className="home__selling__item__image"
                src="assets/images/pages/home/selling/2.png"
              />
            </div>
            <div className="home__selling__item home__selling__item--3">
              <div className="home__selling__item__title">
                Get paid for your digital collectibles
              </div>
              <img
                className="home__selling__item__image"
                src="assets/images/pages/home/selling/3.png"
              />
            </div>
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
