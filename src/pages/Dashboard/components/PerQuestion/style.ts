import styled from "styled-components";
import theme from "../../../../assets/theme";
import Fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div`
  max-width: 780px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -25px;
  align-items: flex-end;
`;

export const Title = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Drop = styled.select`
  border: none;
  outline: none;
  background: none;
  box-shadow: none;
  border: solid 2px ${theme.blue};
  font-size: 1.2rem;
  font-family: ${Fonts.montserrat};
  border-radius: 8px;
  padding: 2px;
`;

export const Dash = styled.div`
  background-color: ${theme.white};
  border: solid 3px ${theme.blue};
  border-radius: 8px;
  padding: 10px;
`;

export const DataContainer = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Value = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Label = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: .8rem;
  font-weight: 400;
  width: 80px;
`;

export const BtnContainer = styled.div`
  margin-top: 20px;
`;
