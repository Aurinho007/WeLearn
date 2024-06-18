import styled from "styled-components";
import Fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const CardFront = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.25);
  justify-content: center;
  align-items: center;
  text-align: center;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  width: 120px;
  height: 180px;
  background-color: ${theme.lightWhite};

`;

export const CardBack = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.25);
  background-color: white;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  position: absolute;
  width: 120px;
  height: 180px;
  background-color: ${theme.lightWhite};
`;

export const Container = styled.div`
  perspective: 1000px;
  width: 110px;
  margin: 0 40px;
  
  &:hover ${CardFront} {
    transform: rotateY(180deg);
  }

  &:hover ${CardBack} {
    transform: rotateY(0deg);
  }
`;

export const Img = styled.img`
  height: 100px;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Desc = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 700;
  color: ${theme.grey};
  margin-bottom: 15px;
`;

export const Link = styled.a`
  font-family: ${Fonts.montserrat};
  font-weight: 700;
  color: ${theme.blue};
  text-decoration: none;
  line-height: 30px;

  &:hover {
    text-decoration: underline;
  }
`;
