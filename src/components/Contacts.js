import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { paddings } from "../responsive";
import { heading, location, phoneNuner } from "../text/contactsText";

const ContactsSC = styled.section`
  padding: 0 ${paddings.phone}px;
  margin: 40px 0;
  text-align: center;
`;
const Heading = styled.h2`
  margin-bottom: 42px;
`;
const Phone = styled.h2`
  margin-bottom: 15px;
`;
const Location = styled.p``;

const Contacts = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <ContactsSC>
      <Heading>{heading[lang]}</Heading>
      <Phone>{phoneNuner}</Phone>
      <Location>{location[lang]}</Location>
    </ContactsSC>
  );
};

export default Contacts;
