import ROUTES from "../../../../constants/routesConstants.ts";
import {
  NavConteiner,
  NavItem,
  NavSeparator
} from "./styles.ts";

const Nav = () => {
  return (
    <NavConteiner>
      <NavItem to={ROUTES.HOME}> Home </NavItem>
      <NavSeparator> • </NavSeparator>
      <NavItem to={ROUTES.MY_CLASSROOMS}> Salas </NavItem>
      <NavSeparator> • </NavSeparator>
      <NavItem to={ROUTES.ABOUT}> Sobre </NavItem>
    </NavConteiner>
  );
};

export default Nav;