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
  z-index: 99;
  left: ${props => props.isLogin ? 0 : "50%"}; 
  right: ${props => !props.isLogin ? 0 : "50%"}; 
  transition: left 1s ease, right 1s ease; 
`;
export const Content = styled.div`
  padding: 30px 40px;
`;

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: -.12rem;
  padding-top: 15%;
`;

export const Text = styled.p`
  font-family: ${fonts.poppins};
  color: ${theme.black};
  font-weight: 400;
`;

export const BoldedText = styled.p`
  font-family: ${fonts.poppins};
  font-weight: 600;
  /* font-style: italic; */
  color: ${theme.white};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

export const Image = styled.img`
  height: 100%;
`;