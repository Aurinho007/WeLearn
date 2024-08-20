import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { Container, Card, ProfileImg, UserDataContainer, UserName, UserEmail, LineData, LineLabel, LineValue, T, ButtonContainer } from "./styles";
import defaultProfilePic from '../../assets/images/default-profile-pic.svg'
import TerciaryButton from "../../components/Buttons/TerciaryButton";

const Profile = () => {
  const { user, logout} = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handeButtonClick = (): void => {
      logout();
      navigate("/login");
      showToast('Usuário desconectado', 'info');
  }

  return (
    <Container>
      <Card>
        <PageHeader title="Meu Perfil" />
        <ProfileImg src={defaultProfilePic} />
        <UserDataContainer>
          <UserName>{user.nome}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserDataContainer>
        <LineData>
          <LineLabel>WeCoins</LineLabel>
          <LineValue>{user.weCoin}</LineValue>
        </LineData>
        <LineData>
          <LineLabel>Experiência</LineLabel>
          <LineValue>{user.xp}<T>xp</T></LineValue>
        </LineData>
        <LineData>
          <LineLabel>Tipo de perfil</LineLabel>
          <LineValue>{user.perfil}</LineValue>
        </LineData>
        <ButtonContainer>
          <TerciaryButton
            Fsize={1.3}
            colored={false}
            onClick={handeButtonClick}
            text="Sair"
          />
        </ButtonContainer>

      </Card>
    </Container>
  );

}

export default Profile;