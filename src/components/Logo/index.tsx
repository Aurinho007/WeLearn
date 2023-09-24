import { useTheme } from "../../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../../assets/theme.ts";
import { Title } from "./styles.ts";

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
