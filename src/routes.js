import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import CreateAccount from './pages/CreateAccount/index';
import Profile from './pages/Profile';
import About from './pages/About/index';
import Classrooms from './pages/Classrooms/index';
import Questionary from './pages/Questionary/index';
import CreateQuestionary from './pages/CreateQuestionary/index';
import NotFound from './pages/NotFound/index';
import Header from './components/Header';
import Baseboard from './components/Baseboard';

export default function AppRouter()  {
  return(
    <Router>
      <Header/>
      <Baseboard/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/criar-conta' element={<CreateAccount />}/>
        <Route path='/meu-perfil' element={<Profile />}/>
        <Route path='/sobre' element={<About />}/>
        <Route path='/salas' element={<Classrooms />}/>
        <Route path='/criar-questionario' element={<CreateQuestionary />}/>
        <Route path='/questionario' element={<Questionary />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}
