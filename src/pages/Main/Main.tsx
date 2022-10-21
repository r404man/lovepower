import React from "react";
import "./main.scss";

import HideSeek from "./parts/HideSeek/HideSeek";
import Drops from "./parts/Drops/Drops";
import Subscribe from "./parts/Subscribe/Subscribe";
import Collection from "./parts/Collection/Collection";
import Selling from "./parts/Selling/Selling";
import Promo from "./parts/Promo/Promo";
import News from "./parts/News/News";

function MainPage() {
  return (
    <div className="MainPage">
      <Promo />
      <HideSeek />
      <Drops />
      <Subscribe />
      <Collection />
      <Selling />
      <News />
    </div>
  );
}

export default MainPage;
