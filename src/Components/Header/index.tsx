import { useTheme } from "../../Contexts/ThemeContext.tsx";
import { lightTheme, darkTheme } from "../../assets/theme.ts";
import { Container } from "./styles.ts";
import Logo from "../Logo/index.tsx";


const Header = () => {

const { theme } = useTheme();
const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Container theme={currentTheme}>
     <Logo/>
    </Container>
  );
};

export default Header;
