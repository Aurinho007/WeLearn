import { Container, NavConteiner, NavItem, NavSeparator } from './styles.ts';
import Logo from '../Logo/index.tsx';
import ProfileCard from './components/ProfileCard/index.tsx';

const Header = () => {

  return (
    <Container >
     <Logo />

      <NavConteiner>
        <NavItem to="/"> Home </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem to="/salas"> Salas </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem to="/sobre"> Sobre </NavItem>
      </NavConteiner>
      
     <ProfileCard />
    </Container>
  );
};

export default Header;
