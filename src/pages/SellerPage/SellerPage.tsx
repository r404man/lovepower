import React from "react";
import NFTinfo from "../../components/NFTInfo/NFTinfo";
import OfferTable from "../../components/OfferTable/OfferTable";
import Slider from "../../components/SliderNft/Slider";

function SellerPage() {
  return (
    <div className="main__content">
      <NFTinfo />
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

export default SellerPage;
