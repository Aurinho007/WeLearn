import { useTheme } from "../../Contexts/ThemeContext.tsx";
import * as themes  from "../../assets/theme.ts";
import { Title } from "./styles.ts";

const Header = () => {

  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
      <Title theme={currentTheme}>
        WeLearn
      </Title>
      
  );
};

export default Header;
