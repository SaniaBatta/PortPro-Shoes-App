import React from "react";
import Landing from "./components/Landing";
import Shipping from "./components/Shipping";
import SplOffers from "./components/SplOffers";
import Footer from "./components/Footer";
import FeaturedImages from "./components/FeaturedImages";
import BrandLogo from "./components/BrandLogo";
import FeatureProduct from "./components/FeatureProduct";

function App() {
  return (
    <>
      <div className="relative z-10">
        <Landing />
        <Shipping />
        <SplOffers />
        <FeatureProduct />
        <FeaturedImages />
        <BrandLogo />
      </div>
      <Footer />
    </>
  );
}

export default App;
