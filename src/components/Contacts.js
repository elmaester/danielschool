import * as React from "react";
import styled from "styled-components";
import { paddings } from "../responsive";
import { heading, location, phoneNuner } from "../text/contactsText";

const lang = "uk";

const ContactsSC = styled.section`
  padding: 40px ${paddings.phone}px 35px ${paddings.phone}px;
  text-align: center;
`;
const common = `
  font-size: 24px;
`;
const Heading = styled.h2`
  ${common}
  margin-bottom: 42px;
`;
const Phone = styled.h2`
  ${common}
  margin-bottom: 15px;
`;
const Location = styled.p``;

const Contacts = () => (
  <ContactsSC>
    <Heading>{heading[lang]}</Heading>
    <Phone>{phoneNuner}</Phone>
    <Location>{location[lang]}</Location>
  </ContactsSC>
);

export default Contacts;
