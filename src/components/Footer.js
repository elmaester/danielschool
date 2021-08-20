import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { memo, navigation, privacy } from "../text/footerText";
import { sizes, paddings } from "../responsive";

const { tabletLandscape, desktop } = sizes;

const greyColor = "#c4c4c4";

const FooterSC = styled.footer`
  color: ${greyColor};
  background-color: #040e1f;
  padding: 0 ${paddings.phone}px;
  ${tabletLandscape} {
    padding: 0 ${paddings.tabletLandscape}px;
  }
  ${desktop} {
    padding: 0 ${paddings.desktop}px;
  }
`;

const NavSectionTitle = styled.h2`
  font-size: 24px;
  color: white;
  margin-bottom: 28px;
`;

const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  a {
    padding: 2px 0;
    text-decoration: none;
    color: ${greyColor};
    &:hover {
      border-bottom: 1px solid #de1a3e;
      color: white;
    }
  }
`;

const UpperPartSC = styled.div`
  padding-top: 42px;
  ${tabletLandscape} {
    display: grid;
    grid-template-columns: 4fr 1fr;
  }
  ${desktop} {
    grid-template-columns: 3fr 1fr;
  }
`;

const Navigation = styled.nav`
  ${tabletLandscape} {
    display: flex;
    justify-content: space-between;
  }
`;

const NavSection = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 42px;
  }
`;

const PrivacyNotice = styled.div`
  padding: 35px 0;
  text-align: center;
  border-top: 1px solid #222d3d;
  a {
    font-size: 14px;
    color: #818181;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

const SocialsMemo = styled.div`
  p {
    padding: 40px 35px;
    text-align: center;
    line-height: 26px;
    ${tabletLandscape} {
      padding: 0;
    }
  }
`;

const Footer = () => {
  const lang = "uk";
  return (
    <FooterSC>
      <UpperPartSC>
        <Navigation>
          {navigation.map((navSection) => (
            <NavSection>
              <NavSectionTitle>{navSection.heading[lang]}</NavSectionTitle>
              <ul>
                {navSection.items.map((navItem) => (
                  <NavItem>
                    <Link to={"/" + navItem.link}>{navItem[lang]}</Link>
                  </NavItem>
                ))}
              </ul>
            </NavSection>
          ))}
        </Navigation>
        <SocialsMemo>
          <p>
            <span style={{ fontWeight: "bold" }}>Daniel's School </span>
            {memo[lang]}
          </p>
        </SocialsMemo>
      </UpperPartSC>
      <PrivacyNotice>
          <Link to={"/" + privacy.link}>{privacy[lang]}</Link>
      </PrivacyNotice>
    </FooterSC>
  );
};

export default Footer;
