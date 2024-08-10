import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0 60px 0;
  position: relative;
`;

export const Title = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 2.5rem;
`;

export const BackButton = styled.img`
  position: absolute;
  margin-top: 5px;
  top: 0;
  left: 0;
  height: 40px;
`;