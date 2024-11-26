import { useEffect, useState } from "react";
import { useToast } from "../../../../contexts/ToastContext";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../../../components/Buttons/TerciaryButton";
import { isValidEmail, isValidName, isValidProfileType } from "../../utils";
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
import { useParams } from "react-router-dom";


type CreateAccountCardProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateAccountCard = (props: CreateAccountCardProps) => {
  const { isLogin, setIsLogin } = props;
  const { showToast } = useToast();
  const { create } = useParams();

  const changeCard = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    if (create) {
      setIsLogin(false);
    }
  }, []);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profileType, setProfileType] = useState<"Aluno" | "Professor" | undefined>();
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
      showToast("Digite um nome válido", "info");
      return false;
    }

    if (!isValidEmail(email)) {
      showToast("Digite um e-mail válido", "info");
      return false;
    }

    if (!isValidProfileType(profileType)) {
      showToast("Selecione um tipo de usuário (Professor ou Aluno)", "info");
      return false;
    }

    if (password.length < 6){
      showToast("A senha deve conter pelo menos seis dígitos", "info");
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
              <Label>Nome completo</Label>
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
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
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
            <PrimaryButton text="Criar Conta" onClick={handleClickCreateAccountButton} />
            <Divider />
            <TextBtn>Já possui uma conta?</TextBtn>
            <TerciaryButton
              text="Faça login"
              Fsize={1.1}
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
