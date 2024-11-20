import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const QuestionTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.2rem;
  font-weight: 400;
  width: 60%;
  text-align: left;

  @media (max-width: 810px) {
    font-size: 1rem;
  }
`;

export const Statement = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 5px;
  width: 60%;
  margin-bottom: 30px;
  text-align: left;

  @media (max-width: 810px) {
    font-size: 1.2rem;
  }

`;

export const Options = styled.div`
  width: 70%;
  min-width: 300px;
  margin-top: 20px;
`;

export const OptionContainer = styled.div<{ color: string }>`
  margin: 30px 0;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: ${props => props.color};
  cursor: pointer;
`;

export const OptionLabel = styled.p`
  position: relative;
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
  position: absolute;
  width: 35px;
  height: 35px;
  left: 0;
  top: 0;
  opacity: 0;
`;

export const CustomOption = styled.span<{ selected: boolean }>`
display: flex;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.black};
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: ${(props) => (props.selected ? theme.white : theme.black)};
  background-color: ${(props) => (props.selected ? theme.black : "transparent")};
  font-size: 1rem;

  @media (max-width: 810px) {
    width: 20px;
    height: 20px;
  }
`;

export const AuxButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

