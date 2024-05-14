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

type LoginCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginCard = (props: LoginCardProps) => {
  const navigate = useNavigate();

  const { setIsLogin } = props;

  const [email, setEmail] = useState<string>('aureo@gmail.com');
  const [password, setPassword] = useState<string>('1234');

  const changeCard = () => {
    setIsLogin(false);
  };

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleClick  = async () => {
    const data = await callLogin(email, password);

    if(data.token){ 
      navigate("/salas");
    } else {
      alert("Erro: " + data.error)
    }

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
            <PrimaryButton text="Entrar" onClick={() => handleClick()} />
            <Divider />
            <TextBtn>Não possui uma conta?</TextBtn>
            <TerciaryButton
              text="Criar conta"
              Fsize={2}
              colored
              onClick={() => changeCard()}
            />
          </Buttons>
        </Division>
      </Content>
    </Container>
  );
};

export default LoginCard;
