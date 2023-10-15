import Header from "./Components/Header";
import { GlobalStyles } from "./globalStyle";
import { useTheme } from "./Contexts/ThemeContext";
import * as themes  from "./assets/theme";

function App() {

  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <>
        <GlobalStyles theme={currentTheme}/>
        <Header />
    </>
  );
}

export default App;
