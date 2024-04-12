import { Container } from "./styles.ts";
import Logo from "../Logo/index.tsx";
import ProfileCard from "./components/ProfileCard/index.tsx";
import Nav from "./components/Nav/index.tsx";

const Header = () => {
  return (
    <Container>
      <Logo />
      <Nav />
      <ProfileCard />
    </Container>
  );
};

export default Header;
