import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { paddings, sizes } from "../responsive";
import { heading, paragraphs } from "../text/aboutUsText";

const AboutUsSC = styled.section`
  padding: 0 ${paddings.phone}px;
  margin: 40px 0;
  ${sizes.tabletLandscape} {
    padding: 0 ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding: 0 ${paddings.desktop}px;
  }
  h2 {
    text-align: center;
    margin-bottom: 35px;
  }
  p {
    line-height: 26px;
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

const DanielImageContainerSC = styled.div`
  width: 137px;
  min-width: 137px;
  max-width: 137px;
  float: left;
  margin-right: 15px;
  ${sizes.tabletLandscape} {
    margin-right: 25px;
  }
`;

const AboutUs = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <AboutUsSC>
      <h2>{heading[lang]}</h2>
        <DanielImageContainerSC>
          <StaticImage src="../images/Daniel.jpg" alt="Daniel Hayden" />
        </DanielImageContainerSC>
        <div>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph[lang]}</p>
          ))}
        </div>
    </AboutUsSC>
  );
};

export default AboutUs;
