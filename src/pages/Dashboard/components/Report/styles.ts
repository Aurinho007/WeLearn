import styled from "styled-components";
import Fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div`
  position: relative;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  font-family: ${Fonts.montserrat};
  font-weight: 400;
  padding: 8px;
  line-height: 20px;
  text-align: left;
  position: absolute;

`;

export const InvisibleText = styled.p`
  font-size: 1.1rem;
  font-family: ${Fonts.montserrat};
  font-weight: 400;
  padding: 8px;
  line-height: 20px;
  text-align: left;
  color: transparent;
`;