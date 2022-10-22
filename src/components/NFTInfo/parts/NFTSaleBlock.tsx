import React from "react";
import NFTBuy from "./NFTBuy";
import NFTSell from "./NFTSell";

function NFTSaleBlock(props: any) {
  let buy: string = props.buy;
  return (
    <div className="nft__info_x__sale__block">
      <div className="nft__info_x__sale__end">
        Sale ends October 21, 2022 at 6:06pm GMT+3
      </div>
      <div className="nft__info_x__price">
        <div className="nft__info_x__price__title">
          Current price
        </div>
        <div className="nft__info_x__price__value">
          <div className="nft__info_x__price__value__lpm">
            0,1 LPM
          </div>
          <div className="nft__info_x__price__value__dollar">
            $134,00
          </div>
        </div>
      </div>
      <NFTSell />
    </div>
  );
}

export default NFTSaleBlock;
