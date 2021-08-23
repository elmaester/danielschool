import * as React from "react";
import styled from "styled-components";
import { paddings, sizes } from "../responsive";
import { services } from "../text/servicesText";
import Service from "./Service";

const ServicesSC = styled.section`
  padding: 40px ${paddings.phone}px 30px;
  background-color: #e5e5e5;
  ${sizes.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: ${paddings.desktop}px;
    padding-right: ${paddings.desktop}px;
    padding-bottom: 10px;
  }
`

const Services = () => {
  return (
    <ServicesSC>
      {services.map((service, index) => (
        <Service key={index} service={service}/>
      ))}
    </ServicesSC>
  );
};

export default Services;
