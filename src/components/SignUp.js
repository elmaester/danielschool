import * as React from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import Multiselect from "multiselect-react-dropdown";
import "./SignUp__InputStyles.css";
import GlobalContext from "../global-context";
import {
  blackColor,
  grayColor,
  paddings,
  redColor,
  sizes,
} from "../responsive";
import BackgroundImage from "gatsby-background-image";
import {
  heading,
  languageChoice,
  languages,
  name,
  sendButton,
  thankYouMessage,
} from "../text/signUpText";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import { handleFormSubmit, validateSignUpData } from "../customFunctions";

const SignUpSC = styled(BackgroundImage)`
  color: white;
  background-color: ${blackColor};
  padding: 42px ${paddings.phone}px;
  text-align: center;
  ${sizes.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    h2 {
      font-size: 40px;
      margin-top: 50px;
      text-align: left;
      width: 50%;
    }
  }
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
    h2 {
      margin-top: 0;
      font-size: 54px;
    }
  }
  ${sizes.desktop} {
    padding-left: ${paddings.desktop}px;
    padding-right: ${paddings.desktop}px;
  }
`;

const FormInputSC = styled.input`
  display: block;
  width: 100%;
  border: 2px solid white;
  padding: 10px 7px;
  box-sizing: border-box;
  ${sizes.phone} {
    margin-top: 30px;
  }
  background-color: transparent;
  color: white;
  outline: none;
  &::placeholder {
    color: white;
    font-size: 14px;
    line-height: 26px;
  }
`;

const SendButtonSC = styled.button`
  background-color: ${redColor};
  color: white;
  outline: none;
  border: none;
  border-radius: 100px;
  padding: 18px 26px;
  margin-top: 42px;
  font-size: 16px;
  font-weight: bold;
  ${sizes.desktop} {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${grayColor};
  }
`;

const ThankYouMessageSC = styled.div`
  min-height: 280px;
  display: flex;
  p {
    font-size: 26px;
    text-shadow: 0.2px 0.2px ${blackColor};
    margin-top: auto;
  }
`;

const SignUp = () => {
  const data = useStaticQuery(graphql`
    query SignUpImageQuery {
      file(base: { regex: "/639653137/" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: {
              fit: COVER
              duotone: { opacity: 40, shadow: "#040e1f", highlight: "#040e1f" }
            }
            quality: 70
            placeholder: BLURRED
          )
        }
        base
      }
    }
  `);
  const { lang } = React.useContext(GlobalContext);
  const [clientName, setClientName] = React.useState("");
  const [number, setNumber] = React.useState("380");
  const [chosenLanguages, setChosenLanguages] = React.useState("");
  const handleList = (list) => {
    setChosenLanguages(list.map((item) => item.en).join(", "));
  };
  const [formStatus, setFormStatus] = React.useState("initial");
  return (
    <SignUpSC {...convertToBgImage(data.file.childImageSharp.gatsbyImageData)}>
      <div>
        <h2>{heading[lang]}</h2>
      </div>
      {(formStatus === "initial" || formStatus === "sending") && (
        <form
          className="gform"
          method="POST"
          action={process.env.GATSBY_EMAIL}
          onSubmit={(e) => {
            e.preventDefault();
            validateSignUpData(clientName, number, chosenLanguages) &&
              handleFormSubmit(e, setFormStatus);
          }}
        >
          <FormInputSC
            type="text"
            placeholder={name[lang]}
            value={clientName}
            name="name"
            onChange={(e) => setClientName(e.target.value)}
            required={true}
          />
          <input
            name="languages"
            style={{ display: "none" }}
            value={chosenLanguages}
            onChange={() => {}}
            required={true}
          />
          <input name="gotcha" style={{ display: "none" }} />
          <Multiselect
            options={languages}
            displayValue={lang}
            placeholder={languageChoice[lang]}
            closeIcon="cancel"
            closeOnSelect={false}
            hidePlaceholder
            onSelect={(selectedList) => {
              handleList(selectedList);
            }}
            onRemove={(selectedList) => {
              handleList(selectedList);
            }}
          />
          <PhoneInput
            country="ua"
            disableDropdown
            countryCodeEditable={false}
            containerClass="SignUp__PhoneInput__container"
            inputClass="SignUp__PhoneInput__input"
            value={number}
            inputProps={{ name: "phone", required: true }}
            onChange={setNumber}
          />
          <SendButtonSC type="submit" disabled={formStatus === "sending"}>
            {sendButton[lang]}
          </SendButtonSC>
        </form>
      )}
      {formStatus === "sent" && (
        <ThankYouMessageSC>
          <p>{thankYouMessage[lang]}</p>
        </ThankYouMessageSC>
      )}
    </SignUpSC>
  );
};
export default SignUp;
