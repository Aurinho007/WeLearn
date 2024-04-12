import { styled } from 'styled-components';
import ISecondaryButton from './interface';
import fonts from '../../../assets/fonts/fonts';
import theme from '../../../assets/theme';

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{style: ISecondaryButton}>`
  border-radius: 10px;
  background-color: transparent;
  border: solid 3px ${props => theme[props.style.outside]};

  &:active{
    filter: brightness(0.8);
  }
`;

export const Text = styled.p<{style: ISecondaryButton}>`
  color: ${theme.black};
  font-family: ${props => fonts[props.style.Ffamily]};
  font-weight: ${props => props.style.Fweight};
  font-size: ${props => props.style.Fsize}rem;
  padding: 6px 25px;
`;