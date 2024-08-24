import { useState } from "react";
import { useToast } from "../../../../contexts/ToastContext";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../../../components/Buttons/TerciaryButton";
import { isValidEmail, isValidName, isValidPassword } from "../../utils";
import { createAccount } from "../../../../service/auth";
import { CreateAccountDto } from "../../../../dtos/auth";
import {
  Buttons,
  Container,
  Content,
  Divider,
  Division,
  DropDown,
  Form,
  Header,
  Item,
  Label,
  SubTitle,
  TextBtn,
  TextInput,
  Title,
} from "./styles";
import ErrorCard from "../../../../components/ErrorCard";


type CreateAccountCardProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateAccountCard = (props: CreateAccountCardProps) => {
  const { isLogin, setIsLogin } = props;
  const { showToast } = useToast();

  const changeCard = () => {
    setIsLogin(true);
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profileType, setProfileType] = useState<"Aluno" | "Professor">("Aluno");
  const [password, setPassword] = useState<string>("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeProfileType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProfileType(event.target.value as "Aluno" | "Professor");
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const succesCallback = () => {
    showToast("Conta criada com succeso!", "success");
    changeCard();
    clearInputs();
  };

  const errorCallback = (error: string) => {
    showToast(error, "error");
  };

  const validateForm = (): boolean => {
    if (!isValidName(name)) {
      showToast("Digite um nome válido", "error");
      return false;
    }

    if (!isValidEmail(email)) {
      showToast("Email inválido", "error");
      return false;
    }

    if (!isValidPassword(password)) {
      showToast("Senha inválida", "error");
      return false;
    }

    return true;

  };

  const clearInputs = (): void => {
    setEmail("");
    setPassword("");
    setName("");
    setProfileType("Aluno");
  };

  const handleClickCreateAccountButton = () => {

    if (!validateForm()) {
      return;
    }

    const newUser: CreateAccountDto = {
      email,
      nome: name,
      perfil: profileType,
      senha: password
    };

    createAccount(newUser, succesCallback, errorCallback);

  };



  return (
    <Container onKeyDown={(event) => event.key === "Enter" && !isLogin && handleClickCreateAccountButton()} tabIndex={0}>
      <Content>
        <Division>
          <Header>
            <Title>Criar Conta</Title>
            <SubTitle>Bem-vindo(a) ao WeLearn!</SubTitle>
          </Header>
        </Division>

        <Division>
          <Form>
            <Item>
              <Label>Nome</Label>
              <TextInput
                type="text"
                placeholder="  digite seu nome"
                value={name}
                onChange={handleChangeName}
              />
            </Item>
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
              <Label>Tipo de perfil</Label>
              <DropDown value={profileType} onChange={handleChangeProfileType}>
                <option value="aluno">Aluno</option>
                <option value="professor">Professor</option>
              </DropDown>
            </Item>
            <Item>
              <Label>Senha</Label>
              <TextInput
                type="password"
                placeholder="  crie sua senha"
                value={password}
                onChange={handleChangePassword}
              />
            </Item>
          </Form>
        </Division>

        <Division>
          <Buttons>
            <PrimaryButton text="Criar conta" onClick={handleClickCreateAccountButton} />
            <Divider />
            <TextBtn>Já possui uma conta?</TextBtn>
            <TerciaryButton
              text="Faça Login"
              Fsize={1.3}
              colored
              onClick={() => changeCard()}
            />
          </Buttons>
        </Division>
      </Content>
    </Container>
  );
};

export default CreateAccountCard;
