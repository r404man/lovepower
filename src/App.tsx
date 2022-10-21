import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import MainPage from "./pages/Main/Main";
import ExploreCollections from "./pages/ExploreCollections/ExploreCollections";
import FixedPrice from "./pages/FixedPrice/FixedPrice";
import CreateNewItem from "./pages/CreateNewItem/CreateNewItem";
import CreateNewCollection from "./pages/CreateNewCollection/CreateNewCollection";
import PersonalCollections from "./pages/PersonalCollections/PersonalCollections";
import PersonalNfts from "./pages/PersonalNfts/PersonalNfts";
import CollectionActivity from "./pages/CollectionActivity/CollectionActivity";
import CollectionNfts from "./pages/CollectionNfts/CollectionNfts";
import BuyerPage from "./pages/BuyerPage/BuyerPage";
import SellerPage from "./pages/SellerPage/SellerPage";
import CreateNewCollectionV2 from "./pages/CreateNewCollectionV2/CreateNewCollectionV2";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="assets/js/vendor/fancybox.umd.js"></script>
        <script src="assets/js/vendor/gsap.min.js"></script>
        <script src="assets/js/vendor/jquery.daterangepicker.min.js"></script>
        <script src="assets/js/vendor/jquery.min.js"></script>
        <script src="assets/js/vendor/moment.min.js"></script>
        <script src="assets/js/vendor/ScrollTrigger.min.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>
        <script src="assets/js/main.js"></script>
      </Helmet>

      <Header nav="simple" />
      <MainPage />
      {/* <ExploreCollections /> */}
      {/* <FixedPrice /> */}
      {/* <CreateNewItem /> */}
      {/* <CreateNewCollection /> */}
      {/* <PersonalCollections /> */}
      {/* <PersonalNfts /> */}
      {/* <CollectionActivity /> */}
      {/* <CollectionNfts /> */}
      {/* <BuyerPage /> */}
      {/* <SellerPage /> */}
      {/* <CreateNewCollectionV2 /> */}
      <Footer />
    </div>
  );
}

export default App;
