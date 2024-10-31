import { styled } from "styled-components";
import ISecondaryButton from "./interface";
import fonts from "../../../assets/fonts/fonts";
import theme from "../../../assets/theme";
import Fonts from "../../../assets/fonts/fonts";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // Necessário para posicionar o PopUp
`;

export const PopUp = styled.div`
  position: absolute;
  bottom: 100%; // Posiciona o PopUp acima do botão
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: ${theme.lightBlue};
  border-radius: 4px;
  white-space: nowrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1; // Certifica que o PopUp fica acima do botão
`;

export const TextPopUp = styled.p`
  font-size: 1rem;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  color: ${theme.white};
`;

export const Button = styled.button<{style: ISecondaryButton}>`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active {
    filter: brightness(0.8);
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p<{style: ISecondaryButton}>`
  color: ${theme.black};
  font-family: ${(props) => (props.style.colored ? fonts.roboto : fonts.montserrat)};
  font-weight: ${(props) => (props.style.colored ? 600 : 500)};
  color: ${(props) => (props.style.colored ? theme.blue : theme.black)};
  font-size: ${(props) => props.style.Fsize}rem;
  padding: 6px 25px;
  white-space: nowrap;

  @media (max-width: 810px) {
    font-size: .8rem;
  }
`;
