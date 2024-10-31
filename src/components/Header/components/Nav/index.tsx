import { useState, useEffect, useRef } from "react";
import ROUTES from "../../../../constants/routesConstants.ts";
import {
  NavContainer,
  NavItem,
  NavSeparator,
  HamburgerIcon,
  MobileMenu
} from "./styles.ts";
import { useUser } from "../../../../contexts/UserContext.tsx";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Define o tipo de `menuRef` como HTMLDivElement

  const { isLogged, isMobile } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NavContainer>
      <HamburgerIcon onClick={toggleMenu}>
        &#9776;
      </HamburgerIcon>
      <MobileMenu ref={menuRef} isOpen={isMenuOpen}>
        <NavItem onClick={() => setIsMenuOpen(false)} to={ROUTES.HOME}> Home </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem onClick={() => setIsMenuOpen(false)} to={ROUTES.MY_CLASSROOMS}> Salas </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem onClick={() => setIsMenuOpen(false)} to={ROUTES.ABOUT}> Sobre </NavItem>
        {isMobile && (
          <>
            <NavItem onClick={() => setIsMenuOpen(false)} to={isLogged() ? ROUTES.PROFILE : ROUTES.LOGIN}>
              {isLogged() ? "Meu perfil" : "Entrar"}
            </NavItem>
          </>
        )}
      </MobileMenu>
    </NavContainer>
  );
};

export default Nav;
