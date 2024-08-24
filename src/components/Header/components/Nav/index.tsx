import {
  NavConteiner,
  NavItem,
  NavSeparator
} from "./styles.ts";

const Nav = () => {
  return (
    <NavConteiner>
      <NavItem to="/"> Home </NavItem>
      <NavSeparator> • </NavSeparator>
      <NavItem to="/salas"> Salas </NavItem>
      <NavSeparator> • </NavSeparator>
      <NavItem to="/sobre"> Sobre </NavItem>
    </NavConteiner>
  );
};

export default Nav;