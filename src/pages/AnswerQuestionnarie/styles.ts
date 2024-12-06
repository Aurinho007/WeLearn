import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 810px) {
    margin-bottom: 50px;
  }
`;

export const QuestionTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.2rem;
  font-weight: 400;
  width: 60%;
  text-align: center;

  @media (max-width: 810px) {
    font-size: 1rem;
    width: 90%;
  }
`;

export const Statement = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 5px;
  width: 60%;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 810px) {
    font-size: 1.2rem;
    width: 90%;
  }
`;

export const AuxButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;
`;

export const Options = styled.div`
  width: 50%;
  min-width: 300px;
  margin-top: 20px;


  @media (max-width: 810px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const OptionContainer = styled.div<{ color: string }>`
  margin: 30px 0;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: ${props => props.color};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

`;

export const OptionLabel = styled.p`
  display: flex;
  flex-direction: row;
  font-family: ${Fonts.montserrat};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 2px;
  line-height: 1.5rem;
  text-align: left;

  @media (max-width: 810px) {
    font-size: 1rem;
  }
`;

export const Option = styled.input`
  opacity: 0;
`;

export const CustomOption = styled.span<{ selected: boolean }>`
 position: absolute;
  left: 5px;
  display: flex;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.black};
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s ease;
  color: ${(props) => (props.selected ? theme.white : theme.black)};
  background-color: ${(props) => (props.selected ? theme.black : "transparent")};
  font-size: 1rem;

  @media (max-width: 810px) {
    width: 20px;
    height: 20px;
  }
`;


export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const AlertContainer = styled.div<{visible: boolean}>`
  display: ${props => props.visible ? "flex" : "none"};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);
  z-index: 999;
`;

export const Alert = styled.div`
  max-width: 450px;
  width: 80%;
  padding: 20px;
  background-color: ${theme.lightWhite};
  border: solid ${theme.blue} 4px;
  border-radius: 10px;
  margin-top: -200px;
`;

export const AlertTitle = styled.p`
  font-size: 1.4rem;
  font-family: ${Fonts.poppins};
  font-weight: 500;
  margin-bottom: 3px;
`;

export const AlertSubTitle = styled.p`
  font-size: 1.1rem;
  font-family: ${Fonts.poppins};
  font-weight: 300;
  color: ${theme.grey};
  margin-bottom: 15px;
`;

export const AlertLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;


export const AlertTextKey = styled.p`
  font-size: 1rem;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
`;

export const AlertTextValue = styled.p`
  font-size: 1rem;
  color: ${theme.grey};
  font-family: ${Fonts.montserrat};
  font-weight: 400;
  margin-left: 10px;
`;

export const AlertBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
`;
