import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const MainView = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 70px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const MainPhrase = styled.span`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 4.5rem;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 3rem;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: 1px;
  }
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

  @media (max-width: 768px) {
    justify-content: center;
    padding-bottom: 15px;
    border-bottom: solid 3px ${theme.blue};
  }
`;

export const Image = styled.img`
  height: 360px;
  margin: 0 150px;

  @media (max-width: 768px) {
    height: 280px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;
