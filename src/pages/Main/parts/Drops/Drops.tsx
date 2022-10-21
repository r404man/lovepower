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
          {/* <!--  выводим 6 записей -->
                    <!-- 1 -->
                    @@include('./parts/components/card_drop.html', {
                        "image": "assets/images/__content/card__drop/1.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "assets/images/__content/card__drop/2.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "assets/images/__content/card__drop/3.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "assets/images/__content/card__drop/2.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "assets/images/__content/card__drop/1.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    })
                    @@include('./parts/components/card_drop.html', {
                        "image": "assets/images/__content/card__drop/3.jpg",
                        "name": "@dielamaharanie",
                        "price":"0.869 LPM"
                    }) */}
        </div>
      </div>
    </section>
  );
}

export default Drops;
