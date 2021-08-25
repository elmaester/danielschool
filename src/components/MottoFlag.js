import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blueColor, grayColor, redColor, sizes } from "../responsive";
import { motto } from "../text/carouselItemsText";

const MottoFlagSC = styled(BackgroundImage)`
  display: none;
  ${sizes.tablet} {
    padding: 20px 88px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    height: 160px;
    min-height: 160px;
    max-height: 160px;
  }
  ${sizes.desktop} {
    padding: 30px 165px;
    height: 290px;
    min-height: 290px;
    max-height: 290px;
  }
`;

const TextContainerSC = styled.div`
  margin-top: auto;
  text-align: right;
  h2 {
    color: ${blueColor};
    margin-bottom: 2px;
    ${sizes.desktop} {
      font-size: 40px;
      line-height: 42px;
    }
  }
  h3 {
    span {
      ${sizes.desktop} {
        font-size: 24px;
        line-height: 29px;
      }
      font-size: 16px;
      line-height: 19px;
      &:first-of-type {
        color: #818181;
      }
      &:last-of-type {
        color: ${redColor};
      }
    }
  }
`;

const MottoFlag = () => {
  const data = useStaticQuery(graphql`
    query FlagImageQuery {
      file(base: { regex: "/1933209962/" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { fit: COVER }
            quality: 70
            placeholder: BLURRED
          )
        }
        base
      }
    }
  `);
  const bgImage = convertToBgImage(data.file.childImageSharp.gatsbyImageData);
  const { lang } = React.useContext(GlobalContext);
  return (
    <MottoFlagSC {...bgImage}>
      <TextContainerSC>
        <h2>Daniel's School</h2>
        <h3>
          <span>{motto.partOne[lang]}</span>
          <span>{motto.partTwo[lang]}</span>
        </h3>
      </TextContainerSC>
    </MottoFlagSC>
  );
};

export default MottoFlag;
