import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { blueColor, paddings, sizes } from "../responsive";
import { navigation } from "../text/footerText";

const MenuSC = styled.nav`
  position: fixed;
  z-index: 101;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px ${paddings.phone}px;
  ${sizes.tabletLandscape} {
    padding: 38px ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding: 88px ${paddings.desktop}px;
  }
`;

const InnerContainer = styled.div`
  ${sizes.phone} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    text-align: right;
  }
  ${sizes.tablet} {
    display: flex;
    justify-content: space-between;
  }
  ${sizes.desktop} {
    width: 85%;
    margin-left: auto;
  }
  ${sizes.desktopWide} {
    width: 75%;
    margin-left: auto;
  }
`;

const NavSectionSC = styled.div`
  li {
    margin-top: 5px;
  }
  ${sizes.desktop} {
    &:hover h3,
    li:hover {
      color: ${blueColor};
    }
    li {
      margin-top: 20px;
    }
  }
`;

const NavSectionTitleSC = styled.h3`
  font-size: 24px;
`;

const NavItemSC = styled.li``;

const Menu = ({ closeMenuFunc }) => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <MenuSC>
      <InnerContainer>
        {navigation.map((navSection) => (
          <NavSectionSC key={navSection.heading[lang]}>
            <NavSectionTitleSC>{navSection.heading[lang]}</NavSectionTitleSC>
            <ul>
              {navSection.items.map((navItem) => (
                <NavItemSC key={navItem[lang]}>
                  <Link to={"/" + navItem.link} onClick={closeMenuFunc}>
                    {navItem[lang]}
                  </Link>
                </NavItemSC>
              ))}
            </ul>
          </NavSectionSC>
        ))}
      </InnerContainer>
    </MenuSC>
  );
};

export default Menu;
