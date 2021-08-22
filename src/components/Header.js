import * as React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import Menu from "../images/Menu_icon.svg";
import { paddings } from "../responsive";

const HeaderSC = styled.header`
  padding: 11px ${paddings.phone}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const LogoContainerSC = styled.div`
  width: 170px;
  min-width: 170px;
  max-width: 170px;
`;

const MenuContainerSC = styled.div`
  width: 22px;
  min-width: 22px;
  max-width: 22px;
`;

const Header = () => (
  <HeaderSC>
    <LogoContainerSC>
      <Logo />
    </LogoContainerSC>
    <MenuContainerSC>
      <Menu />
    </MenuContainerSC>
  </HeaderSC>
);

export default Header;
