import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const MainView = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 70px 0;
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;
`;

export const MainPhrase = styled.span`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 4.5rem;
  letter-spacing: 3px;
`;

export const Bolded = styled.span`
  color: ${theme.blue};
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  padding-bottom: 25px;
  border-bottom: solid 5px ${theme.blue};
`;


export const Image = styled.img`
  height: 360px;
  margin: 0 150px;
`;