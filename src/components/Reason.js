import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blueColor, sizes } from "../responsive";

const ReasonSC = styled.div`
  display: none;
  max-width: 250px;
  min-height: 240px;
  &.Reason__visible-on-mobile {
    ${sizes.phone} {
      display: flex;
      flex-direction: column;
    }
  }
  ${sizes.tablet} {
    display: block;
    min-height: 270px;
    max-width: 160px;
  }
  ${sizes.tabletLandscape} {
    max-width: 160px;
    min-height: 235px;
  }
  ${sizes.desktop} {
    min-height: 290px;
  }
  p {
    margin-top: auto;
    ${sizes.tablet} {
      margin-top: 17px;
    }
  }
`;

const largerCircleSize = `
  width: 159px;
  min-width: 159px;
  max-width: 159px;
  height: 159px;
  min-height: 159px;
  max-height: 159px;
  font-size: 40px;
`;

const CircleSC = styled.div`
  ${largerCircleSize};
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid #d6dadb;
  color: ${blueColor};
  display: flex;
  justify-content: center;
  align-items: center;
  ${sizes.tablet} {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    min-height: 100px;
    max-height: 100px;
    font-size: 32px;
  }
  ${sizes.desktop} {
    ${largerCircleSize};
  }
`;

const Reason = ({ reason, index, currentIndex }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <ReasonSC
      className={
        index === currentIndex ? "Reason__visible-on-mobile" : undefined
      }
    >
      <CircleSC>{index + 1}</CircleSC>
      <p>{reason[lang]}</p>
    </ReasonSC>
  );
};

export default Reason;
