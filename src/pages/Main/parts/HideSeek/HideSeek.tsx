import React from "react";
import HideSeekCol from "./HideSeekCol/HideSeekCol";

function HideSeek() {
  return (
    <section className="home__hide__seek">
      <div className="container">
        <div className="hide__seek__block">
          <div className="hide__seek__image">
            <div className="hide__seek__image__inner">
              <img
                src="assets/images/pages/home/hide__seek.jpg"
                alt="hide and seek"
              />
            </div>
          </div>
          <div className="hide__seek__info">
            <div className="hide__seek__title">
              Hide and seek
            </div>
            <div className="hide__seek__row">
              <div className="hide__seek__col hide__seek__col--created">
                <HideSeekCol />
              </div>

              <div className="hide__seek__col hide__seek__col--colection">
                <HideSeekCol />
              </div>
            </div>
            <div className="hide__seek__btn__wrap">
              <a
                href=""
                className="btn__default btn__hide__seek"
              >
                View NFT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HideSeek;
