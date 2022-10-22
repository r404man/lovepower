import React from "react";
import UserUnit from "../UserUnit/UserUnit";
import NFTDetails from "./parts/NFTDetails";
import NFTSaleBlock from "./parts/NFTSaleBlock";

function NFTinfo(props: any) {
  return (
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
            <NFTDetails />

            <div className="nft__info_x__user__row">
              <div className="nft__info_x__user__col">
                <div className="nft__info_x__user__title">
                  Created by
                </div>
                <UserUnit />
              </div>
              <div className="nft__info_x__user__col">
                <div className="nft__info_x__user__title">
                  Collection
                </div>
                <UserUnit />
              </div>
            </div>

            <NFTSaleBlock buy={props.buy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTinfo;
