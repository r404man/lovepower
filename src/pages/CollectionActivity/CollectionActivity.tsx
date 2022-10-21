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

      {/* <CollectionTabs /> */}

      <div className="collection__tabs tabs__block js_tabs__block">
        <CollectionTabs tabs={tabs} />
        {/* <div className="container">
          <div className="collection__tabs__inner">
            <button className="active">NFTs</button>
            <button>Activity</button>
          </div>
        </div> */}
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
              {/* 
                            @@loop('./parts/components/card_activity.html', [
                                {
                                    "image": "images/pages/home/collection/1.jpg",
                                    "name": "Unwillingly on Course",
                                    "type": "Auction",
                                    "date": "3 months ago",
                                },
                                {
                                    "image": "images/pages/home/collection/2.jpg",
                                    "name": "UTOPIA Universe",
                                    "type": "Auction",
                                    "date": "23 days ago",
                                },
                                {
                                    "image": "images/pages/home/collection/3.jpg",
                                    "name": "Bustani Collective",
                                    "type": "Auction",
                                    "date": "2 hours ago",
                                },
                                {
                                    "image": "images/pages/home/collection/1.jpg",
                                    "name": "Unwillingly on Course",
                                    "type": "Auction",
                                    "date": "23 days ago",
                                },
                                {
                                    "image": "images/pages/home/collection/2.jpg",
                                    "name": "UTOPIA Universe",
                                    "type": "Auction",
                                    "date": "2 hours ago",
                                },
                                {
                                    "image": "images/pages/home/collection/3.jpg",
                                    "name": "Bustani Collective",
                                    "type": "Auction",
                                    "date": "3 months ago",
                                },
                                {
                                    "image": "images/pages/home/collection/2.jpg",
                                    "name": "UTOPIA Universe",
                                    "type": "Auction",
                                    "date": "23 days ago",
                                },
                                {
                                    "image": "images/pages/home/collection/3.jpg",
                                    "name": "Bustani Collective",
                                    "type": "Auction",
                                    "date": "2 hours ago",
                                },
                                {
                                    "image": "images/pages/home/collection/1.jpg",
                                    "name": "Unwillingly on Course",
                                    "type": "Auction",
                                    "date": "23 days ago",
                                },
                                {
                                    "image": "images/pages/home/collection/2.jpg",
                                    "name": "UTOPIA Universe",
                                    "type": "Auction",
                                    "date": "2 hours ago",
                                },
                                {
                                    "image": "images/pages/home/collection/3.jpg",
                                    "name": "Bustani Collective",
                                    "type": "Auction",
                                    "date": "3 months ago",
                                },

                            ]) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionActivity;
