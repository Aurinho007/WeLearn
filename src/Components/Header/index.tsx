import { useTheme } from "../../Contexts/ThemeContext.tsx";
import * as themes  from "../../assets/theme.ts";
import { Container, Title } from "./styles.ts";

const Header = () => {

const { theme } = useTheme();
const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <Container theme={currentTheme}>
     <Title theme={currentTheme}>
        WeLearn
      </Title>
    </Container>
  );
};

export default Header;
