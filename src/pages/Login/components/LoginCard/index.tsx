import { useState } from "react";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../../../components/Buttons/TerciaryButton";
import {
  Buttons,
  CheckBox,
  Container,
  Content,
  Divider,
  Division,
  ForgetPassword,
  Form,
  Header,
  Item,
  Label,
  PasswordLabelContainer,
  RememberMe,
  RememberMeLabel,
  SubTitle,
  TextBtn,
  TextInput,
  Title,
} from "./styles";
import { callLogin } from "./utils";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../contexts/userContext";
import { saveToken } from "../../../../localStorageControllers/tokenController";
import { IUser } from "../../../../interfaces/User";

type LoginCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginCard = (props: LoginCardProps) => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const { setIsLogin } = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeCard = () => {
    setIsLogin(false);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickLoginButton  = async () => {
    try{
      const response: IUser = await callLogin(email, password);
      setUser(response);
      saveToken(response.token);
    } catch(e){
      return
    }
    navigate("/salas");
  }

  return (
    <Container>
      <Content>
        <Division>
          <Header>
            <Title>Login</Title>
            <SubTitle>Bem-vindo(a) de volta!</SubTitle>
          </Header>
        </Division>

        <Division>
          <Form>
            <Item>
              <Label>E-mail</Label>
              <TextInput
                type="text"
                placeholder="  nome@exemplo.com"
                value={email}
                onChange={handleChangeEmail}
              />
            </Item>
            <Item>
              <PasswordLabelContainer>
                <Label>Senha</Label>
                <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
              </PasswordLabelContainer>
              <TextInput
                type="password"
                placeholder="  digite sua senha"
                value={password}
                onChange={handleChangePassword}
              />
            </Item>
            <RememberMe>
              <CheckBox type="checkbox" />
              <RememberMeLabel>Lembrar de mim</RememberMeLabel>
            </RememberMe>
          </Form>
        </Division>

        <Division>
          <Buttons>
            <PrimaryButton text="Entrar" onClick={handleClickLoginButton} />
            <Divider />
            <TextBtn>Não possui uma conta?</TextBtn>
            <TerciaryButton
              text="Criar conta"
              Fsize={1.4}
              colored
              onClick={changeCard}
            />
          </Buttons>
        </Division>
      </Content>
    </Container>
  );
};

export default LoginCard;
