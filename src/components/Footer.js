import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { memo, navigation, privacy } from "../text/footerText";

const greyColor = "#c4c4c4";

const FooterSC = styled.footer`
  color: ${greyColor};
  background-color: #040e1f;
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
  padding: 42px 15px;
`;

const NavSection = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 42px;
  }
`;

const PrivacyNotice = styled.div`
  padding: 0 15px;
`;

const PrivacyNoticeInner = styled.div`
  padding: 35px 0;
  text-align: center;
  border-top: 1px solid #222d3d;
  a {
    font-size: 14px;
    color: #818181;
    text-decoration: none;
  }
`;

const SocialsMemo = styled.div`
  p {
    text-align: center;
    padding: 40px 35px;
    line-height: 26px;
  }
`;

const Footer = () => {
  const lang = "uk";
  return (
    <FooterSC>
      <UpperPartSC>
        <nav>
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
        </nav>
      </UpperPartSC>
      <SocialsMemo>
        <p>
          <span style={{ fontWeight: "bold" }}>Daniel's School </span>
          {memo[lang]}
        </p>
      </SocialsMemo>
      <PrivacyNotice>
        <PrivacyNoticeInner>
          <Link to={"/" + privacy.link}>{privacy[lang]}</Link>
        </PrivacyNoticeInner>
      </PrivacyNotice>
    </FooterSC>
  );
};

export default Footer;
