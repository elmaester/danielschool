import * as React from "react";
import styled from "styled-components";
import GlobalContext from "../global-context";
import { grayColor, sizes } from "../responsive";

const LanguageSwitcherSC = styled.div`
  color: ${grayColor};
  background-color: white;
  padding: 1px;
  button {
    color: ${grayColor};
    background-color: inherit;
    border: none;
    padding: 0;
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
      <button
        className={lang === "uk" ? "LanguageSwitcher__active-lang" : undefined}
        onClick={() => setLanguage("uk")}
      >
        UA
      </button>{" "}
      |{" "}
      <button
        className={lang === "en" ? "LanguageSwitcher__active-lang" : undefined}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </LanguageSwitcherSC>
  );
};

export default LanguageSwitcher;
