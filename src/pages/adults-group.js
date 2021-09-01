import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import CourseBanner from "../components/CourseBanner";
import CourseDescription from "../components/CourseDescription";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import adultsCourseText from "../text/courses/adultsCourseText";

const AdultsGroupPage = () => {
  const data = useStaticQuery(graphql`
    query AdultsGroupImageQuery {
      bannerImage: file(base: { regex: "/601708961/" }) {
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
      descriptionImage: file(base: { regex: "/1428145862/" }) {
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
        <title>групові заняття з англійської мови у Чернівцях</title>
        <meta
          name="description"
          content="Daniel’s School - вивчення англійської мови у групах. Розмовна практика з американцями та британцями. Говори вільно! Групи 4-8 людей"
        />
      </Helmet>
      <CourseBanner
        bannerHeading={adultsCourseText.bannerHeading}
        bannerParagraphs={adultsCourseText.bannerParagraphs}
        imageData={data.bannerImage.childImageSharp.gatsbyImageData}
      />
      <CourseDescription
        descriptionParagraphs={adultsCourseText.descriptionParagraphs}
        imageData={data.descriptionImage.childImageSharp.gatsbyImageData}
        imageAlt={adultsCourseText.bannerHeading}
      />
      <FeaturesList featuresList={adultsCourseText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default AdultsGroupPage;
