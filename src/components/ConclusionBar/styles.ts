import { styled } from 'styled-components';
import theme from '../../assets/theme';
import fonts from '../../assets/fonts/fonts';

export const Bar = styled.div<{ height: number; }>`  margin-top: -17px;
  position: relative;
  margin: 15px 0;
  border: solid 2px ${theme.blue};
  border-radius: 6px;
  width: 100%;
  height: ${props => props.height}px;
`; 

export const FillBar = styled.div<{ conclusionPercent: number; }>`
  background-color: ${theme.blue};
  z-index: 0;
  width: ${props => props.conclusionPercent}%;
  height: 100%;
`;

export const PercentNumber = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.black};
  font-family: ${fonts.montserrat};
  font-weight: 500;
`;