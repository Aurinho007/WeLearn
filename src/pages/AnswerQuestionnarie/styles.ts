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
  width: 50%;
  text-align: left;
`;

export const Statement = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 5px;
  width: 50%;
`;

export const Options = styled.div`
  width: 50%;
  margin-top: 20px;
`;

export const OptionContainer = styled.div<{ color: string }>`
  margin: 5px 0;
  border-radius: 10px;
  background-color: ${props => props.color};
`;

export const OptionLabel = styled.p`
  position: relative;
  line-height: 4;
  font-family: ${Fonts.montserrat};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 2px;
`;

export const Option = styled.input`
  width: 35px;
  height: 35px;
  left: 0;
  top: 20px;
  position: absolute;
  opacity: 0;
`;

export const CustomOption = styled.span<{ selected: boolean }>`
  display: inline-block;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border: 2px solid ${theme.black};
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.selected ? theme.black : "transparent")};
`;

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

