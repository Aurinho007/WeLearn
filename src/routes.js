import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import CreateAccount from './Pages/CreateAccount/index';
import Profile from './Pages/Profile';
import About from './Pages/About/index';
import Classrooms from './Pages/Classrooms/index';
import Questionary from './Pages/Questionary/index';
import CreateQuestionary from './Pages/CreateQuestionary/index';
import NotFound from './Pages/NotFound/index';
import Header from './Components/Header';

export default function AppRouter()  {
  return(
    <Router>
      <Header/>
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
