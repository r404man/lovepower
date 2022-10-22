import React from "react";

function NFTSell() {
  return (
    <div className="nft__info_x__btns nft__info_x__btns--3">
      <a href="" className="btn__default btn__blue_x">
        Lower price
      </a>
      <a
        href="javascript:void(0)"
        data-fancybox
        data-src="#js_modal_offer"
        className="js__modal btn__default btn__ghost_x"
      >
        Cancel listing
      </a>
      <a href="" className="btn__default btn__ghost_x">
        Edit
      </a>
    </div>
  );
}

export default NFTSell;
