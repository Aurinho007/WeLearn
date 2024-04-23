import { styled } from 'styled-components';
import fonts from '../../../../assets/fonts/fonts';
import theme from '../../../../assets/theme';

export const Card = styled.div`
margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border: solid 3px ${theme.blue};
  border-radius: 8px;
  padding: 5px 16px;
  width: 20%;
  color: ${theme.black};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
`;

export const Description = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 300;
  font-size: 1.3rem;
`;

export const Value = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 500;
  font-size: 1.3rem;
`;