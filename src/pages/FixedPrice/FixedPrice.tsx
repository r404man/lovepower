import React from "react";
import FixedPriceForm from "./parts/FixedPriceForm";

function FixedPrice() {
  return (
    <div className="main__content">
      <div className="container">
        <h1 className="main__title">List item for sale</h1>
        <div className="form__add">
          <FixedPriceForm />
        </div>
      </div>
    </div>
  );
}

export default FixedPrice;
