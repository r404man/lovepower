import React from "react";

function PersonalFilter() {
  return (
    <div className="personal__filter">
      <div className="container">
        <div className="personal__filter__search">
          <input
            type="text"
            name="text"
            placeholder="Search by name"
          />
          <input type="submit" value="send" />
        </div>
        <div className="personal__filter__select">
          <div className="custom__select js_custom__select">
            <div className="custom__select__view">
              Show Collections
            </div>
            <input type="hidden" name="select" />
            <div className="custom__select__list">
              <ul>
                <li>Show Collections</li>
                <li>Show NFTs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalFilter;
