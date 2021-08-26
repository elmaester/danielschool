import * as React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import Menu from "./Menu";
import MenuIcon from "../images/Menu.svg";
import MenuCloseIcon from "../images/Close.svg";
import { paddings, sizes } from "../responsive";
import LanguageSwitcher from "./LanguageSwitcher";

const HeaderSC = styled.div`
  padding: 11px ${paddings.phone}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
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
  ${sizes.desktop} {
    cursor: pointer;
  }
`;

const LanguageSwitcherOutsideSC = styled.div`
  padding: 10px ${paddings.phone}px 8.4px;
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

const HeaderOuterContainerSC = styled.header`
  position: fixed;
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

const FixedPositionSpacerSC = styled.div`
  min-height: 94px;
`;

const Header = () => {
  const [menuShown, setMenuShown] = React.useState(false);
  return (
    <>
      <HeaderOuterContainerSC>
        <HeaderSC>
          <LogoContainerSC>
            <Logo />
          </LogoContainerSC>
          <LanguageSwitcherInsideSC>
            <LanguageSwitcher />
          </LanguageSwitcherInsideSC>
          <MenuContainerSC>
            {menuShown ? (
              <MenuCloseIcon onClick={() => setMenuShown(false)} />
            ) : (
              <MenuIcon onClick={() => setMenuShown(true)} />
            )}
          </MenuContainerSC>
        </HeaderSC>
        <LanguageSwitcherOutsideSC>
          <LanguageSwitcher />
        </LanguageSwitcherOutsideSC>
      </HeaderOuterContainerSC>
      <FixedPositionSpacerSC />
      {menuShown && <Menu closeMenuFunc={() => setMenuShown(false)} />}
    </>
  );
};

export default Header;
