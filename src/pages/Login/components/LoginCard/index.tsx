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

type LoginCardProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginCard = (props: LoginCardProps) => {
  const { setIsLogin } = props

  const changeCard = () => {
    setIsLogin(false);
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
              <TextInput type="text" placeholder="  nome@exemplo.com" />
            </Item>
            <Item>
              <PasswordLabelContainer>
                <Label>Senha</Label>
                <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
              </PasswordLabelContainer>
              <TextInput type="password" placeholder="  digite sua senha" />
            </Item>
            <RememberMe>
              <CheckBox type="checkbox" />
              <RememberMeLabel>Lembrar de mim</RememberMeLabel>
            </RememberMe>
          </Form>
        </Division>

        <Division>
          <Buttons>
            <PrimaryButton text="Entrar" onClick={() => alert("")} />
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
