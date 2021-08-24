import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { sizes } from "../responsive";

const LanguageSwitcherSC = styled.div`
  color: #a1a9b0;
  background-color: white;
  span {
    color: #a1a9b0;
    &.LanguageSwitcher__active-lang {
      color: #040e1f;
      cursor: default;
    }
    ${sizes.desktop} {
      cursor: pointer;
    }
  }
`;

const LanguageSwitcher = () => {
  const { lang, setLanguage } = React.useContext(GlobalContext);
  return (
    <LanguageSwitcherSC>
      <span
        className={lang === "uk" ? "LanguageSwitcher__active-lang" : undefined}
        onClick={() => setLanguage("uk")}
      >
        UA
      </span>{" "}
      |{" "}
      <span
        className={lang === "en" ? "LanguageSwitcher__active-lang" : undefined}
        onClick={() => setLanguage("en")}
      >
        EN
      </span>
    </LanguageSwitcherSC>
  );
};

export default LanguageSwitcher;
