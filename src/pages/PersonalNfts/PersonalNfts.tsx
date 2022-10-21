import React from "react";
import CardDrop from "../../components/CardDrop/CardDrop";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import PersonalTop from "../../components/PersonalTop/PersonalTop";

function PersonalNfts() {
  let tabs: string[] = ["Ownen", "Created"];
  return (
    <div className="main__container main__container--user_top">
      <PersonalTop />

      <div className="personal__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
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
