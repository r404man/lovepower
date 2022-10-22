import React from "react";
import CardTrading from "../../components/CardTrading/CardTrading";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import TrendingBlock from "../../components/TrendingBlock/TrendingBlock";
import UserUnit from "../../components/UserUnit/UserUnit";

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
          <TrendingBlock />
          <TrendingBlock />
          <TrendingBlock />
        </div>
      </div>
    </div>
  );
}

export default ExploreCollections;
