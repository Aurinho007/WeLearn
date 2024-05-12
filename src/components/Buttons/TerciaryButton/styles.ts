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
  border: none;
  background-color: transparent;

  &:active{
    filter: brightness(0.8);
  }

`;

export const Text = styled.p<{style: ISecondaryButton}>`
  color: ${theme.black};
  font-family: ${props => props.style.colored ? fonts.roboto : fonts.montserrat};
  font-weight: ${props => props.style.colored ? 600 : 300};
  color: ${props => props.style.colored ? theme.blue : theme.black};
  font-size: ${props => props.style.Fsize}rem;
  padding: 6px 25px;
`;