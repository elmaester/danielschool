import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blackColor, sizes } from "../responsive";

const CarouselItemSC = styled.div`
  height: 420px;
  min-height: 420px;
  max-height: 420px;
  ${sizes.desktop} {
    height: 580px;
    min-height: 580px;
    max-height: 580px;
  }
  background: ${(props) => props.bgImage} ${blackColor};
  color: white;
`;

const CarouselItem = ({ item, imageData }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <CarouselItemSC>
      <h2>{item.heading[lang]}</h2>
      <GatsbyImage image={imageData} style={{opacity: "0.4"}}/>
    </CarouselItemSC>
  );
};

export default CarouselItem;
