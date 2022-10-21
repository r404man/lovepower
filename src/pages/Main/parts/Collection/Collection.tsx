import React from "react";
import CardCollection from "../../../../components/CardCollection/CardCollection";

function Collection() {
  return (
    <div className="home__collection">
      <div className="container">
        <div className="home__collection__top">
          <div className="home__collection__title">
            Top Collections
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.1673 18.4165C41.1673 18.4165 32.1887 33.5832 26.0007 33.5832C19.8148 33.5832 10.834 18.4165 10.834 18.4165"
                stroke="#130F26"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="home__collection__tab js_home__collection__tab">
            <a href="" className="active">
              1 day
            </a>
            <a href="">7 days</a>
            <a href="">30 days</a>
          </div>
        </div>
        <div className="home__collection__list js_home__collection__list">
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
          {/* 
                    @@loop('./parts/components/card_collection.html', [
                        {
                            "image": "assets/images/pages/home/collection/1.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/2.jpg",
                            "name": "Otherdeed",
                            "price":"-25.5%",
                            "classPrice":" home__collection__item__move--minus"
                        },
                        {
                            "image": "assets/images/pages/home/collection/1.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/2.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/1.jpg",
                            "name": "Art Blocks Factory",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/2.jpg",
                            "name": "Otherdeed",
                            "price":"-25.5%",
                            "classPrice":" home__collection__item__move--minus"
                        },
                        {
                            "image": "assets/images/pages/home/collection/1.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/2.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/3.jpg",
                            "name": "Art Blocks Factory",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/1.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/2.jpg",
                            "name": "ABC(abracadabra)",
                            "price":"+805.5%",
                            "classPrice":""
                        },
                        {
                            "image": "assets/images/pages/home/collection/3.jpg",
                            "name": "Art Blocks Factory",
                            "price":"+805.5%",
                            "classPrice":""
                        }
                    ]) */}
        </div>
        <div className="home__collection__bottom">
          <a
            href=""
            className="btn__default btn__y btn__home__collection"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collection;
