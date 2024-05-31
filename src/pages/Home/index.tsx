import HomeCardList from "./components/HomeCardList";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext.tsx";
import { Bolded, LeftContentContainer, MainPhrase, MainView, Image, NavContainer } from "./styles";
import studingGirl from '../../assets/images/studing-girl.svg';
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import TerciaryButton from "../../components/Buttons/TerciaryButton";

const Home = () => {
  const navigation = useNavigate();
  const { isLogged } = useUser();

  return (
    <>
      <MainView>
        <LeftContentContainer>
          <MainPhrase>
            O Futuro da<br></br><Bolded>Educação</Bolded> Começa<br></br>Aqui!
          </MainPhrase>
          <NavContainer>
            {isLogged() ?
              <SecondaryButton
                Fsize={1.1}
                onClick={() => navigation("/salas")}
                text="Minhas Salas"
                Ffamily="montserrat"
                Fweight={500}
                outside="blue"
              /> :
              <SecondaryButton
                Fsize={1.1}
                onClick={() => navigation("/login")}
                text="Login"
                Ffamily="montserrat"
                Fweight={500}
                outside="blue"
              />
            }
            <TerciaryButton
              Fsize={1.1}
              onClick={() => navigation("/sobre")}
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
