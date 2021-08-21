import React, { useState } from "react";
import { Background, TitleSection, WinCounter, Title, TitleContainer, ResultsSection, UserResultsContainer, ResultsActionContainer, CountDown, ResultsTitle, OppResultsContainer, ImageContainer, ChoiceSection, IconRock, IconPaper, IconScissors, IconWaiting } from "./AppElements";

function App() {
  const [ winCount, setWinCount ] = useState(0);
  const [ countDown, setCountDown ] = useState("");
  const [ userThrowImage, setUserThrowImage ] = useState(0);
  const [ oppThrowImage, setOppThrowImage ] = useState(0);

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
          <CountDown>3</CountDown>
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

      </ChoiceSection>
    </Background>
  );
}

export default App;
