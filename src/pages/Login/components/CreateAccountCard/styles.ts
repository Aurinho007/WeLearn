import { styled } from 'styled-components';
import theme from '../../../../assets/theme';
import Fonts from '../../../../assets/fonts/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
`;

export const Content = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Division = styled.div`
  flex-grow: 1;
`;

export const Header = styled.div`
`;

export const Title = styled.p`
  font-family: ${Fonts.roboto};
  font-weight: 600;
  font-size: 3.5rem;
  letter-spacing: -1px;
`;

export const SubTitle = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 2rem;
  color: ${theme.grey};
  line-height: 50px;
`;

export const Form = styled.div`
`;

export const Item = styled.div`
  height: 150px;
`;

export const Label = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 2rem;
  line-height: 55px;
`;

export const TextInput = styled.input`
  width: 100%;
  background-color: transparent;
  height: 3.5rem;
  border: solid 5px ${theme.black};
  border-radius: 10px;
  font-family: ${Fonts.montserrat};
  font-size: 1.6rem;
`;

export const PasswordLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: end;
`;

export const ForgetPassword = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  color: ${theme.blue};
  font-size: 1.5rem;
  line-height: 40px;

  &:hover {
    text-decoration: underline;
    }
`;

export const RememberMe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const RememberMeLabel = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  color: ${theme.grey};
  font-size: 1.5rem;
    cursor: pointer;
`;

export const Buttons = styled.div`
  height: 100%;
  text-align: center;
`;

export const Divider = styled.div`
  height: 30px;
`;

export const TextBtn = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 2rem;
  color: ${theme.grey};
`;


