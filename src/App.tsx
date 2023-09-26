import Header from "./components/Header";
import { GlobalStyles } from "./globalStyle";
import { useTheme } from "../src/contexts/ThemeContext";
import { lightTheme, darkTheme } from "./assets/theme";

function App() {

  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
        <GlobalStyles theme={currentTheme}/>
        <Header />
    </>
  );
}

export default App;
