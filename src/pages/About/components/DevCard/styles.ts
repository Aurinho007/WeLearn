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
  width: 120px;
  height: 180px;
  background-color: ${theme.lightWhite};
`;

export const Container = styled.div`
  width: 110px;
  margin: 0 40px;
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
