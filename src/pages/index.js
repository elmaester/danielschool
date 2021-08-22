import * as React from "react";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";

const IndexPage = () => (
  <GlobalStyle>
    <Contacts />
    <Footer />
  </GlobalStyle>
);

export default IndexPage;
