import styled from "styled-components";
import theme from "../../../assets/theme";
import Fonts from "../../../assets/fonts/fonts";

export const Container = styled.div`
  position: fixed;
  width: 92.3svw;
  padding: 16px;
  bottom: 0;
  left: 0;
  background-color: ${theme.white};
  box-shadow: 0px -4px 15px -10px #666666;
  z-index: 50;
`;

export const PrimaryBtn = styled.button`
  border: none;
  width: 95%;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: ${Fonts.poppins};
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${theme.blue};
  font-weight: 600;
  color: ${theme.white};
  margin-bottom: 8px;

  &:active {
    filter: brightness(0.9);
  }
`;