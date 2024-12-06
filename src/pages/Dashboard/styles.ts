import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 10px;
  gap: 30px;
  justify-self: center;
  max-width: 780px;
  height: auto;

  @media (max-width: 810px) {
    max-width: 376px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export const DashboardGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DashContainer = styled.div`

`;

export const Dash = styled.div`
  background-color: ${theme.white};
  border: solid 3px ${theme.blue};
  border-radius: 8px;
  padding: 10px;
`;

export const DashTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
`;

export const Sub = styled.span`
  font-family: ${Fonts.montserrat};
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.7rem;
`;



