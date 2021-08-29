import * as React from "react";

const langs = ["uk", "en"];

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [lang, setLang] = React.useState("uk");
  React.useEffect(() => {
    const lsLang = JSON.parse(localStorage.getItem("lang"));
    if (lsLang) {
      setLang(lsLang);
    } else {
      if (
        !navigator.languages.some((lng) => lng.includes("uk")) &&
        !navigator.languages.some((lng) => lng.includes("ru"))
      ) {
        setLang("en");
      }
    }
  }, []);

  const setLanguage = (language) => {
    if (langs.includes(language)) {
      setLang(language);
      localStorage.setItem("lang", JSON.stringify(language));
    }
  };
  return (
    <GlobalContext.Provider value={{ lang, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
