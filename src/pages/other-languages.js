import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CourseBanner from "../components/CourseBanner";
import CourseDescription from "../components/CourseDescription";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import otherLanguagesCourseText from "../text/courses/otherLanguagesCourseText";

const OtherLanguagesPage = () => {
  const data = useStaticQuery(graphql`
    query OtherLanguagesImageQuery {
      bannerImage: file(base: { regex: "/193471265/" }) {
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
      descriptionImage: file(base: { regex: "/483879037/" }) {
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
      <CourseBanner
        bannerHeading={otherLanguagesCourseText.bannerHeading}
        bannerParagraphs={otherLanguagesCourseText.bannerParagraphs}
        imageData={data.bannerImage.childImageSharp.gatsbyImageData}
      />
      <CourseDescription
        descriptionParagraphs={otherLanguagesCourseText.descriptionParagraphs}
        imageData={data.descriptionImage.childImageSharp.gatsbyImageData}
        imageAlt={otherLanguagesCourseText.bannerHeading}
      />
      <FeaturesList featuresList={otherLanguagesCourseText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default OtherLanguagesPage;
