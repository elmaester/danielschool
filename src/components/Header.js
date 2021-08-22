import * as React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import Menu from "../images/Menu_icon.svg";
import { paddings, sizes } from "../responsive";
import LanguageSwitcher from "./LanguageSwitcher";

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

const LanguageSwitcherOutsideSC = styled.div`
  padding: 10px ${paddings.phone}px 8.4px ${paddings.phone}px;
  display: flex;
  justify-content: flex-end;
  ${sizes.tablet} {
    display: none;
  }
`;

const LanguageSwitcherInsideSC = styled.div`
  display: none;
  ${sizes.tablet} {
    display: block;
    margin-left: auto;
    margin-right: 41px;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderSC>
        <LogoContainerSC>
          <Logo />
        </LogoContainerSC>
        <LanguageSwitcherInsideSC>
          <LanguageSwitcher />
        </LanguageSwitcherInsideSC>
        <MenuContainerSC>
          <Menu />
        </MenuContainerSC>
      </HeaderSC>
      <LanguageSwitcherOutsideSC>
        <LanguageSwitcher />
      </LanguageSwitcherOutsideSC>
    </>
  );
};

export default Header;
