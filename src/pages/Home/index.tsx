import HomeCardList from "./components/HomeCardList";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext.tsx";
import { Bolded, LeftContentContainer, MainPhrase, MainView, Image, NavContainer } from "./styles";
import studingGirl from "../../assets/images/studing-girl.svg";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import TerciaryButton from "../../components/Buttons/TerciaryButton";
import ROUTES from "../../constants/routesConstants.ts";

const Home = () => {
  const navigate = useNavigate();
  const { isLogged } = useUser();

  const renderIsLoggedButton = () => {
    if (isLogged()) {
      return (
        <SecondaryButton
          Fsize={1.1}
          onClick={() => navigate(ROUTES.MY_CLASSROOMS)}
          text="Minhas Salas"
          Ffamily="montserrat"
          Fweight={500}
          outside="blue"
        />
      );
    } else {
      return (
        <SecondaryButton
          Fsize={1.1}
          onClick={() => navigate(ROUTES.LOGIN)}
          text="Login"
          Ffamily="montserrat"
          Fweight={500}
          outside="blue"
        />
      );
    }

  };

  return (
    <>
      <MainView>
        <LeftContentContainer>
          <MainPhrase>
            O Futuro da<br></br><Bolded>Educação</Bolded> Começa<br></br>Aqui!
          </MainPhrase>
          <NavContainer>
            {renderIsLoggedButton()}
            <TerciaryButton
              Fsize={1.1}
              onClick={() => navigate(ROUTES.ABOUT)}
              colored={false}
              text="Saiba Mais"
            />
          </NavContainer>
        </LeftContentContainer>
        <Image src={studingGirl} />
      </MainView>
      <HomeCardList />
    </>
  );
};

export default Home;
