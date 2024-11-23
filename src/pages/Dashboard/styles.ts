import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10px;
  gap: 30px;

  @media (max-width: 810px) {

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

  @media (max-width: 810px) {
    flex-direction: column;
}
`;

export const AverageContainer = styled.div`
  background-color: ${theme.white};
  border: solid 3px ${theme.blue};
  border-radius: 8px;
`;

export const PercentContainer = styled.div`
  background-color: ${theme.white};
  border: solid 3px ${theme.blue};
  border-radius: 8px;
`;



