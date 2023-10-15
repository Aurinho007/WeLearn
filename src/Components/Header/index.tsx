import { useTheme } from "../../Contexts/ThemeContext.tsx";
import * as themes  from "../../assets/theme.ts";
import { Container } from "./styles.ts";
import Logo from "../Logo/index.tsx";

const Header = () => {

const { theme } = useTheme();
const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <Container theme={currentTheme}>
     <Logo />
    </Container>
  );
};

export default Header;
