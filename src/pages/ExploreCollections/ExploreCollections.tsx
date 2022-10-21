import React from "react";
import CardTrading from "../../components/CardTrading/CardTrading";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";

function ExploreCollections() {
  let tabs: string[] = ["All", "Authored", "Owned", "Sale"];
  return (
    <div className="main__content">
      <div className="container">
        <h1 className="main__title">
          Trending collections
        </h1>
      </div>

      <div className="trending__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
      </div>

      <div className="trending__section">
        <div className="container">
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
              {" "}
              <CardTrading />
              <CardTrading />
              <CardTrading />
              {/* @@loop('./parts/components/card_trading.html', [
                                {
                                    "image": "assets/images/__content/card__drop/1.jpg",
                                },
                                {
                                    "image": "assets/images/__content/card__drop/2.jpg",
                                },
                                {
                                    "image": "assets/images/__content/card__drop/3.jpg",
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
                                    "image": "assets/images/__content/card__drop/1.jpg",
                                },
                                {
                                    "image": "assets/images/__content/card__drop/2.jpg",
                                },
                                {
                                    "image": "assets/images/__content/card__drop/3.jpg",
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
              {" "}
              <CardTrading />
              <CardTrading />
              <CardTrading />
              {/* @@loop('./parts/components/card_trading.html', [
                                {
                                    "image": "assets/images/__content/card__drop/2.jpg",
                                },
                                {
                                    "image": "assets/images/__content/card__drop/3.jpg",
                                },
                                {
                                    "image": "assets/images/__content/card__drop/1.jpg",
                                },
                            ]) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCollections;
