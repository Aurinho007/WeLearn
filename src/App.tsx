import Header from "./Components/Header";
import Baseboard from "./Components/Baseboard";
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
        <Baseboard />
    </>
  );
}

export default App;
