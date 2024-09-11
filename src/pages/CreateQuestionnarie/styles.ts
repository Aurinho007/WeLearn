import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const QuestionarrieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  padding: 16px 0;
  width: 50%;
`;

export const Label = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.3rem;
  font-weight: 600;

`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  height: 30px;
  border-bottom: solid 4px ${theme.blue};
  margin-top: 12px;
  font-size: 1.2rem;
  font-family: ${Fonts.montserrat};
`;

export const QuestionTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 2rem;
  margin: 50px 0 0 0;
`;

export const ButtonsContainer = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  justify-content: space-around;
  width: 50%;
`;
