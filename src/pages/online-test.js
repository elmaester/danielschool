import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { SignUpButtonSC } from "../components/CarouselItem";
import Footer from "../components/Footer";
import GlobalStyle, { PageTitleSC } from "../components/GlobalStyle";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import GlobalContext from "../global-context";
import { blueColor, paddings, sizes } from "../responsive";
import {
  confirmButtonText,
  getScore,
  incompleteWarningText,
  questions,
  verdictMessage,
} from "../text/onlineTestText";

const OnlineTestSC = styled.form`
  padding: ${paddings.phone}px;
  ${sizes.tabletLandscape} {
    padding-left: ${paddings.tabletLandscape}px;
    padding-right: ${paddings.tabletLandscape}px;
  }
  ${sizes.desktop} {
    padding-left: ${paddings.desktop}px;
    padding-right: ${paddings.desktop}px;
  }
`;

const QuestionSC = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

const PromptSC = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const SubSectionTitle = styled.h3`
  margin: 30px 0;
  font-size: 28px;
`;

const AnswersContainer = styled.div`
  margin: 10px 0;
`;

const RadioPairSC = styled.div`
  & + & {
    margin-top: 3px;
  }
  input {
    margin-right: 8px;
  }
  &.test-finished {
    pointer-events: none;
  }
`;

const VerdictSC = styled.div`
  padding: 15px;
  line-height: 18px;
  font-weight: bold;
  border: 3px dashed ${blueColor};
  margin: 15px 0 5px;
  ${sizes.tablet} {
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }
  ${sizes.tabletLandscape} {
    padding: 30px;
  }
`;

const GetScoreContainerSC = styled.div`
  align-items: center;
  display: flex;
`;

const IncompleteWarningSC = styled.div`
  margin-left: 20px;
  color: red;
`;

const OnlineTestPage = () => {
  const { lang } = React.useContext(GlobalContext);
  const [userAnswersObj, setUserAnswersObj] = React.useState({});
  const [verdict, setVerdict] = React.useState();
  const [incompleteWarning, setIncompleteWarning] = React.useState("");
  const submitForm = () => {
    if (Object.entries(userAnswersObj).length < 25) {
      setIncompleteWarning(incompleteWarningText[lang]);
      return null;
    }
    const correctAnswers = questions.map((question) => {
      if (question.hasOwnProperty("correctIndex")) {
        return question.correctIndex;
      }
      return question.correctness;
    });
    const userAnswers = Object.values(userAnswersObj);
    let numberOfCorrectAnswers = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        numberOfCorrectAnswers += 1;
      }
    }
    const { one, two, three } = verdictMessage;
    setVerdict(
      `${one[lang]} ${numberOfCorrectAnswers} ${two[lang]} ${getScore(
        numberOfCorrectAnswers
      )}.
      ${three[lang]}`
    );
  };
  return (
    <GlobalStyle>
      <Helmet>
        <title>Online Test</title>
      </Helmet>
      <Header />
      <OnlineTestSC
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <PageTitleSC>Online Test</PageTitleSC>
        {questions.map((question, questionIndex) => (
          <QuestionSC key={questionIndex}>
            {questionIndex === 10 && (
              <SubSectionTitle>Is the sentence correct?</SubSectionTitle>
            )}
            {questionIndex === 18 && (
              <SubSectionTitle>Choose the correct pronoun</SubSectionTitle>
            )}
            <PromptSC>{`${questionIndex + 1}. ${question.prompt}`}</PromptSC>
            <AnswersContainer>
              {question.hasOwnProperty("correctness") ? (
                <>
                  <RadioPairSC
                    className={!!verdict ? "test-finished" : undefined}
                  >
                    <input
                      type="radio"
                      name={`q${questionIndex}`}
                      id={`q${questionIndex}a1`}
                      onInput={() =>
                        setUserAnswersObj({
                          ...userAnswersObj,
                          [questionIndex]: false,
                        })
                      }
                    />
                    <label htmlFor={`q${questionIndex}a1`}>False</label>
                  </RadioPairSC>
                  <RadioPairSC
                    className={!!verdict ? "test-finished" : undefined}
                  >
                    <input
                      type="radio"
                      name={`q${questionIndex}`}
                      id={`q${questionIndex}a2`}
                      onInput={() =>
                        setUserAnswersObj({
                          ...userAnswersObj,
                          [questionIndex]: true,
                        })
                      }
                    />
                    <label htmlFor={`q${questionIndex}a2`}>Correct</label>
                  </RadioPairSC>
                </>
              ) : (
                question.answers.map((answer, answerIndex) => (
                  <RadioPairSC
                    className={!!verdict ? "test-finished" : undefined}
                    key={answerIndex}
                  >
                    <input
                      type="radio"
                      name={`q${questionIndex}`}
                      id={`q${questionIndex}a${answerIndex}`}
                      onInput={() =>
                        setUserAnswersObj({
                          ...userAnswersObj,
                          [questionIndex]: answerIndex,
                        })
                      }
                    />
                    <label htmlFor={`q${questionIndex}a${answerIndex}`}>
                      {answer}
                    </label>
                  </RadioPairSC>
                ))
              )}
            </AnswersContainer>
          </QuestionSC>
        ))}
        {!!verdict ? (
          <VerdictSC>{verdict}</VerdictSC>
        ) : (
          <GetScoreContainerSC>
            <SignUpButtonSC type="submit">
              {confirmButtonText[lang]}
            </SignUpButtonSC>
            {!!incompleteWarning && (
              <IncompleteWarningSC>{incompleteWarning}</IncompleteWarningSC>
            )}
          </GetScoreContainerSC>
        )}
      </OnlineTestSC>
      <SignUp />
      <Footer />
    </GlobalStyle>
  );
};

export default OnlineTestPage;
