import styled from "styled-components";
import {FaHandRock} from 'react-icons/fa';
import {FaHandPaper} from 'react-icons/fa';
import {FaHandScissors} from 'react-icons/fa';
import {BsThreeDots} from 'react-icons/bs';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(farthest-side at 50% 0%, rgb(	0, 96, 191 ), rgb(0, 57, 114 ));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

// Title Styles

export const TitleSection = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleContainer = styled.div`
  width: fit-content;
  padding: 1rem;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid whitesmoke;
  border-radius: 20px;
  background-color: rgb(0, 44, 89);
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  color: whitesmoke;
  margin-left: 2rem;
  margin-right: 4rem;
`

export const WinCounter = styled.h2`
  width: fit-content;
  padding: 1rem 2rem;
  text-align: center;
  line-height: 1.2;
  margin-right: 2rem;
  color: rgb(0, 44, 89);
  border: 2px solid whitesmoke;
  border-radius: 20px;
  font-size: 1.6rem;
  background-color: whitesmoke;
`

// Results Styles

export const ResultsSection = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const UserResultsContainer = styled.div`
  flex: .2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OppResultsContainer = styled.div`
  flex: .2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultsTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  color: whitesmoke;
`

export const ImageContainer = styled.div`
  margin-top: 1rem;
  height: 20vh;
  width: 20vh;
  border: 1px solid whitesmoke;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResultsActionContainer = styled.div`
  flex: .2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CountDown = styled.h1`
  font-size: 4rem;
  color: whitesmoke;
  transition: 0.3s ease-in-out;
`

// Choice Styles

export const ChoiceSection = styled.div`

`

// Icon Styles

export const IconRock = styled(FaHandRock)`
  font-size: 3rem;
  color: white;
`
export const IconPaper = styled(FaHandPaper)`
  font-size: 3rem;
  color: white;
`
export const IconScissors = styled(FaHandScissors)`
  font-size: 3rem;
  color: white;
`
export const IconWaiting = styled(BsThreeDots)`
  font-size: 3rem;
  opacity: 50%;
  color: white;
`