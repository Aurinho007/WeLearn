import { Profiler } from "react";
import { useTheme } from "../../Contexts/ThemeContext.tsx";
import * as themes  from "../../assets/theme.ts";
import { Container, NavConteiner, NavItem, NavSeparator, ProfileConteiner, Title } from "./styles.ts";

const Header = () => {

const { theme } = useTheme();
const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <Container theme={currentTheme}>
     <Title theme={currentTheme}>
        WeLearn 
      </Title>

      <NavConteiner>
        <NavItem> Home </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem> Salas </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem> Sobre </NavItem>
      </NavConteiner>

      <ProfileConteiner>
      </ProfileConteiner>
    </Container>
  );
};

export default Header;
