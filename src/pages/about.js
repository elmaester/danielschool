import * as React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";

const AboutUsPage = () => (
  <GlobalStyle>
    <Header />
    <AboutUs />
    <Footer />
  </GlobalStyle>
);

export default AboutUsPage;
