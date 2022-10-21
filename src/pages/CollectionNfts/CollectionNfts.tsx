import React from "react";
import CardDrop from "../../components/CardDrop/CardDrop";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import UserTop from "../../components/UserTop/UserTop";

function CollectionNfts() {
  let tabs: string[] = ["NFTs", "Activity"];
  return (
    <div className="main__container main__container--user_top">
      <UserTop />
      <div className="collection__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
      </div>
      <div className="collection__list">
        <div className="container">
          <CardDrop />
          <CardDrop />
          <CardDrop />
          <CardDrop />
          <CardDrop />
          <CardDrop />
          {/* @@include('./parts/components/card_drop.html', {
                        "image": "images/__content/card__drop/1.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "images/__content/card__drop/2.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "images/__content/card__drop/3.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "images/__content/card__drop/2.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "images/__content/card__drop/1.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "images/__content/card__drop/3.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    }) */}
        </div>
      </div>
    </div>
  );
}

export default CollectionNfts;
