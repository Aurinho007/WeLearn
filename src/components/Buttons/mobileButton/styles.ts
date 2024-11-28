import styled from "styled-components";
import theme from "../../../assets/theme";
import Fonts from "../../../assets/fonts/fonts";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.white};
  box-shadow: 0px -4px 15px -10px #666666;
  z-index: 99;
`;

export const PrimaryBtn = styled.button`
  border: none;
  width: 90%;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: ${Fonts.poppins};
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.blue};
  font-weight: 600;
  color: ${theme.white};
  margin-bottom: 14px;

  &:active {
    filter: brightness(0.9);
  }
`;