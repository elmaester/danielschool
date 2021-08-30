import * as React from "react";
import styled from "styled-components";
import GlobalStyle, { PageTitleSC } from "../components/GlobalStyle";
import GlobalContext from "../global-context";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import {
  callToAction,
  candidateWishlist,
  intro,
  pageTitle,
} from "../text/jobsText";
import { paddings, sizes } from "../responsive";

const JobsPageSC = styled.main`
  padding: ${paddings.phone}px;
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding-left: ${paddings.desktop}px;
    padding-right: ${paddings.desktop}px;
  }
  ul {
    list-style: disc;
    padding: 20px 0 20px 20px;
    li {
      line-height: 18px;
    }
  }
  p {
    line-height: 20px;
    &:nth-of-type(3) {
      margin-top: 20px;
    }
  }
`;

const JobsPage = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <GlobalStyle>
      <Header />
      <JobsPageSC>
        <PageTitleSC>{pageTitle[lang]}</PageTitleSC>
        {intro.map((paragraph, index) => (
          <p key={index}>{paragraph[lang]}</p>
        ))}
        <ul>
          {candidateWishlist.map((item, index) => (
            <li key={index}>{item[lang]}</li>
          ))}
        </ul>
        <p>{callToAction[lang]}</p>
      </JobsPageSC>
      <Contacts showEmail />
      <Footer />
    </GlobalStyle>
  );
};

export default JobsPage;
