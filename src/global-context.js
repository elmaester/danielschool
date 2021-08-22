import * as React from "react";

const langs = ["uk", "en"];

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [lang, setLang] = React.useState("uk");

  const setLanguage = (language) => {
    if (langs.includes(language)) {
      setLang(language);
    }
  };
  return (
    <GlobalContext.Provider value={{ lang, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
