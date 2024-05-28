import { styled } from 'styled-components';
import fonts from '../../../../assets/fonts/fonts';
import theme from '../../../../assets/theme';

export const Container = styled.div`
  box-shadow: 0px 4px 15px -10px rgba(0,0,0,0.25);
  background-color: ${theme.white};
  border-radius: 10px;
  padding: 15px 20px;
  margin: 10px;
  height: 80px;
  width: 100%;
  max-width: 25%;
  min-width: 315px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const TextContainer = styled.p`
  height: 100%;
  width: 100%;
`;

export const Text = styled.p`
font-family: ${fonts.montserrat};
font-size: 1.3rem;
font-weight: 500;
color: ${theme.grey};
`;

export const IconContainer = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
height: 70px;
`;