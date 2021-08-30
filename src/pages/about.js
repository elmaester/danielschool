import * as React from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import GlobalContext from "../global-context";
import { heading } from "../text/aboutUsText";

const AboutUsPage = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <GlobalStyle>
      <Helmet>
        <title>{heading[lang]}</title>
      </Helmet>
      <Header />
      <AboutUs />
      <SignUp />
      <Footer />
    </GlobalStyle>
  );
};

export default AboutUsPage;
