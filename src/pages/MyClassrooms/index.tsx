import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../contexts/UserContext";
import Loader from "../../components/Loader";
import IClassroom from "../../interfaces/Classroom";
import { createClassroom, entryClassroom, getClassroom } from "../../service/classroom";
import { ButtonContainer, ClassrommCardContainer } from "./styles";
import ErroCard from "../../components/ErrorCard/index";
import ROUTES from "../../constants/routesConstants";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { CreateClassroomDto, EntryClassroomDto } from "../../dtos/classroom";
import { useToast } from "../../contexts/ToastContext";


const Classrooms = () => {
  const navigate = useNavigate();
  const { isLogged, isTeacher, isStudent } = useUser();
  const { showToast } = useToast();

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
    navigate(ROUTES.CLASSROOM, { state: { room } });
  };

  const handleEnterClassroom = () => {
    const classId = parseInt(prompt("*Esse é um modal de testes*\n\nDigite o Código da sala:") as string);

    const classroomId: EntryClassroomDto = {
      idSala: classId as number
    };

    entryClassroom(
      classroomId,
      createRoomSucessCallback, 
      createRoomErrorCallback
    );
  };

  const handleCreateClassroom = () => {
    const className = prompt("*Esse é um modal de testes*\n\nDigite o nome da sala:");

    const classroomName: CreateClassroomDto = {
      nome: className as string
    };

    createClassroom(
      classroomName,
      createRoomSucessCallback, 
      createRoomErrorCallback
    );
  };

  const createRoomSucessCallback = () => {
    window.location.reload();
  };

  const createRoomErrorCallback = (error: string) => {
    showToast(error, "error");
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
          onClick={handleCreateClassroom}
        />
      );

    }

    if (isStudent()) {
      return (
        <ErroCard
          text="Parece que você ainda não está em nenhuma sala."
          buttonText="Entrar em uma sala"
          onClick={handleEnterClassroom}
        />
      );
    }

  };

  const renderActionButton = () => {
    if (isStudent()) {
      return (
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={400}
          outside="blue"
          text="Entrar em uma sala"
          onClick={handleEnterClassroom}
        />
      );
    }

    return (
      <SecondaryButton
        Ffamily="montserrat"
        Fsize={1}
        Fweight={400}
        outside="blue"
        text="Adicionar sala"
        onClick={handleCreateClassroom}
      />
    );
  };

  if (loading) return <Loader height={130} width={130} />;

  if (error || classrooms.current.length === 0) return renderErrorMessage();

  return (
    <>
      <PageHeader title="Minhas Salas" />
      <ButtonContainer>
        {renderActionButton()}
      </ButtonContainer>
      <ClassrommCardContainer>
        {
          classrooms.current.map((room, index) => {
            return (
              <ClassroomCard
                key={index}
                id={room.id}
                name={room.nomeSala}
                teacherName={room.nomeProfessor}
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
