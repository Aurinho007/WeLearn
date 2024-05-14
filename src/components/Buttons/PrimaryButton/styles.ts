import { styled } from 'styled-components';
import fonts from '../../../assets/fonts/fonts';
import theme from '../../../assets/theme';
import IButton from './interface';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{style: IButton}>`
  width: 100%;
  height: 3.5rem;
  font-family: ${fonts.roboto};
  font-weight: 600;
  font-size: 1.7rem;
  color: ${theme.white};
  border-radius: 8px;
  border: none;
  background-color: ${theme.blue};

  &:active{
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  padding: 8px 0;
`;