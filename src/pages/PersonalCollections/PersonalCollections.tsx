import React from "react";
import CardTrading from "../../components/CardTrading/CardTrading";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import PersonalTop from "../../components/PersonalTop/PersonalTop";
import UserTop from "../../components/UserTop/UserTop";

function PersonalCollections() {
  let tabs: string[] = ["Ownen", "Created"];
  return (
    <div className="main__container main__container--user_top">
      <PersonalTop />

      <div className="personal__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
        {/* <div className="container">

          <div className="collection__tabs__inner">
            <button className="active">Ownen</button>
            <button>Created</button>
          </div>
        </div> */}
      </div>
      <div className="personal__filter">
        <div className="container">
          <div className="personal__filter__search">
            <input
              type="text"
              name="text"
              placeholder="Search by name"
            />
            <input type="submit" value="send" />
          </div>
          <div className="personal__filter__select">
            <div className="custom__select js_custom__select">
              <div className="custom__select__view">
                Show Collections
              </div>
              <input type="hidden" name="select" />
              <div className="custom__select__list">
                <ul>
                  <li>Show Collections</li>
                  <li>Show NFTs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="personal__list__drops">
        <div className="container">
          <div className="personal__list__trading">
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
              <div className="trending__list js_trending__list">
                <CardTrading />
                <CardTrading />
                <CardTrading />

                {/* @@loop('./parts/components/card_trading.html', [
                                    {
                                        "image": "images/__content/card__drop/1.jpg",
                                    },
                                    {
                                        "image": "images/__content/card__drop/2.jpg",
                                    },
                                    {
                                        "image": "images/__content/card__drop/3.jpg",
                                    },
                                ]) */}
              </div>
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
              <div className="trending__list js_trending__list">
                <CardTrading />
                <CardTrading />
                <CardTrading />
                {/* @@loop('./parts/components/card_trading.html', [
                                    {
                                        "image": "images/__content/card__drop/1.jpg",
                                    },
                                    {
                                        "image": "images/__content/card__drop/2.jpg",
                                    },
                                    {
                                        "image": "images/__content/card__drop/3.jpg",
                                    },
                                ]) */}
              </div>
            </div>

            <div className="trending__block">
              <div className="trending__block__who">
                <div className="trending__block__who__image">
                  <div className="trending__block__who__image__inner">
                    <img
                      src="assets/images/__content/trading/2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="trending__block__who__info">
                  <div className="trending__block__who__name">
                    Timeless
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
              <div className="trending__list js_trending__list">
                {/* @@loop('./parts/components/card_trading.html', [
                                    {
                                        "image": "images/__content/card__drop/2.jpg",
                                    },
                                    {
                                        "image": "images/__content/card__drop/3.jpg",
                                    },
                                    {
                                        "image": "images/__content/card__drop/1.jpg",
                                    },
                                ]) */}
                <CardTrading />
                <CardTrading />
                <CardTrading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalCollections;
