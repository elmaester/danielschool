import * as React from "react";
import CoursesCommonLayout from "../components/CoursesCommonLayout";
import FeaturesList from "../components/FeaturesList";
import GlobalContext from "../global-context";
import adultsCourseText from "../text/courses/adultsCourseText";

const AdultsGroupPage = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <CoursesCommonLayout>
      <FeaturesList featuresList={adultsCourseText.featuresList} />
    </CoursesCommonLayout>
  );
};

export default AdultsGroupPage;
