import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../../../components/Buttons/TerciaryButton";
import {
  Buttons,
  CheckBox,
  Container,
  Content,
  Division,
  Form,
  Header,
  Item,
  Label,
  RememberMe,
  RememberMeLabel,
  SubTitle,
  TextInput,
  Title,
} from "./styles";

type CreateAccountCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateAccountCard = (props: CreateAccountCardProps) => {
  const { setIsLogin } = props

  const changeCard = () => {
    setIsLogin(true);
  }

  return (
    <Container>
      <Content>
        <Division>
          <Header>
            <Title>Criar Conta</Title>
            <SubTitle>Bem-vindo(a) so WeLearn!</SubTitle>
          </Header>
        </Division>

        <Division>
          <Form>
          <Item>
              <Label>Nome</Label>
              <TextInput type="text" placeholder="  digite seu nome" />
            </Item>
            <Item>
              <Label>E-mail</Label>
              <TextInput type="text" placeholder="  nome@exemplo.com" />
            </Item>
            <Item>
                <Label>Senha</Label>
              <TextInput type="password" placeholder="  crie sua senha" />
            </Item>
            <RememberMe>
              <CheckBox type="checkbox" />
              <RememberMeLabel>Lembrar de mim</RememberMeLabel>
            </RememberMe>
          </Form>
        </Division>

        <Division>
          <Buttons>
            <PrimaryButton text="Criar conta" onClick={() => alert("")} />
            <SubTitle>Já possui uma conta?</SubTitle>
            <TerciaryButton
              text="Faça Login"
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

export default CreateAccountCard;
