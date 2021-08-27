import * as React from "react";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import SignUp from "./SignUp";

const CoursesCommonLayout = ({ children }) => (
  <GlobalStyle>
    <Header />
    {children}
    <SignUp />
    <Footer />
  </GlobalStyle>
);

export default CoursesCommonLayout;
