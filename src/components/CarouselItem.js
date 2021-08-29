import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blackColor, blueColor, paddings, sizes } from "../responsive";
import { motto, signUpButtonText } from "../text/carouselItemsText";

const CarouselItemSC = styled(BackgroundImage)`
  height: 420px;
  min-height: 420px;
  max-height: 420px;
  color: white;
  padding: 90px ${paddings.phone}px 30px;
  ${sizes.tablet} {
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    height: 580px;
    min-height: 580px;
    max-height: 580px;
    padding: 82px ${paddings.desktop}px 72px;
  }
  p {
    line-height: 26px;
    text-shadow: 0.2px 0.2px ${blackColor};
    ${sizes.desktop} {
      font-size: 16px;
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  height: 100%;
  h2 {
    line-height: 29px;
    text-shadow: 1px 1px ${blackColor};
    ${sizes.tablet} {
      font-size: 40px;
      line-height: 42px;
    }
    ${sizes.desktop} {
      font-size: 54px;
      line-height: 54px;
    }
  }
  .sign-up-link {
    margin: 0 auto;
    ${sizes.tablet} {
      margin: 0;
    }
  }
`;

export const SignUpButtonSC = styled.button`
  background-color: ${blueColor};
  padding: 18px 25px;
  border-radius: 100px;
  border: none;
  color: white;
  display: inline-block;
  font-weight: bold;
  ${sizes.desktop} {
    cursor: pointer;
  }
`;

const RightSide = styled.div`
  display: none;
  ${sizes.tablet} {
    box-sizing: border-box;
    display: block;
    text-align: right;
    margin-top: auto;
    margin-bottom: 47px;
  }
  ${sizes.desktop} {
    margin-bottom: -15px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    text-shadow: 1px 1px ${blackColor};
    ${sizes.desktop} {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

const CarouselItem = ({ item, imageData }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <CarouselItemSC {...convertToBgImage(imageData)}>
      <LeftSide>
        <h2>{item.heading[lang]}</h2>
        <p>{item.subtext[lang]}</p>
        <Link to={"/" + item.link} className="sign-up-link">
          <SignUpButtonSC>{signUpButtonText[lang]}</SignUpButtonSC>
        </Link>
      </LeftSide>
      <RightSide>
        <h3>Daniel's School</h3>
        <p>
          {motto.partOne[lang]}
          {motto.partTwo[lang]}
        </p>
      </RightSide>
    </CarouselItemSC>
  );
};

export default CarouselItem;
