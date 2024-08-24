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
import { LoginDto } from "../../../../dtos/auth";
import { login } from "../../../../service/auth";
import { isValidEmail } from "../../utils";
import { deleteUserLoginData, getUserLoginData, saveUserLoginData } from "../../../../controllers/userController";

type LoginCardProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginCard = (props: LoginCardProps) => {
  const { isLogin, setIsLogin } = props;
  const navigate = useNavigate();
  const { isLogged, setUser } = useUser();
  const { showToast } = useToast();
  const savedUser = getUserLoginData();
  const [email, setEmail] = useState<string>(savedUser?.email ?? "");
  const [password, setPassword] = useState<string>(savedUser?.password ?? "");
  const [saveUser, setSaveUser] = useState<boolean>(!!savedUser);

  useEffect(() => {
    if (isLogged()) {
      navigate("/");
    }
  });

  const changeCard = () => {
    setIsLogin(false);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaveUser(event.target.checked);
  };

  const setRememberMe = () => {
    if (!saveUser) {
      deleteUserLoginData();
      return;
    }

    saveUserLoginData(email, password);
  };

  const clearInputs = (): void => {
    setEmail("");
    setPassword("");
  };

  const succesCallback = (user: IUser) => {
    setUser(user);
    setRememberMe();
    clearInputs();
    navigate("/");
    showToast("Login feito com succeso!", "success");
  };

  const errorCallback = (error: string) => {
    showToast(error, "error");
  };

  const validateForm = (): boolean => {
    if (email.length === 0) {
      showToast("Digite seu email", "error");
      return false;
    }

    if (!isValidEmail(email)) {
      showToast("Email inválido", "error");
      return false;
    }

    if (password.length === 0) {
      showToast("Digite sua senha", "error");
      return false;
    }

    return true;

  };

  const handleClickLoginButton = async () => {
    if(!validateForm()){
      return;
    }

    const user: LoginDto = {
      email,
      senha: password
    };

    await login(user, succesCallback, errorCallback);
  };

  return (
    <Container onKeyDown={(event) => event.key === "Enter" && isLogin && handleClickLoginButton()} tabIndex={0}>
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
              <CheckBox
                type="checkbox"
                checked={saveUser}
                onChange={handleCheckboxChange}
              />
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
              Fsize={1.3}
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
