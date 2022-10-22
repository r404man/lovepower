import React from "react";

function FixedPriceFormDate() {
  return (
    <div className="field__item">
      <div className="field__item__title">Duration</div>
      <input
        type="text"
        placeholder="http://yoursite.io/item/123"
        className="field__item__x js_date"
        name="date"
      />
    </div>
  );
}

export default FixedPriceFormDate;
