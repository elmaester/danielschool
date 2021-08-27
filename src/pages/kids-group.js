import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CourseBanner from "../components/CourseBanner";
import CourseDescription from "../components/CourseDescription";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import kidsCourseText from "../text/courses/kidsCourseText";

const KidsGroupPage = () => {
  const data = useStaticQuery(graphql`
    query KidsGroupImageQuery {
      bannerImage: file(base: { regex: "/1447101821/" }) {
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
      descriptionImage: file(base: { regex: "/1378507739/" }) {
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
        bannerHeading={kidsCourseText.bannerHeading}
        bannerParagraphs={kidsCourseText.bannerParagraphs}
        imageData={data.bannerImage.childImageSharp.gatsbyImageData}
      />
      <CourseDescription
        descriptionParagraphs={kidsCourseText.descriptionParagraphs}
        imageData={data.descriptionImage.childImageSharp.gatsbyImageData}
        imageAlt={kidsCourseText.bannerHeading}
      />
      <FeaturesList featuresList={kidsCourseText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default KidsGroupPage;
