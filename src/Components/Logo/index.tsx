import { useTheme } from "../../Contexts/ThemeContext.js";
import { lightTheme, darkTheme } from "../../assets/theme.js";
import { Title } from "./styles.js";

const Header = () => {

  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
      <Title theme={currentTheme}>
        WeLearn
      </Title>
      
  );
};

export default Header;
