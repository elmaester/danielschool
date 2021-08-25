import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import GlobalContext from "../global-context";
import { more } from "../text/servicesText";
import { redColor, sizes } from "../responsive";

const ServiceSC = styled.div`
  background-color: white;
  height: 150px;
  max-height: 150px;
  padding-top: 20px;
  box-sizing: border-box;
  box-shadow: 2px 5px 7px rgba(0, 0, 0, 0.15);
  margin: 0 auto 10px;
  @media(min-width: 320px) {
    width: 290px;
    max-width: 290px;
  }
  ${sizes.tablet} {
    margin-bottom: 20px;
  }
  ${sizes.desktop} {
    margin-bottom: 35px;
    &:hover {
      transform: scale(1.02);
      transition: 0.15s ease-out;
    }
  }
  a {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const InnerContainerSC = styled.div`
  display: flex;
  align-items: center;
  height: 105px;
  max-height: 105px;
`;

const LinkContainerSC = styled.div`
  text-align: right;
  margin-top: auto;
`;

const IconContainerSC = styled.div`
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  margin: 0 13px;
`;

const ArrowSC = styled.span`
  color: ${redColor};
  display: inline-block;
  font-weight: bold;
  transform: translateY(-2.5px) scaleY(1.5);
`;

const Service = ({ service }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <ServiceSC>
      <InnerContainerSC>
        <IconContainerSC>{service.icon()}</IconContainerSC>
        <h2>{service[lang]}</h2>
      </InnerContainerSC>
      <LinkContainerSC>
        <Link to={service.link}>
          {more[lang]} <ArrowSC>→</ArrowSC>
        </Link>
      </LinkContainerSC>
    </ServiceSC>
  );
};

export default Service;
