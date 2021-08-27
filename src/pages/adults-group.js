import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CourseBanner from "../components/CourseBanner";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import GlobalContext from "../global-context";
import adultsCourseText from "../text/courses/adultsCourseText";

const AdultsGroupPage = () => {
  const data = useStaticQuery(graphql`
    query AdultsGroupImageQuery {
      file(base: { regex: "/601708961/" }) {
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
  const { lang } = React.useContext(GlobalContext);
  return (
    <CoursesCommonLayout>
      <CourseBanner
        bannerHeading={adultsCourseText.bannerHeading}
        bannerParagraphs={adultsCourseText.bannerParagraphs}
        imageData={data.file.childImageSharp.gatsbyImageData}
      />
      <FeaturesList featuresList={adultsCourseText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default AdultsGroupPage;
