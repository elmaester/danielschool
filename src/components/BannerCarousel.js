import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { items } from "../text/carouselItemsText";
import CarouselItem from "./CarouselItem";

const BannerCarouselSC = styled.section`
  margin-top: 50px;
`;

const getMatchingImage = (id, data) =>
  data.allFile.edges.find((edge) => edge.node.base.includes(id)).node
    .childImageSharp.gatsbyImageData;

const BannerCarousel = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          base: { regex: "/637186963|1448137991|308787692|1186037383/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(transformOptions: {fit: COVER}, quality: 60, width: 1920)
            }
            base
          }
        }
      }
    }
  `);
  return (
    <BannerCarouselSC>
      <Carousel
        autoPlay
        interval={3000}
        showThumbs={false}
        infiniteLoop
        showIndicators={true}
        showStatus={false}
        showArrows={false}
      >
        {items.map((carouselItem) => (
          <CarouselItem
            item={carouselItem}
            key={carouselItem.imageID}
            imageData={getMatchingImage(carouselItem.imageID, data)}
          />
        ))}
      </Carousel>
    </BannerCarouselSC>
  );
};

export default BannerCarousel;
