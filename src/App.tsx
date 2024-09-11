import { GlobalStyles } from "./globalStyle.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Baseboard from "./components/Baseboard";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Profile from "./pages/Profile";
import About from "./pages/About/index";
import MyClassrooms from "./pages/MyClassrooms/index";
import Questionary from "./pages/Questionnaire/index";
import NotFound from "./pages/NotFound/index";
import Classroom from "./pages/Classroom";
import Dashboard from "./pages/Dashboard";
import ROUTES from "./constants/routesConstants.ts";
import CreateQuestionnarie from "./pages/CreateQuestionnarie/index.tsx";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
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
        <Header />
        <Routes>
          <Route
            path={ROUTES.HOME} index
            element={<Layout children={<Home />} />}
          />
          <Route
            path={ROUTES.MY_CLASSROOMS}
            element={<Layout children={<MyClassrooms />} />}
          />
          <Route
            path={ROUTES.CLASSROOM}
            element={<Layout children={<Classroom />} />}
          />
          <Route
            path={ROUTES.ABOUT}
            element={<Layout children={<About />} />}
          />
          <Route
            path={ROUTES.PROFILE}
            element={<Layout children={<Profile />} />}
          />
          <Route
            path={ROUTES.DASHBOARD}
            element={<Layout children={<Dashboard />} />}
          />
          <Route
            path={ROUTES.NOT_FOUND}
            element={<Layout children={<NotFound />} />}
          />
          <Route path={ROUTES.LOGIN}element={<Login />} />
          <Route path={ROUTES.QUESTIONNARIE} element={<Questionary />} />
          <Route path={ROUTES.CREATE_QUESTIONNARIE} element={<CreateQuestionnarie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
