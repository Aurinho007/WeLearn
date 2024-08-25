import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../contexts/UserContext";
import Loader from "../../components/Loader";
import IClassroom from "../../interfaces/Classroom";
import { getClassroom } from "../../service/classroom";
import { ClassrommCardContainer } from "./styles";
import ErroCard from "../../components/ErrorCard/index";
import ROUTES from "../../constants/routesConstants";


const Classrooms = () => {
  const navigate = useNavigate();
  const { isLogged, isTeacher, isStudent } = useUser();

  const classrooms = useRef<IClassroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const successCallback = (response: IClassroom[]) => {
    classrooms.current = response;
    setLoading(false);
  };

  const errorCallback = (error: string) => {
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    if (isLogged()) {
      getClassroom(successCallback, errorCallback);
    } else {
      setLoading(false);
    }
  }, []);

  const navigateToClassroom = (room: IClassroom) => {
    navigate(ROUTES.CLASSROOM, {state : { room }});
  };

  const enterClassroom = () => {
    alert("Em breve!");
  };

  const createClassroom = () => {
    alert("Em breve!");
  };


  const renderErrorMessage = () => {
    if (!isLogged()) {
      return (
        <ErroCard
          text="Parece que você não está logado."
          buttonText="Login"
          onClick={() => navigate(ROUTES.LOGIN)}
        />
      );
    }

    if (error) {
      return (
        <ErroCard
          text={error}
          buttonText="Recarregar"
          onClick={() => window.location.reload()}
        />
      );
    }

    if (isTeacher()) {
      return (
        <ErroCard
          text="Parece que você ainda não tem nenhuma sala"
          buttonText="Criar uma sala"
          onClick={createClassroom}
        />
      );

    }

    if (isStudent()) {
      return (
        <ErroCard
          text="Parece que você ainda não está em nenhuma sala."
          buttonText="Entrar em uma sala"
          onClick={enterClassroom}
        />
      );
    }

  };

  if (loading) return <Loader height={130} width={130} />;


  if (error || classrooms.current.length === 0) return renderErrorMessage();

  return (
    <>
      <PageHeader title="Minhas Salas" />
      <ClassrommCardContainer>
        {
          classrooms.current.map((room, index) => {
            return (
              <ClassroomCard
                key={index}
                id={room.id}
                name={room.nome}
                teacherName={room.nomePofessor}
                elo={room.elo}
                conclusionPercent={room.percentualConcluido}
                onClick={() => navigateToClassroom(room)}
              />
            );
          })
        }
      </ClassrommCardContainer>
    </>
  );
};

export default Classrooms;
