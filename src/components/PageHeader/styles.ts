import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0 60px 0;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p<{hasBackButton: boolean}>`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-top: ${props => props.hasBackButton ? "20px" : "0px"};
  }
`;

export const SubTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 12px;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const BackButton = styled.img`
  position: absolute;
  margin-top: 5px;
  top: 0;
  left: 0;
  height: 40px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 25px;
  }
`;