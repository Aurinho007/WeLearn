import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const MainView = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-top: 70px;

  @media (max-width: 810px) {
    padding-top: 30px;
  }
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 810px) {
    width: 100%;
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
  text-align: left;

  @media (max-width: 850px) {
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 2px;
  };

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: 1px;
  };
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

  @media (max-width: 850px) {
    margin-top: 2rem;
  }

  @media (min-width: 810px){
    margin-top: -80px;
    border-bottom: solid 4px ${theme.blue};
    width: 50%
  };
`;

export const Image = styled.img`
  height: 360px;
  margin: 0 150px;

  @media (max-width: 850px) {
    height: 280px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    height: 130px;
  }
`;
