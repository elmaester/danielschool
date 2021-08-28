import * as React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import GlobalContext from "../global-context";
import MapPin from "../images/map-pin.svg";
import { paddings, sizes } from "../responsive";
import { heading, location, phoneNuner } from "../text/contactsText";

const ContactsSC = styled.section`
  padding: 0 ${paddings.phone}px;
  margin: 40px 0;
  text-align: center;
  ${sizes.tablet} {
    display: flex;
    align-items: center;
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: 0;
  }
  ${sizes.desktop} {
    padding-left: ${paddings.desktop}px;
  }
`;

const TextContainerSC = styled.div`
  min-width: 300px;
  ${sizes.tabletLandscape} {
    min-width: 40%;
  }
  ${sizes.desktop} {
    text-align: left;
    min-width: 400px;
  }
`;

const Heading = styled.h2`
  margin-bottom: 42px;
`;
const Phone = styled.h2`
  margin-bottom: 15px;
`;
const Location = styled.p`
  &+& {
    margin-top: 2px;
  }
`;

const MapPinSC = styled.div`
  height: 48px;
  width: 48px;
  transform: translate(-50%, -95%);
`;

const MapContainerSC = styled.div`
  display: none;
  ${sizes.tablet} {
    display: block;
    width: 100%;
    height: 200px;
  }
  ${sizes.desktop} {
    height: 295px;
  }
`;

const Contacts = () => {
  const { lang } = React.useContext(GlobalContext);
  const schoolCoords = { lat: 48.2857092, lng: 25.9402003 };
  return (
    <ContactsSC>
      <TextContainerSC>
        <Heading>{heading[lang]}</Heading>
        <Phone>{phoneNuner}</Phone>
        {location.map((line, index) => (
          <Location key={index}>{line[lang]}</Location>
        ))}
      </TextContainerSC>
      <MapContainerSC>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GATSBY_MAPS,
            language: lang,
            region: lang,
          }}
          defaultCenter={schoolCoords}
          defaultZoom={17}
        >
          <MapPinSC {...schoolCoords}>
            <MapPin />
          </MapPinSC>
        </GoogleMapReact>
      </MapContainerSC>
    </ContactsSC>
  );
};

export default Contacts;
