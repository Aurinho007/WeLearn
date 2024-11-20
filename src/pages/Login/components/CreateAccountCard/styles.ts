import { styled } from "styled-components";
import theme from "../../../../assets/theme";
import Fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0;


  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 480px) {
    padding: 30px 30px; 
  }
`;

export const Division = styled.div`
  flex-grow: 1;
`;

export const Header = styled.div`
`;

export const Title = styled.p`
  font-family: ${Fonts.poppins};
  font-weight: 600;
  font-size: 1.7rem;
  letter-spacing: -1px;
`;

export const SubTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1.2rem;
  color: ${theme.grey};
  line-height: 30px;
  margin-bottom: 20px;
`;

export const Form = styled.div`
`;

export const Item = styled.div`
  height: 80px;
`;

export const Label = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1rem;
  line-height: 30px;
`;

export const TextInput = styled.input`
  width: 100%;
  background-color: transparent;
  height: 2rem;
  border: solid 2px ${theme.black};
  border-radius: 10px;
  font-family: ${Fonts.montserrat};
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem
  }
`;

export const DropDown = styled.select`
  width: 100%;
  background-color: transparent;
  height: 2.3rem;
  border: solid 2px ${theme.black};
  border-radius: 10px;
  font-family: ${Fonts.montserrat};
  font-size: 1rem;
  color: ${theme.black};
`;

export const PasswordLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: end;
`;

export const RememberMe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

export const RememberMeLabel = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  color: ${theme.grey};
  font-size: 1.2rem;
    cursor: pointer;
`;

export const Buttons = styled.div`
  height: 100%;
  text-align: center;
  margin-top: 40px;
`;

export const Divider = styled.div`
  height: 30px;
`;

export const TextBtn = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1.1rem;
  color: ${theme.grey};
`;