import React from "react";
import CardTrading from "../CardTrading/CardTrading";
import "./slider.scss";

function Slider() {
  return (
    <div className="more__collection">
      <div className="container">
        <div className="more__collection__title">
          More from this collection
        </div>
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
              <a href="" className="user__unit">
                <div className="user__unit__image">
                  <img src="assets/images/pages/home/hide__seek/1.jpg" />
                </div>
                <div className="user__unit__title">
                  @dielamaharanie
                </div>
              </a>
            </div>
          </div>
          <div className="trending__list__slider__wrap">
            <div className="js__trending__list__slider trending__list__slider">
              <CardTrading />
              <CardTrading />
              <CardTrading />
              <CardTrading />
              {/* @@loop('card_trading.html', [
                        {
                            "image": "assets/images/__content/card__drop/1.jpg",
                        },
                        {
                            "image": "assets/images/__content/card__drop/2.jpg",
                        },
                        {
                            "image": "assets/images/__content/card__drop/3.jpg",
                        },
                        {
                            "image": "assets/images/__content/card__drop/2.jpg",
                        },
                        {
                            "image": "assets/images/__content/card__drop/3.jpg",
                        },
                    ]) */}
              <div className="trending__list__slide__next">
                <a
                  href=""
                  className="trending__list__slide__next__info"
                >
                  <div className="trending__list__slide__btn">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 7.72559L0.75 7.72559"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.69971 1.701C9.69971 1.701 15.7497 4.962 15.7497 7.724C15.7497 10.488 9.69971 13.75 9.69971 13.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="trending__list__slide__btn__text">
                    Show more
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
