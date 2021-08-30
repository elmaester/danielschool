import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import CourseBanner from "../components/CourseBanner";
import CourseDescription from "../components/CourseDescription";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import GlobalContext from "../global-context";
import personalLessonsText from "../text/courses/personalLessonsText";

const PersonalLessonsPage = () => {
  const { lang } = React.useContext(GlobalContext);
  const data = useStaticQuery(graphql`
    query PersonalLessonsImageQuery {
      bannerImage: file(base: { regex: "/200546540/" }) {
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
      descriptionImage: file(base: { regex: "/765467182/" }) {
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
        <title>{personalLessonsText.bannerHeading[lang]}</title>
      </Helmet>
      <CourseBanner
        bannerHeading={personalLessonsText.bannerHeading}
        bannerParagraphs={personalLessonsText.bannerParagraphs}
        imageData={data.bannerImage.childImageSharp.gatsbyImageData}
      />
      <CourseDescription
        descriptionParagraphs={personalLessonsText.descriptionParagraphs}
        imageData={data.descriptionImage.childImageSharp.gatsbyImageData}
        imageAlt={personalLessonsText.bannerHeading}
      />
      <FeaturesList featuresList={personalLessonsText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default PersonalLessonsPage;
