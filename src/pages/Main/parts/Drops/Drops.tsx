import React from "react";
import CardDrop from "../../../../components/CardDrop/CardDrop";

function Drops() {
  return (
    <section className="home__drops">
      <div className="container">
        <div className="home__drops__title">
          Notable Drops
        </div>
        <div className="home__drops__list js_home__drops__list">
          <CardDrop />
          <CardDrop />
          <CardDrop />
          <CardDrop />
          <CardDrop />
          <CardDrop />
        </div>
      </div>
    </section>
  );
}

export default Drops;
