import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import AutumnSignUp from "../components/AutumnSignUp";
import CourseBanner from "../components/CourseBanner";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import { CircleSC } from "../components/Reason";
import GlobalContext from "../global-context";
import { paddings, sizes } from "../responsive";
import loyaltyProgramText from "../text/courses/loyaltyProgramText";

const DiscountDetailsSC = styled.section`
  padding: 30px ${paddings.phone}px 0;
  ${sizes.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  ${sizes.tabletLandscape} {
    padding: 40px ${paddings.tabletLandscape}px 10px;
  }
  ${sizes.desktop} {
    padding: 100px ${paddings.desktop}px 80px;
  }
`;

const DiscountItemSC = styled.div`
  text-align: center;
  ${sizes.phone} {
    &:not(:first-of-type) {
      margin-top: 40px;
    }
  }
  p {
    margin-top: 20px;
    ${sizes.desktop} {
      margin-top: 40px;
    }
  }
`;

const LoyaltyProgramPage = () => {
  const { lang } = React.useContext(GlobalContext);
  const data = useStaticQuery(graphql`
    query LoyaltyProgramImageQuery {
      bannerImage: file(base: { regex: "/501227299/" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: {
              fit: COVER
              duotone: { opacity: 40, shadow: "#040e1f", highlight: "#040e1f" }
            }
            quality: 70
            placeholder: BLURRED
          )
        }
        base
      }
    }
  `);
  return (
    <CoursesCommonLayout>
      <CourseBanner
        bannerHeading={loyaltyProgramText.bannerHeading}
        bannerParagraphs={loyaltyProgramText.bannerParagraphs}
        imageData={data.bannerImage.childImageSharp.gatsbyImageData}
      />
      <DiscountDetailsSC>
        {loyaltyProgramText.discounts.map((discount, index) => (
          <DiscountItemSC key={index}>
            <CircleSC>{discount.value}</CircleSC>
            <p>{discount.text[lang]}</p>
          </DiscountItemSC>
        ))}
      </DiscountDetailsSC>
      <AutumnSignUp />
    </CoursesCommonLayout>
  );
};

export default LoyaltyProgramPage;
