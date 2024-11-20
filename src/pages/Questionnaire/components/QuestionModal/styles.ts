import styled from "styled-components";
import theme from "../../../../assets/theme";
import Fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: center;
  background-color: rgba(0,0,0,.7);

  @media (min-width: 760px) {
    height: 100vh;
  }
`;

export const Modal = styled.div`
  margin-top: 20px;
  background-color: ${theme.lightWhite};
  padding: 20px 50px;
  border-radius: 20px;
  border: solid 5px ${theme.blue};
  width: 70%;
  z-index: 999;

  @media (min-width: 770px) {
    height: 630px;
  }
`;

export const Title = styled.div`
  font-family: ${Fonts.poppins};
  font-weight: 500;
  font-size: 2rem;
  padding-bottom: 10px;
  text-align: center;
`;

export const QContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideContainer = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }
   
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

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 250px;

`;
