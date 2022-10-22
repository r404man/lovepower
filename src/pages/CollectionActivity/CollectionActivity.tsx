import React from "react";
import CardActivity from "../../components/CardActivity/CardActivity";
import CollectionTabs from "../../components/CollectionTabs/CollectionTabs";
import PersonalTop from "../../components/PersonalTop/PersonalTop";
import UserTop from "../../components/UserTop/UserTop";

function CollectionActivity() {
  let tabs: string[] = ["NFTs", "Activity"];
  return (
    <div className="main__container main__container--user_top">
      <UserTop />
      <div className="collection__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
      </div>
      <div className="activity__block">
        <div className="container">
          <div className="activity__title">
            Sales History
          </div>
          <div className="activity__list">
            <div className="activity__list__head">
              <div className="activity__list__col activity__list__col--name">
                Artwork
              </div>
              <div className="activity__list__col activity__list__col--from">
                From
              </div>
              <div className="activity__list__col activity__list__col--to">
                To
              </div>
              <div className="activity__list__col activity__list__col--type">
                Type
              </div>
              <div className="activity__list__col activity__list__col--price">
                Price
              </div>
              <div className="activity__list__col activity__list__col--date">
                Date
              </div>
            </div>

            <div className="activity__list__body">
              <CardActivity />
              <CardActivity />
              <CardActivity />
              <CardActivity />
              <CardActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionActivity;
