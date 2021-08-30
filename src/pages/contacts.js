import * as React from "react";
import { Helmet } from "react-helmet";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import GlobalContext from "../global-context";
import { heading } from "../text/contactsText";

const ContactsPage = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <GlobalStyle>
      <Helmet>
        <title>{heading[lang]}</title>
      </Helmet>
      <Header />
      <Contacts />
      <SignUp />
      <Footer />
    </GlobalStyle>
  );
};

export default ContactsPage;
