import { styled } from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${Fonts.poppins};
  font-weight: 700;
  font-style: italic;
  font-size: 2rem;
  letter-spacing: -1px;

`;

export const T = styled.p`
  z-index: 2;
  margin-left: 2px;
`;

export const BT = styled.p`
  color: ${theme.blue};
  z-index: 1;
  margin-left: -8px;

  animation: spin-fade 10s infinite;

  @keyframes spin-fade {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(720deg); /* Gira rapidamente */
    }
    50% {
      transform: rotate(720deg);
    }
    70% {
      transform: rotate(1440deg); /* Gira novamente mais rápido */
    }
    90% {
      transform: rotate(1440deg);
    }
    100% {
      transform: rotate(1440deg);
    }
  }
`;

export const DT = styled.p`
  z-index: 1;
  margin-left: -5px;

`;

