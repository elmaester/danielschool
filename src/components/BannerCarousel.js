import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { sizes } from "../responsive";
import { items } from "../text/carouselItemsText";
import CarouselItem from "./CarouselItem";

const BannerCarouselSC = styled.section`
  ${sizes.phone} {
    margin-top: 30px;
  }
`;

const getMatchingImage = (id, data) =>
  data.allFile.edges.find((edge) => edge.node.base.includes(id)).node
    .childImageSharp.gatsbyImageData;

const BannerCarousel = () => {
  const data = useStaticQuery(graphql`
    query CarouselImagesQuery {
      allFile(
        filter: {
          base: { regex: "/637186963|1448137991|308787692|1186037383/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {
                  fit: COVER
                  duotone: {
                    opacity: 40
                    shadow: "#040e1f"
                    highlight: "#040e1f"
                  }
                }
                quality: 70
                placeholder: BLURRED
              )
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
        interval={5000}
        infiniteLoop
        showThumbs={false}
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
