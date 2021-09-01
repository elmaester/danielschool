import * as React from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../components/AboutUs";
import AutumnSignUp from "../components/AutumnSignUp";
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
    <Helmet>
      <title>школа іноземних мов у Чернівцях</title>
      <meta
        name="description"
        content="Daniel’s School - курси іноземних мов у Чернівцях. Гнучкі ціни та графік. Англійська з американцями. Запишись на осінній курс! Групи та індивідуально. В офісі (центр міста) / онлайн."
      />
    </Helmet>
    <Header />
    <BannerCarousel />
    <Reasons />
    <Services />
    <MottoFlag />
    <AutumnSignUp />
    <AboutUs />
    <SignUp />
    <Contacts />
    <Footer />
  </GlobalStyle>
);

export default IndexPage;
