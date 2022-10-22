import React from "react";

function HideSeekCol() {
  return (
    <>
      <div className="hide__seek__section">
        <div className="hide__seek__title__section">
          Created by
        </div>
        <a href="" className="hide__seek__unit">
          <div className="hide__seek__unit__image">
            <img src="./assets/images/pages/home/hide__seek/1.jpg" />
          </div>
          <div className="hide__seek__unit__title">
            @dielamaharanie
          </div>
        </a>
      </div>
      <div className="hide__seek__section">
        <div className="hide__seek__title__section">
          Current bid
        </div>
        <div className="hide__seek__count">0.75 LPM</div>
      </div>
    </>
  );
}

export default HideSeekCol;
