import React from "react";
import Blog from "../components/Blogs/Blog";
import Brands from "../components/Brands/Brands";
import CampaginSingle from "../components/Campagin-single/CampaginSingle";
import Campagins from "../components/Campagins/Campagins";
import Categotys from "../components/Categorys/Categotys";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Prodychts from "../components/Producht/Prodychts";
import Sliders from "../components/Slider/Sliders";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Sliders />
      <Categotys />
      <Prodychts />
      <Campagins />
      <Prodychts />
      <Blog />
      <Brands />
      <CampaginSingle />
      <Policy />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
