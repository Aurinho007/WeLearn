import { useUser } from "../../contexts/UserContext.tsx";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles.ts";
import Logo from "../Logo/index.tsx";
import ProfileCard from "./components/ProfileCard/index.tsx";
import Nav from "./components/Nav/index.tsx";
import SecondaryButton from "../Buttons/SecondaryButton/index.tsx";
import ROUTES from "../../constants/routesConstants.ts";

const Header = () => {
  const navigate = useNavigate();
  const { isLogged } = useUser();

  return (
    <Container>
      <Logo />
      <Nav />
      {
        isLogged() ?
          <ProfileCard /> :
          <SecondaryButton
            Fsize={1.1}
            onClick={() => navigate(ROUTES.LOGIN)}
            text="Login"
            Ffamily="montserrat"
            Fweight={500}
            outside="blue"
          />
      }
    </Container>
  );
};

export default Header;
