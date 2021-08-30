import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import GlobalContext from "../global-context";
import { couldnt, doesntExist, goHome, pageTitle, sorry } from "../text/pageNotFoundText";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  const {lang} = React.useContext(GlobalContext);
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>{pageTitle[lang]}</title>
      </Helmet>
      <h1 style={headingStyles}>{pageTitle[lang]}</h1>
      <p style={paragraphStyles}>
        {sorry[lang]}{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        {couldnt[lang]}
        <br />
        <br />
        {doesntExist[lang]}
        <br />
        <br />
        <Link to="/">{goHome[lang]}</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
