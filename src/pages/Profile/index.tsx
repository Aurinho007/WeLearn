import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { Container, ProfileImg, UserDataContainer, UserName, UserEmail, LineData, LineLabel, LineValue, T, ButtonContainer } from "./styles";
import defaultProfilePic from "../../assets/images/default-profile-pic.svg";
import TerciaryButton from "../../components/Buttons/TerciaryButton";
import ROUTES from "../../constants/routesConstants";

const Profile = () => {
  const { user, logout, isStudent } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handeButtonClick = (): void => {
    logout();
    navigate(ROUTES.LOGIN);
    showToast("Usuário desconectado", "info");
  };

  return (
    <>
      <PageHeader title="Meu Perfil" hasBackButton />
      <Container>
        <ProfileImg src={defaultProfilePic} />
        <UserDataContainer>
          <UserName>{user.nome}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserDataContainer>
        {
          isStudent() &&
          <>
            <LineData>
              <LineLabel>WeCoins</LineLabel>
              <LineValue>{user.weCoin}</LineValue>
            </LineData>
            <LineData>
              <LineLabel>Experiência</LineLabel>
              <LineValue>{user.xp}<T>xp</T></LineValue>
            </LineData>
          </>
        }
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

      </Container>
    </>

  );

};

export default Profile;