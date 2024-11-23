import styled from "styled-components";
import theme from "../../assets/theme";
import Fonts from "../../assets/fonts/fonts";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100svw;
  height: 100svh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 999;
`;

export const Modal = styled.div`
  padding: 20px;
  width: 80%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  margin-top: -15svh;
  background-color: ${theme.lightWhite};
  border-radius: 12px;
  border: solid ${theme.blue} 4px;
`;

export const Title = styled.p`
  font-family: ${Fonts.poppins};
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SubTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.grey};
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  height: 1.8rem;
  border: solid 2px ${theme.black};
  border-radius: 5px;
  font-family: ${Fonts.montserrat};
  font-size: 1rem;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 1rem
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const ConfirmBtn = styled.button`
  font-family: ${Fonts.poppins};
  font-weight: 500;
  font-size: 1.2rem;
  color: ${theme.white};
  border-radius: 8px;
  border: none;
  background-color: ${theme.blue};
  cursor: pointer;
  padding: 3px 20px;
  min-width: 150px;


  &:active {
    filter: brightness(0.9);
  }
`;

export const CancelBtn = styled.button`
  border-radius: 6px;
  background-color: transparent;
  border: solid 2.8px ${theme.blue};
  cursor: pointer;
  color: ${theme.black};
  font-family: ${Fonts.poppins};
  font-weight: 500;
  font-size: 1rem;
  white-space: nowrap;
  padding: 3px 20px;
  min-width: 150px;



  &:active{
    filter: brightness(0.8);
  }
`;