import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  text-align: left;
  width: 600px;
`;

export const Text = styled.p`
  font-family: ${Fonts.montserrat};
  color: ${theme.grey};
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  height: 250px;
  margin-right: 80px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;