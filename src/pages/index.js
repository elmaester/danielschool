import * as React from "react";
import AboutUs from "../components/AboutUs";
import BannerCarousel from "../components/BannerCarousel";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import MottoFlag from "../components/MottoFlag";
import Reasons from "../components/Reasons";
import Services from "../components/Services";
import SignUp from "../components/SignUp";

const IndexPage = () => (
  <GlobalStyle>
    <Header />
    <BannerCarousel />
    <Reasons />
    <Services />
    <MottoFlag />
    <AboutUs />
    <SignUp />
    <Contacts />
    <Footer />
  </GlobalStyle>
);

export default IndexPage;
