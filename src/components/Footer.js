import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { memo, navigation, privacy } from "../text/footerText";
import { sizes, paddings, blackColor } from "../responsive";
import GlobalContext from "../global-context";
import FacebookIcon from "../images/facebook.svg";
import InstagramIcon from "../images/instagram.svg";

const greyColor = "#c4c4c4";

const FooterSC = styled.footer`
  color: ${greyColor};
  background-color: ${blackColor};
  padding: 0 ${paddings.phone}px;
  ${sizes.tabletLandscape} {
    padding: 0 ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding: 0 ${paddings.desktop}px;
  }
`;

const NavSectionTitleSC = styled.h2`
  color: white;
  margin-bottom: 28px;
`;

const NavItemSC = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 20px;
    ${sizes.desktop} {
      margin-bottom: 15px;
    }
  }
  a {
    padding: 2px 0;
    ${sizes.desktop} {
      line-height: 20px;
    }
    &:hover {
      border-bottom: 1px solid #de1a3e;
      color: white;
    }
  }
`;

const UpperPartSC = styled.div`
  padding-top: 42px;
  ${sizes.tablet} {
    display: grid;
    gap: 35px;
    grid-template-columns: 3fr 1fr;
  }
  ${sizes.desktop} {
    grid-template-columns: 4fr 1fr;
    gap: 10px;
  }
`;

const NavigationSC = styled.nav`
  ${sizes.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ${sizes.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;

const NavSectionSC = styled.div`
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
    ${sizes.tablet} {
      text-align: right;
      padding: 0;
    }
  }
  ${sizes.phone} {
    margin-top: 30px;
  }
`;

const SocialIconContainerSC = styled.div`
  width: 32px;
  min-width: 32px;
  max-width: 32px;
  height: 32px;
  min-height: 32px;
  max-height: 32px;
  & + & {
    margin-left: 15px;
  }
`;

const SocialsContainerSC = styled.div`
  display: flex;
  justify-content: center;
  ${sizes.tablet} {
    justify-content: flex-end;
    margin-bottom: 19px;
  }
`;

const Footer = () => {
  const { lang } = React.useContext(GlobalContext);
  return (
    <FooterSC>
      <UpperPartSC>
        <NavigationSC>
          {navigation.map((navSection) => (
            <NavSectionSC key={navSection.heading[lang]}>
              <NavSectionTitleSC>{navSection.heading[lang]}</NavSectionTitleSC>
              <ul>
                {navSection.items.map((navItem) => (
                  <NavItemSC key={navItem[lang]}>
                    <Link to={"/" + navItem.link}>{navItem[lang]}</Link>
                  </NavItemSC>
                ))}
              </ul>
            </NavSectionSC>
          ))}
        </NavigationSC>
        <SocialsMemo>
          <SocialsContainerSC>
            <SocialIconContainerSC>
              <FacebookIcon />
            </SocialIconContainerSC>
            <SocialIconContainerSC>
              <InstagramIcon />
            </SocialIconContainerSC>
          </SocialsContainerSC>
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
