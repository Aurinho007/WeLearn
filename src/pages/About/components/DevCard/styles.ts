import styled from "styled-components";
import Fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.25);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px;
  width: 110px;
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