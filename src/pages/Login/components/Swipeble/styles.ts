import { styled } from "styled-components";
import theme from "../../../../assets/theme";
import fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div<{ isLogin: boolean}>`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: ${theme.lightBlue};
  height: 100%;
  position: absolute;
  border-radius: 20px;
  z-index: 999;
  left: ${props => props.isLogin ? 0 : "50%"}; 
  right: ${props => !props.isLogin ? 0 : "50%"}; 
  transition: left 1s ease, right 1s ease; 
`;
export const Content = styled.div`
  padding: 30px 40px;
`;

export const LogoContainer = styled.div`
  border-bottom: solid 6px ${theme.white};
  height: 30px;
  padding-bottom: 20px;
`;

export const Logo = styled.p`
  font-family: ${fonts.roboto};
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
  letter-spacing: -1px; 
`;

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3.4rem;
  line-height: 4rem;
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