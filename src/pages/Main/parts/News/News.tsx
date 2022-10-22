import React from "react";
import CardNews from "../../../../components/CardNews/CardNews";

function News() {
  return (
    <section className="home__news">
      <div className="container">
        <div className="home__news__title">
          Resources for getting started
        </div>
        <div className="home__news__list js_home__news__list">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
    </section>
  );
}

export default News;
