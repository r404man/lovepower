import React from "react";
import Slider from "../../components/SliderNft/Slider";

function SellerPage() {
  return (
    <div className="main__content">
      <div className="nft__info_x">
        <div className="container">
          <div className="nft__info_x__image">
            <div className="nft__info_x__image__inner">
              <img
                src="assets/images/pages//home/hide__seek.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="nft__info_x__inner">
            <div className="nft__info_x__inner__col">
              <div className="nft__info_x__title">
                Hide and seek
              </div>
              <div className="nft__info_x__text">
                A handcrafted collection of 10,000
                characters developed by artist DirtyRobot.
                Each with their own identity.
              </div>
              <div className="nft__info_x__date">
                Minted on Sep 5, 2022
              </div>

              <div className="nft__info_x__user__row">
                <div className="nft__info_x__user__col">
                  <div className="nft__info_x__user__title">
                    Created by
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
                <div className="nft__info_x__user__col">
                  <div className="nft__info_x__user__title">
                    Collection
                  </div>
                  <a href="" className="user__unit">
                    <div className="user__unit__image">
                      <img src="assets/images/pages/home/hide__seek/2.jpg" />
                    </div>
                    <div className="user__unit__title">
                      drawn by diela
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="nft__info_x__sale__block">
              <div className="nft__info_x__sale__end">
                Sale ends October 21, 2022 at 6:06pm GMT+3{" "}
              </div>
              <div className="nft__info_x__price">
                <div className="nft__info_x__price__title">
                  Current price
                </div>
                <div className="nft__info_x__price__value">
                  <div className="nft__info_x__price__value__lpm">
                    0,1 LPM
                  </div>
                  <div className="nft__info_x__price__value__dollar">
                    $134,00
                  </div>
                </div>
              </div>
              <div className="nft__info_x__btns nft__info_x__btns--3">
                <a
                  href=""
                  className="btn__default btn__blue_x"
                >
                  Lower price
                </a>
                <a
                  href="javascript:void(0)"
                  data-fancybox
                  data-src="#js_modal_offer"
                  className="js__modal btn__default btn__ghost_x"
                >
                  Cancel listing
                </a>
                <a
                  href=""
                  className="btn__default btn__ghost_x"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offer__block">
        <div className="container">
          <div className="offer__block__inner">
            <div className="offer__block__title">
              Offers
            </div>
            <div className="offer__table">
              <div className="offer__table__thead">
                <div className="offer__table__col offer__table__col--1">
                  Price
                </div>
                <div className="offer__table__col offer__table__col--2">
                  USD Price
                </div>
                <div className="offer__table__col offer__table__col--3">
                  Floor Difference
                </div>
                <div className="offer__table__col offer__table__col--4">
                  Expiration
                </div>
                <div className="offer__table__col offer__table__col--5">
                  From
                </div>
              </div>
              <div className="offer__table__tbody">
                <div className="offer__table__row">
                  <div
                    className="offer__table__col offer__table__col--1"
                    data-title="Price"
                  >
                    0,29 ETH
                  </div>
                  <div
                    className="offer__table__col offer__table__col--2"
                    data-title="USD Price"
                  >
                    $393,63
                  </div>
                  <div
                    className="offer__table__col offer__table__col--3"
                    data-title="Floor Difference"
                  >
                    25% below
                  </div>
                  <div
                    className="offer__table__col offer__table__col--4"
                    data-title="Expiration"
                  >
                    9 minutes
                  </div>
                  <div
                    className="offer__table__col offer__table__col--5"
                    data-title="From"
                  >
                    <a href="">Curlyboy_Vault</a>
                  </div>
                </div>
                <div className="offer__table__row">
                  <div
                    className="offer__table__col offer__table__col--1"
                    data-title="Price"
                  >
                    0,29 ETH
                  </div>
                  <div
                    className="offer__table__col offer__table__col--2"
                    data-title="USD Price"
                  >
                    $393,63
                  </div>
                  <div
                    className="offer__table__col offer__table__col--3"
                    data-title="Floor Difference"
                  >
                    25% below
                  </div>
                  <div
                    className="offer__table__col offer__table__col--4"
                    data-title="Expiration"
                  >
                    9 minutes
                  </div>
                  <div
                    className="offer__table__col offer__table__col--5"
                    data-title="From"
                  >
                    <a href="">Curlyboy_Vault</a>
                  </div>
                </div>
                <div className="offer__table__row">
                  <div
                    className="offer__table__col offer__table__col--1"
                    data-title="Price"
                  >
                    0,29 ETH
                  </div>
                  <div
                    className="offer__table__col offer__table__col--2"
                    data-title="USD Price"
                  >
                    $393,63
                  </div>
                  <div
                    className="offer__table__col offer__table__col--3"
                    data-title="Floor Difference"
                  >
                    25% below
                  </div>
                  <div
                    className="offer__table__col offer__table__col--4"
                    data-title="Expiration"
                  >
                    9 minutes
                  </div>
                  <div
                    className="offer__table__col offer__table__col--5"
                    data-title="From"
                  >
                    <a href="">Curlyboy_Vault</a>
                  </div>
                </div>
                <div className="offer__table__row">
                  <div
                    className="offer__table__col offer__table__col--1"
                    data-title="Price"
                  >
                    0,29 ETH
                  </div>
                  <div
                    className="offer__table__col offer__table__col--2"
                    data-title="USD Price"
                  >
                    $393,63
                  </div>
                  <div
                    className="offer__table__col offer__table__col--3"
                    data-title="Floor Difference"
                  >
                    25% below
                  </div>
                  <div
                    className="offer__table__col offer__table__col--4"
                    data-title="Expiration"
                  >
                    9 minutes
                  </div>
                  <div
                    className="offer__table__col offer__table__col--5"
                    data-title="From"
                  >
                    <a href="">Curlyboy_Vault</a>
                  </div>
                </div>
                <div className="offer__table__row">
                  <div
                    className="offer__table__col offer__table__col--1"
                    data-title="Price"
                  >
                    0,29 ETH
                  </div>
                  <div
                    className="offer__table__col offer__table__col--2"
                    data-title="USD Price"
                  >
                    $393,63
                  </div>
                  <div
                    className="offer__table__col offer__table__col--3"
                    data-title="Floor Difference"
                  >
                    25% below
                  </div>
                  <div
                    className="offer__table__col offer__table__col--4"
                    data-title="Expiration"
                  >
                    9 minutes
                  </div>
                  <div
                    className="offer__table__col offer__table__col--5"
                    data-title="From"
                  >
                    <a href="">Curlyboy_Vault</a>
                  </div>
                </div>
                <div className="offer__table__row">
                  <div
                    className="offer__table__col offer__table__col--1"
                    data-title="Price"
                  >
                    0,29 ETH
                  </div>
                  <div
                    className="offer__table__col offer__table__col--2"
                    data-title="USD Price"
                  >
                    $393,63
                  </div>
                  <div
                    className="offer__table__col offer__table__col--3"
                    data-title="Floor Difference"
                  >
                    25% below
                  </div>
                  <div
                    className="offer__table__col offer__table__col--4"
                    data-title="Expiration"
                  >
                    9 minutes
                  </div>
                  <div
                    className="offer__table__col offer__table__col--5"
                    data-title="From"
                  >
                    <a href="">Curlyboy_Vault</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider />
      {/* @@include('./parts/components/slider_nft.html') */}
    </div>
  );
}

export default SellerPage;
