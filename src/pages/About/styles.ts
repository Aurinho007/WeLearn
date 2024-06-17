import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  text-align: center;
  width: 600px;
`;

export const Text = styled.p`
  font-family: ${Fonts.montserrat};
  color: ${theme.grey};
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const Line = styled.div`
  width: 650px;
  border-bottom: solid 4px ${theme.blue};
  margin: 30px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 200px;

`;