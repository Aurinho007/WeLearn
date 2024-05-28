import { useState } from "react";
import { useToast } from "../../../../contexts/ToastContext";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../../../components/Buttons/TerciaryButton";
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
import { createAccount } from "../../../../api";
import CreateAccountDto from "../../../../dtos/createAccount";
import { isValidEmail, isValidName, isValidPassword } from "../../utils";


type CreateAccountCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateAccountCard = (props: CreateAccountCardProps) => {
  const { setIsLogin } = props;
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
    showToast("Conta criada com succeso!", "succes");
    changeCard();
  }

  const errorCallback = (error: string) => {
    showToast(error, "error")
  }


  const handleClickCreateAccountButton = async () => {
    const newUser: CreateAccountDto = {
      email,
      nome: name,
      perfil: profileType,
      senha: password
    }

    await createAccount(newUser, succesCallback, errorCallback);

  };

  const validateForm = () => {

    if (!isValidName(name)){
      showToast("Digite um nome válido", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showToast("Email inválido", "error");
      return;
    } 

    if (!isValidPassword(password)){
      showToast("Senha inválida", "error");
      return;
    }

    handleClickCreateAccountButton();
  }

  return (
    <Container onKeyDown={(event) => event.key === 'Enter' && validateForm()} tabIndex={0}>
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
            <PrimaryButton text="Criar conta" onClick={validateForm} />
            <Divider />
            <TextBtn>Já possui uma conta?</TextBtn>
            <TerciaryButton
              text="Faça Login"
              Fsize={1.4}
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
