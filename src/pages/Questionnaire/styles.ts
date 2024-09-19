import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
`;

export const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-family: ${Fonts.roboto};
  font-weight: 500;
  font-size: 2rem;
`;


export const TableContainer = styled.div`
  background-color: ${theme.white};
  border: solid 2px ${theme.blue};
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 0;
  align-items: center;
`;

export const HeaderItem = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1;
  text-align: center;
`;

export const Separator = styled.div`
  border: solid 2px ${theme.blue};
  margin: 10px 0;
`;

export const Line = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 15px 0;
  align-items: center;
`;

export const Item = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
`;
