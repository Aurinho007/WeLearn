import { styled } from "styled-components";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border: solid 2px ${theme.blue};
  border-radius: 8px;
  padding: 8px 16px;
  width: 100%;
  min-width: 300px;
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
  text-align: left;
`;

export const Value = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 500;
  font-size: 1.3rem;
  text-align: right;
`;