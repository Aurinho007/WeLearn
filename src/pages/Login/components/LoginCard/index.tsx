import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../contexts/UserContext";
import { useToast } from "../../../../contexts/ToastContext";
import { IUser } from "../../../../interfaces/User";
import loginDto from "../../../../dtos/login";
import { login } from "../../../../api";
import { isValidEmail } from "../../utils";

type LoginCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginCard = (props: LoginCardProps) => {
  const navigate = useNavigate();
  const { isLogged, setUser } = useUser();
  const { showToast } = useToast();
  const { setIsLogin } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if(isLogged()){
      navigate("/");
    }

  }, [])


  const changeCard = () => {
    setIsLogin(false);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const succesCallback = (user: IUser) => {
    setUser(user);
    navigate("/");
    showToast("Login feito com succeso!", "success");
  }

  const errorCallback = (error: string) => {
    showToast(error, "error");
  }

  const handleClickLoginButton = async () => {
    const user: loginDto = {
      email,
      senha: password
    }

    await login(user, succesCallback, errorCallback);

  }

  const validateForm = () => {
    if (email.length === 0) {
      showToast("Digite seu email", "error")
      return
    }

    if (!isValidEmail(email)) {
      showToast("Email inválido", "error")
      return
    }

    if(password.length === 0){
      showToast("Digite sua senha", "error")
      return
    }

    handleClickLoginButton()
  }

  return (
    <Container onKeyDown={(event) => event.key === 'Enter' && validateForm()} tabIndex={0}>
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
            <PrimaryButton text="Entrar" onClick={validateForm} />
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
