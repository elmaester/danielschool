import * as React from "react";
import GlobalContext from "../global-context";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { paddings, sizes } from "../responsive";
import { SignUpButtonSC } from "./CarouselItem";
import { signUpButtonText } from "../text/carouselItemsText";
import { signUpAutumn } from "../text/signUpText";
import { more } from "../text/servicesText";
import { ArrowSC } from "./Service";

const AutumnSignUpSC = styled.section`
  padding: 40px ${paddings.phone}px 0;
  ${sizes.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding-left: ${paddings.desktop}px;
    padding-right: ${paddings.desktop}px;
  }
`;

const ImageContainerSC = styled.div``;

const ActionSectionSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin-top: 42px;
    ${sizes.tablet} {
      margin-top: 35px;
    }
    ${sizes.desktop} {
      margin-top: 50px;
      font-size: 40px;
      line-height: 42px;
    }
    ${sizes.desktopWide} {
      margin-top: 100px;
    }
  }
  button {
    margin: 30px auto 18px;
    ${sizes.tablet} {
      margin-left: 0;
    }
    ${sizes.desktop} {
      margin-top: auto;
    }
  }
`;

const AutumnSignUp = () => {
  const data = useStaticQuery(graphql`
    query AutumnSignUpImageQuery {
      file(base: { regex: "/1175326834/" }) {
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
  const { lang } = React.useContext(GlobalContext);
  return <AutumnSignUpSC>
    <ImageContainerSC>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="students" />
    </ImageContainerSC>
    <ActionSectionSC>
      <h2>{signUpAutumn[lang]}</h2>
      <SignUpButtonSC>{signUpButtonText[lang]}</SignUpButtonSC>
        <Link style={{textAlign: "right"}}>
          {more[lang]} <ArrowSC>→</ArrowSC>
        </Link>
    </ActionSectionSC>
  </AutumnSignUpSC>;
};

export default AutumnSignUp;
