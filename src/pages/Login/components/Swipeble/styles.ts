import { styled } from 'styled-components';
import theme from '../../../../assets/theme';
import fonts from '../../../../assets/fonts/fonts';

export const Container = styled.div<{ isLogin: boolean; }>`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: ${theme.lightBlue};
  height: 100%;
  position: absolute;
  z-index: 999;
  left: ${props => props.isLogin ? 0 : '50%'}; 
  right: ${props => !props.isLogin ? 0 : '50%'}; 
  transition: left 0.5s ease, right 0.5s ease; 
  border-radius: 20px;
`;
export const Content = styled.div`
  padding: 30px 40px;
`;

export const LogoContainer = styled.div`
  border-bottom: solid 6px ${theme.white};
  height: 40px;
  padding-bottom: 20px;
`;

export const Logo = styled.p`
  font-family: ${fonts.roboto};
  font-weight: 900;
  font-style: italic;
  font-size: 2.8rem;
  letter-spacing: -1px; 
`;

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  line-height: 4.5rem;
  letter-spacing: -.12rem;
  padding-top: 15%;
`;

export const Text = styled.p`
  font-family: ${fonts.roboto};
  color: ${theme.black};
  font-weight: 300;
`;

export const BoldedText = styled.p`
  font-family: ${fonts.roboto};
  font-weight: 600;
  font-style: italic;
  color: ${theme.white};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
`;

export const Image = styled.img`
  height: 100%;
`;