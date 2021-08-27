import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blueColor, paddings, sizes } from "../responsive";

const FeaturesListSC = styled.section`
  padding: 55px ${paddings.phone}px 42px;
  display: grid;
  gap: 30px;
  ${sizes.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${sizes.desktop} {
    padding: 80px ${paddings.desktop}px;
    gap: 60px;
  }
`;

const FeatureSC = styled.div`
  display: grid;
  grid-template-columns: 40px 35px 1fr;
`;

const RightSideContainerSC = styled.div``;

const SublinesContainerSC = styled.div`
  margin-top: 10px;
  p {
    line-height: 18px;
  }
`;

const NumberDashSC = styled.span`
  color: ${blueColor};
  font-size: 24px;
`;

const TitleSC = styled.h2``;

const FeaturesList = ({ featuresList }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <FeaturesListSC>
      {featuresList.map((feature, index) => (
        <FeatureSC key={index}>
          <NumberDashSC>{"0" + (index + 1)}</NumberDashSC>
          <NumberDashSC>{" — "}</NumberDashSC>
          <RightSideContainerSC>
            <TitleSC>{feature.title[lang]}</TitleSC>
            <SublinesContainerSC>
              {!!feature.sublines.length &&
                feature.sublines.map((subline, index) => (
                  <p key={index}>{subline[lang]}</p>
                ))}
            </SublinesContainerSC>
          </RightSideContainerSC>
        </FeatureSC>
      ))}
    </FeaturesListSC>
  );
};

export default FeaturesList;
