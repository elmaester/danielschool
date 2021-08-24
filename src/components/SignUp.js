import * as React from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import Multiselect from "multiselect-react-dropdown";
import "./SignUp__InputStyles.css";
import GlobalContext from "../global-context";
import { blackColor, paddings, sizes } from "../responsive";
import {
  heading,
  languageChoice,
  languages,
  name,
  sendButton,
} from "../text/signUpText";

const SignUpSC = styled.section`
  color: white;
  background-color: ${blackColor};
  padding: 42px ${paddings.phone}px;
  text-align: center;
`;

const FormInputSC = styled.input`
  display: block;
  width: 100%;
  border: 2px solid white;
  margin-top: 30px;
  padding: 10px 7px;
  box-sizing: border-box;
  background-color: ${blackColor};
  color: white;
  outline: none;
  &::placeholder {
    color: white;
    font-size: 14px;
    line-height: 26px;
  }
  ${sizes.tablet} {
    width: 360px;
    margin-left: auto;
  }
`;

const SendButtonSC = styled.button`
  background-color: #dd1d3f;
  color: white;
  outline: none;
  border: none;
  border-radius: 100px;
  padding: 18px 26px;
  margin-top: 42px;
  font-size: 16px;
  font-weight: bold;
`;

const SignUp = () => {
  const { lang } = React.useContext(GlobalContext);
  const [clientName, setClientName] = React.useState("");
  const [number, setNumber] = React.useState("380");
  const [chosenLanguages, setChosenLanguages] = React.useState([]);
  return (
    <SignUpSC>
      <h2>{heading[lang]}</h2>
      <aside>
        <FormInputSC
          type="text"
          placeholder={name[lang]}
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <Multiselect
          options={languages}
          displayValue={lang}
          placeholder={languageChoice[lang]}
          closeIcon="cancel"
          closeOnSelect={false}
          hidePlaceholder
          onSelect={(selectedList) => setChosenLanguages(selectedList.map((lang) => lang.en))}
          onRemove={(selectedList) => setChosenLanguages(selectedList.map((lang) => lang.en))}
        />
        <PhoneInput
          country="ua"
          disableDropdown
          countryCodeEditable={false}
          containerClass="SignUp__PhoneInput__container"
          inputClass="SignUp__PhoneInput__input"
          value={number}
          onChange={setNumber}
        />
        <SendButtonSC>{sendButton[lang]}</SendButtonSC>
      </aside>
    </SignUpSC>
  );
};
export default SignUp;
