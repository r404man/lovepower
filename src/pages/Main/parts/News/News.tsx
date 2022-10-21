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
          {/* <!-- post 1 -->
                    @@include('./parts/components/card_news.html', {
                        "image": "assets/images/__content/news/2.jpg",
                        "title": "How to Find an NFT You Love",
                    })

                    @@include('./parts/components/card_news.html', {
                        "image": "assets/images/__content/news/1.jpg",
                        "title": "How to Fund MetaMask with ETH",
                    })

                    @@include('./parts/components/card_news.html', {
                        "image": "assets/images/__content/news/3.jpg",
                        "title": "How to Easily Setup a MetaMask Wallet",
                    })
                    @@include('./parts/components/card_news.html', {
                        "image": "assets/images/__content/news/2.jpg",
                        "title": "How to Find an NFT You Love",
                    })

                    @@include('./parts/components/card_news.html', {
                        "image": "assets/images/__content/news/1.jpg",
                        "title": "How to Fund MetaMask with ETH",
                    })

                    @@include('./parts/components/card_news.html', {
                        "image": "assets/images/__content/news/3.jpg",
                        "title": "How to Easily Setup a MetaMask Wallet",
                    }) */}
        </div>
      </div>
    </section>
  );
}

export default News;
