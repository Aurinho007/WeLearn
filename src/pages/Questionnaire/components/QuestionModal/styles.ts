import styled from "styled-components";
import theme from "../../../../assets/theme";
import Fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div`
  display: flex;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center; 
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  overflow: auto; 
`;


export const Modal = styled.div`
  background-color: ${theme.lightWhite};
  padding: 20px;
  border-radius: 15px;
  border: solid 5px ${theme.blue};
  width: 90%;
  max-width: 1000px;
  max-height: 90vh; 
  overflow-y: auto; 
  box-sizing: border-box;
  margin: auto; 
`;

export const Title = styled.div`
  font-family: ${Fonts.poppins};
  font-weight: 500;
  font-size: 1.5rem;
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
  font-size: 1rem;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  border: none;
  outline: none;
  background: none;
  border-bottom: solid 4px ${theme.blue};
  font-size: 1rem;
  font-family: ${Fonts.montserrat};
  margin-top: 12px;
  overflow-wrap: break-word;

  &:disabled {
    color: ${theme.grey};
  }
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
  font-size: 1rem;
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
