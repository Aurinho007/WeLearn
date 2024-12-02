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
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: ${Fonts.montserrat};
  color: ${theme.grey};
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  height: 250px;
  margin-right: 80px;
  object-fit: cover;

  @media (max-width: 1100px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

