import React from "react";

function CustomSelect() {
  return (
    <div className="custom__select js_custom__select">
      <div className="custom__select__view">
        Sell to highest bidder
      </div>
      <input type="hidden" name="select" />
      <div className="custom__select__list">
        <ul>
          <li>Sell to highest bidder2 1</li>
          <li>Sell to highest bidder 2</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomSelect;
