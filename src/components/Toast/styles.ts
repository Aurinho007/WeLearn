import styled, { keyframes } from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";
import { ToastType } from "./interface";

const fadeIn = keyframes`
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 10px; 
  right: 8%;
  justify-content: center;
  z-index: 99999999;

  @media (max-width: 800px){
    right: 0;
    left: 0;
    top: 0;
  }
`;

export const Card = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.white};
  border: solid 2px ${theme.black};
  padding: 16px;
  min-width: 250px;
  background-color: ${props => theme.toast[props.color as ToastType]};

  &.enter {
    animation: ${fadeIn} .5s forwards;
  }

  &.exit {
    animation: ${fadeOut} .5s forwards; 
  }

  @media (max-width: 800px){
   border-radius: 0;
   border: none;
   border-bottom: solid 2px ${theme.black};
   width: 100%;
  }
`;

export const Icon = styled.img`
  width: 40px;
  margin-right: 12px;

  @media (max-width: 800px){
    width: 25px;
  }
`;

export const Content = styled.div``;

export const Title = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 6px;

  @media (max-width: 800px){
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1.2rem;

  @media (max-width: 800px){
    font-size: 1rem;
  }
`;
