import { styled } from "styled-components";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const Container = styled.div`
  box-shadow: 0px 4px 15px -10px rgba(0,0,0,0.25);
  background-color: ${theme.white};
  border-radius: 10px;
  padding: 15px 20px;
  height: 90px;
  width: 100%;
  max-width: 25%;
  min-width: 315px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: ease-in-out 500ms;

  &:hover {
    transform: scale(1.08);
  box-shadow: 0px 6px 20px -5px rgba(0,0,0,0.25);
  }

  @media (max-width: 810px){
    margin-bottom: 30px;
    max-width: 100%;
  }
`;

export const IconContainer = styled.div`
  padding: 0 20px 0 0;
`;

export const Icon = styled.img`
  height: 70px;

  @media (max-width: 700px){
    height: 50px;  
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  padding-bottom: 8px;
`;

export const Title = styled.p`
font-family: ${fonts.montserrat};
font-weight: 600;
font-size: 1.6rem;

  @media (max-width: 500px){
    font-size: 1.2rem;
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Text = styled.p`
font-family: ${fonts.montserrat};
font-size: 1.3rem;
font-weight: 400;
color: ${theme.grey};

  @media (max-width: 500px){
    font-size: 1rem;
  }
`;

