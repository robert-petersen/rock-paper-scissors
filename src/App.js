import React, { useState } from "react";
import { Background, TitleSection, WinCounter, Title, TitleContainer, ResultsSection, UserResultsContainer, ResultsActionContainer, CountDown, ResultsTitle, OppResultsContainer, ImageContainer, ChoiceSection, IconRock, IconPaper, IconScissors, IconWaiting, ChoiceTitle, ChoicesContainer, Choice, ThrowResultsContainer, ResultTitle, Button } from "./AppElements";

function App() {
  const [ winCount, setWinCount ] = useState(0);
  const [ countDown, setCountDown ] = useState("");
  const [ userThrowImage, setUserThrowImage ] = useState(0);
  const [ oppThrowImage, setOppThrowImage ] = useState(0);
  const [ hideChoices, setHideChoices ] = useState(false);
  const [ hideCountDown, setHideCountDown ] = useState(false);
  const [ message, setMessage ] = useState("Placeholder");
  let opp = 0;

  const makeThrow = async (throwId) => {
    setUserThrowImage(throwId);
    setHideChoices(true);
    await startCounter();
    let opp = getOppResult();
    if ( (throwId === 1 && opp === 1) || (throwId === 2 && opp === 2) || (throwId === 3 && opp === 3) ) {
      setMessage("It's A Draw!");
    } else if ( (throwId === 1 && opp === 3) || (throwId === 3 && opp === 2) || (throwId === 2 && opp === 1) ) {
      setMessage("Congrats on the Win!");
      setWinCount(winCount + 1);
    } else {
      setMessage("That's a Loss!");
    }
    setHideCountDown(true);
  }

  const getOppResult = () => {
    opp = Math.ceil(Math.random()*3);
    setOppThrowImage(opp);
    return opp;
  }

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const startCounter = async () => {
    setCountDown("3");
    await delay(1000);
    setCountDown("2");
    await delay(1000);
    setCountDown("1");
    await delay(1000);
    setCountDown("Shoot!");
    await delay(500);
    setHideCountDown(true);
  }

  const restart = (evt) => {
    evt.preventDefault();
    setHideChoices(false);
    setUserThrowImage(0);
    setOppThrowImage(0);
    setHideCountDown(false);
    setCountDown("");
  }

  return (
    <Background>
      <TitleSection>
        <TitleContainer>
          <Title>ROCK <br /> PAPER <br /> SCISSORS</Title>
          <WinCounter>Wins<br />{winCount}</WinCounter>
        </TitleContainer>
      </TitleSection>
      <ResultsSection>
        <UserResultsContainer>
          <ResultsTitle>YOU</ResultsTitle>
          <ImageContainer>
            {userThrowImage === 0 ? <IconWaiting /> : ""}
            {userThrowImage === 1 ? <IconRock /> : ""}
            {userThrowImage === 2 ? <IconPaper /> : ""}
            {userThrowImage === 3 ? <IconScissors /> : ""}
          </ImageContainer>
        </UserResultsContainer>
        <ResultsActionContainer>
          { hideCountDown ? 
            <ThrowResultsContainer>
              <ResultTitle>{message}</ResultTitle>
              <Button onClick={restart} >Go Again!</Button>
            </ThrowResultsContainer>
          :
            <CountDown>{countDown}</CountDown>
          }
        </ResultsActionContainer>
        <OppResultsContainer>
          <ResultsTitle>OPPONENT</ResultsTitle>
          <ImageContainer>
            {oppThrowImage === 0 ? <IconWaiting /> : ""}
            {oppThrowImage === 1 ? <IconRock /> : ""}
            {oppThrowImage === 2 ? <IconPaper /> : ""}
            {oppThrowImage === 3 ? <IconScissors /> : ""}
          </ImageContainer>
        </OppResultsContainer>
      </ResultsSection>
      <ChoiceSection>
        <ChoiceTitle>{hideChoices ? "" : "Make Your Choice"}</ChoiceTitle>
        { hideChoices ? "" : 
          <ChoicesContainer>
            <Choice onClick={() => {makeThrow(1)}}>
              <IconRock />
            </Choice>
            <Choice onClick={() => {makeThrow(2)}}>
              <IconPaper />
            </Choice>
            <Choice onClick={() => {makeThrow(3)}}>
              <IconScissors />
            </Choice>
          </ChoicesContainer>
        }
      </ChoiceSection>
    </Background>
  );
}

export default App;
