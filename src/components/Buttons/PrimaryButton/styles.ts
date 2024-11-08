import { styled } from "styled-components";
import IButton from "./interface";
import fonts from "../../../assets/fonts/fonts";
import theme from "../../../assets/theme";

export const Container = styled.div<{style: IButton}>`
  width: ${props => props.style.width ?? "100%" };
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  font-family: ${fonts.roboto};
  font-weight: 600;
  font-size: 1.4rem;
  color: ${theme.white};
  border-radius: 8px;
  border: none;
  background-color: ${theme.blue};
  cursor: pointer;

  &:active{
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  padding: 8px 0;
`;