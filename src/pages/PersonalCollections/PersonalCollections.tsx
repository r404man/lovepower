import React from "react";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import PersonalTop from "../../components/PersonalTop/PersonalTop";
import TrendingBlock from "../../components/TrendingBlock/TrendingBlock";
import PersonalFilter from "../../components/PersonalFilter/PersonalFilter";

function PersonalCollections() {
  let tabs: string[] = ["Ownen", "Created"];
  return (
    <div className="main__container main__container--user_top">
      <PersonalTop />

      <div className="personal__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
      </div>

      <PersonalFilter />

      <div className="personal__list__drops">
        <div className="container">
          <div className="personal__list__trading">
            <TrendingBlock />
            <TrendingBlock />
            <TrendingBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalCollections;
