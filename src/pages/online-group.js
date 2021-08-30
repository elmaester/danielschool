import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import CourseBanner from "../components/CourseBanner";
import CourseDescription from "../components/CourseDescription";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import GlobalContext from "../global-context";
import onlineCourseText from "../text/courses/onlineCourseText";

const OlineGroupPage = () => {
  const { lang } = React.useContext(GlobalContext);
  const data = useStaticQuery(graphql`
    query OlineGroupImageQuery {
      bannerImage: file(base: { regex: "/1075401647/" }) {
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
      descriptionImage: file(base: { regex: "/1716024535/" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { fit: COVER }
            quality: 70
            placeholder: BLURRED
            width: 445
          )
        }
        base
      }
    }
  `);
  return (
    <CoursesCommonLayout>
      <Helmet>
        <title>{onlineCourseText.bannerHeading[lang]}</title>
      </Helmet>
      <CourseBanner
        bannerHeading={onlineCourseText.bannerHeading}
        bannerParagraphs={onlineCourseText.bannerParagraphs}
        imageData={data.bannerImage.childImageSharp.gatsbyImageData}
      />
      <CourseDescription
        descriptionParagraphs={onlineCourseText.descriptionParagraphs}
        imageData={data.descriptionImage.childImageSharp.gatsbyImageData}
        imageAlt={onlineCourseText.bannerHeading}
      />
      <FeaturesList featuresList={onlineCourseText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default OlineGroupPage;
