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
  top: 0; 
  right: 8%;
  justify-content: center;
  z-index: 9999;
  margin-top: 10px;
`;

export const Card = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.white};
  border: solid 2px ${theme.black};
  padding: 16px 26px 16px 12px;
  min-width: 250px;
  background-color: ${props => theme.toast[props.color as ToastType]};

  &.enter {
    animation: ${fadeIn} .5s forwards;
  }

  &.exit {
    animation: ${fadeOut} .5s forwards; 
  }
`;

export const Icon = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const Content = styled.div``;

export const Title = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 6px;
`;

export const Text = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 400;
  font-size: 1rem;
`;
