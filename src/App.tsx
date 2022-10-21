import React from "react";
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

function App() {
  return (
    <div className="App">
      <Header nav="simple" />
      <MainPage />
      {/* <ExploreCollections /> */}
      {/* <CreateNewItem /> */}
      {/* <CreateNewCollection /> */}
      {/* <CollectionNfts /> */}
      {/* <CollectionActivity /> */}
      {/* <PersonalCollections /> */}
      {/* <PersonalNfts /> */}
      {/* <BuyerPage /> */}
      {/* <SellerPage /> */}
      {/* <FixedPrice /> */}
      {/* <CreateNewCollectionV2 /> */}
      <Footer />
    </div>
  );
}

export default App;
