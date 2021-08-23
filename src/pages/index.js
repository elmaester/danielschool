import * as React from "react";
import AboutUs from "../components/AboutUs";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import Services from "../components/Services";

const IndexPage = () => (
  <GlobalStyle>
    <Header />
    <Services />
    <AboutUs />
    <Contacts />
    <Footer />
  </GlobalStyle>
);

export default IndexPage;
