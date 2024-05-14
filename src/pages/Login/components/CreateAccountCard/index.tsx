import { useState } from "react";
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
import { callCreateAccount } from "./utils";

type CreateAccountCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateAccountCard = (props: CreateAccountCardProps) => {
  const { setIsLogin } = props;

  const changeCard = () => {
    setIsLogin(true);
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profileType, setProfileType] = useState<"Aluno" | "Professor">(
    "Aluno"
  );
  const [password, setPassword] = useState<string>("");

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleChangeProfileType = (event: any) => {
    setProfileType(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
      const data = await callCreateAccount(name, email, profileType, password);

      if(data.error){
        alert(data.error);
      } else{
        changeCard()
      }
    }

  return (
    <Container>
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
            <PrimaryButton text="Criar conta" onClick={() => handleClick()} />
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
