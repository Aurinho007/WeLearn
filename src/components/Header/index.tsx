import { useUser } from "../../contexts/userContext.tsx";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles.ts";
import Logo from "../Logo/index.tsx";
import ProfileCard from "./components/ProfileCard/index.tsx";
import Nav from "./components/Nav/index.tsx";
import TerciaryButton from "../Buttons/TerciaryButton/index.tsx";
import SecondaryButton from "../Buttons/SecondaryButton/index.tsx";

const Header = () => {
  const navigation = useNavigate();
  const { isLoged } = useUser();

  return (
    <Container>
      <Logo />
      <Nav />
      {
        isLoged() ?
          <ProfileCard /> :
          <SecondaryButton
            Fsize={1.1}
            onClick={() => navigation('login')}
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
