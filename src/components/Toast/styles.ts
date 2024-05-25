import { keyframes, styled } from 'styled-components';
import Fonts from '../../assets/fonts/fonts';
import theme from '../../assets/theme';

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 0; 
  left: 0;
  justify-content: center;
  z-index: 9999;
  margin-top: 10px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100px);
  }
`;

export const Card = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.white};
  border: solid 2px ${theme.black};
  padding: 16px 26px 16px 12px;
  background-color: ${props => theme.toats[props.color]};

  &.enter {
    animation: ${fadeIn} 1s forwards;
  }

  &.exit {
    animation: ${fadeOut} 15s forwards;
  }
`;


export const Icon = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const Content = styled.div`

`;

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

