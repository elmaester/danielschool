import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { paddings, redColor, sizes } from "../responsive";
import { descriptionWord } from "../text/courses/sharedCoursesText";

const CourseDescriptionSC = styled.section`
  padding: 42px ${paddings.phone}px 0;
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding: 70px ${paddings.desktop}px 0;
  }
  h2 {
    display: inline-block;
    padding: 0 20px 10px 0;
    border-bottom: 1px solid ${redColor};
  }
`;

const BelowTitleContainer = styled.div`
  margin-top: 35px;
  ${sizes.tablet} {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 20px;
  }
  ${sizes.tabletLandscape} {
    grid-template-columns: 1fr 445px;
  }
`;

const ParagraphsContainer = styled.div`
  p:not(:first-of-type) {
    margin-top: 10px;
  }
  ${sizes.phone} {
    margin-bottom: 20px;
  }
  ${sizes.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${sizes.desktop} {
    p:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`;

const CourseDescription = ({ descriptionParagraphs, imageData, imageAlt }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <CourseDescriptionSC>
      <h2>{descriptionWord[lang]}</h2>
      <BelowTitleContainer>
        <ParagraphsContainer>
          {!!descriptionParagraphs.length &&
            descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph[lang]}</p>
            ))}
        </ParagraphsContainer>
        <GatsbyImage image={imageData} alt={imageAlt[lang]} />
      </BelowTitleContainer>
    </CourseDescriptionSC>
  );
};

export default CourseDescription;
