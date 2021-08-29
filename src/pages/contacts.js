import * as React from "react";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import SignUp from "../components/SignUp";

const ContactsPage = () => (
  <GlobalStyle>
    <Header />
    <Contacts />
    <SignUp />
    <Footer />
  </GlobalStyle>
);

export default ContactsPage;
