import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blackColor, paddings, sizes } from "../responsive";
import { signUpButtonText } from "../text/carouselItemsText";
import { SignUpButtonSC } from "./CarouselItem";

const CourseBannerSC = styled(BackgroundImage)`
  height: 420px;
  min-height: 420px;
  max-height: 420px;
  color: white;
  padding: 42px ${paddings.phone}px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${sizes.tablet} {
    text-align: center;
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    height: 450px;
    min-height: 450px;
    max-height: 450px;
    padding: 114px ${paddings.desktop}px 54px;
  }
  h2 {
    ${sizes.tablet} {
      font-size: 42px;
    }
    ${sizes.desktop} {
      font-size: 56px;
    }
  }
  p {
    line-height: 26px;
    text-shadow: 0.2px 0.2px ${blackColor};
    ${sizes.desktop} {
      font-size: 16px;
    }
  }
  .sign-up-link {
    margin: 0 auto;
  }
`;

const CourseBanner = ({ bannerHeading, bannerParagraphs, imageData }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <CourseBannerSC {...convertToBgImage(imageData)}>
      <h2>{bannerHeading[lang]}</h2>
      {!!bannerParagraphs.length && (
        <div>
          {bannerParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph[lang]}</p>
          ))}
        </div>
      )}
      <Link to="/contacts" className="sign-up-link">
        <SignUpButtonSC>{signUpButtonText[lang]}</SignUpButtonSC>
      </Link>
    </CourseBannerSC>
  );
};

export default CourseBanner;
