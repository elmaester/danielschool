import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blueColor, paddings, sizes } from "../responsive";
import { heading, reasons } from "../text/reasonsText";
import Reason from "./Reason";

const ReasonsSC = styled.section`
  padding: 40px ${paddings.phone}px 45px;
  text-align: center;
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding-left: ${paddings.desktop}px;
    padding-right: ${paddings.desktop}px;
  }
  h2 {
    margin: 50px 0 45px;
    font-size: 24px;
  }
`;

const NavArrowSC = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #a1a9b0;
  transform: scaleY(3) translateY(-5px);
  &.Reasons__arrow-active {
    color: ${blueColor};
  }
  ${sizes.tablet} {
    display: none;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Reasons = () => {
  const { lang } = React.useContext(GlobalContext);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const canDecrement = () => currentIndex > 0;
  const canIncrement = () => currentIndex < reasons.length - 1;
  const decrementIndex = () => {
    if (canDecrement()) setCurrentIndex(currentIndex - 1);
  };
  const incrementIndex = () => {
    if (canIncrement()) setCurrentIndex(currentIndex + 1);
  };
  return (
    <ReasonsSC>
      <h2>{heading[lang]}</h2>
      <InnerContainer>
        <NavArrowSC
          onClick={decrementIndex}
          className={canDecrement() ? "Reasons__arrow-active" : undefined}
        >
          {"<"}
        </NavArrowSC>
        {reasons.map((reason, index) => (
          <Reason
            reason={reason}
            index={index}
            key={index}
            currentIndex={currentIndex}
          />
        ))}
        <NavArrowSC
          onClick={incrementIndex}
          className={canIncrement() ? "Reasons__arrow-active" : undefined}
        >
          {">"}
        </NavArrowSC>
      </InnerContainer>
    </ReasonsSC>
  );
};

export default Reasons;
