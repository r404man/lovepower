import React from "react";
import NFTinfo from "../../components/NFTInfo/NFTinfo";
import OfferTable from "../../components/OfferTable/OfferTable";
import Slider from "../../components/SliderNft/Slider";
import UserUnit from "../../components/UserUnit/UserUnit";

function BuyerPage() {
  return (
    <div className="main__content">
      <NFTinfo buy={"buy"} />
      <div className="offer__block">
        <div className="container">
          <div className="offer__block__inner">
            <div className="offer__block__title">
              Offers
            </div>
            <OfferTable />
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
}

export default BuyerPage;
