import * as React from "react";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";

const ContactsPage = () => (
  <GlobalStyle>
    <Header />
    <Contacts />
    <Footer />
  </GlobalStyle>
);

export default ContactsPage;
