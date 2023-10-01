import { useTheme } from "../../Contexts/ThemeContext.js";
import { lightTheme, darkTheme } from "../../assets/theme.js";
import { Container } from "./styles.js";
import Logo from "../Logo/index.js";


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
