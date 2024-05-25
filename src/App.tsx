import { GlobalStyles } from "./globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Baseboard from "./components/Baseboard";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Profile from "./pages/Profile";
import About from "./pages/About/index";
import MyClassrooms from "./pages/MyClassrooms/index";
import Questionary from "./pages/Questionary/index";
import FormQuestionary from "./pages/FormQuestionary/index";
import NotFound from "./pages/NotFound/index";
import Classroom from "./pages/Classroom";
import Dashboard from "./pages/Dashboard";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Baseboard />
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" index element={<Layout children={<Home />} />} />
          <Route
            path="/salas"
            element={<Layout children={<MyClassrooms />} />}
          />
          <Route path="/sala" element={<Layout children={<Classroom />} />} />
          <Route path="/sobre" element={<Layout children={<About />} />} />
          <Route
            path="/meu-perfil"
            element={<Layout children={<Profile />} />}
          />
          <Route
            path="/Dashboard"
            element={<Layout children={<Dashboard />} />}
          />
          <Route path="/*" element={<Layout children={<NotFound />} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/criar-questionario" element={<FormQuestionary />} />
          <Route path="/questionario" element={<Questionary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
