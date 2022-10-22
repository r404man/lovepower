import React from "react";
import CardDrop from "../../components/CardDrop/CardDrop";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import PersonalTop from "../../components/PersonalTop/PersonalTop";
import PersonalFilter from "../../components/PersonalFilter/PersonalFilter";

function PersonalNfts() {
  let tabs: string[] = ["Ownen", "Created"];
  return (
    <div className="main__container main__container--user_top">
      <PersonalTop />

      <div className="personal__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
      </div>

      <PersonalFilter />

      <div className="personal__list__block">
        <div className="container">
          <div className="personal__list__drops">
            <CardDrop />
            <CardDrop />
            <CardDrop />
            <CardDrop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalNfts;
