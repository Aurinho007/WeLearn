import styled from "styled-components";
import Fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const QuestionContainer = styled.div`
  padding: 16px 0;
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

export const DropDown = styled.select`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  border: solid 3px ${theme.blue};
  margin-top: 12px;
  font-size: 1.2rem;
  font-family: ${Fonts.montserrat};
  padding: 8px 6px;
  border-radius: 8px;
`;
