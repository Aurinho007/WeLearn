import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../contexts/UserContext";
import Loader from "../../components/Loader";
import { IClassroom } from "../../interfaces/Classroom";
import { createClassroom, entryClassroom, getClassroom } from "../../service/classroom";
import { ButtonContainer, ClassroomCardContainer } from "./styles";
import ErroCard from "../../components/ErrorCard/index";
import ROUTES from "../../constants/routesConstants";
import ClassroomAction from "./components/ClasroomAction";
import { CreateClassroomDto, EntryClassroomDto } from "../../dtos/classroom";
import { useToast } from "../../contexts/ToastContext";
import { ModalContext } from "../../contexts/ModalContext";

const Classrooms = () => {
  const navigate = useNavigate();
  const { isLogged, isTeacher, isStudent } = useUser();
  const { showToast } = useToast();
  const modal = useContext(ModalContext);

  const classrooms = useRef<IClassroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [request, setRequest] = useState(false);

  useEffect(() => {
    if (isLogged()) {
      setLoading(true);
      getClassroom(successCallback, errorCallback);
    } else {
      setLoading(false);
    }
  }, [request]);

  const successCallback = (response: IClassroom[]) => {
    response.forEach(item => {
      if (item.percentualConcluido == null) {
        item.percentualConcluido = 0;
      }
    });
    classrooms.current = response;
    setLoading(false);
  };

  const errorCallback = (error: string) => {
    setError(error);
    setLoading(false);
  };

  const navigateToClassroom = (room: IClassroom) => {
    navigate(ROUTES.CLASSROOM, { state: { room } });
  };

  const handleCreateClassroom = async () => {
    let className: string | null = null;

    if (modal) {
      className = await modal.showModal({
        title: "Qual será o nome da sala?",
        subTitle: "Use o nome da turma também",
        placeholder: "Matemática - 5º ano B",
        buttonText: "Adicionar",
      });

    }

    if (!className) return;
    

    const classroomName: CreateClassroomDto = {
      nome: className as string
    };

    setRequest(prev => !prev);

    createClassroom(
      classroomName,
      actionRoomSucessCallback,
      actionRoomErrorCallback
    );
  };

  const handleEnterClassroom = async () => {
    let classId: string | number | null = null;

    if (modal) {
      classId = await modal.showModal({
        title: "Qual é o código da sala?",
        placeholder: "0000",
        buttonText: "Entrar",
      });

    }

    if (!classId) return;

    classId = parseInt(classId);

    const classroomId: EntryClassroomDto = {
      idSala: classId as number
    };

    entryClassroom(
      classroomId,
      actionRoomSucessCallback,
      actionRoomErrorCallback
    );
  };

  const actionRoomSucessCallback = () => {
    setRequest(prev => !prev);
    setLoading(false);
  };

  const actionRoomErrorCallback = (error: string) => {
    setLoading(false);
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
    if (error || !classrooms.current) {
      return (
        <ErroCard
          text={error ? error : "Algo deu errado"}
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

  if (loading) return <Loader size={130} fullScreen/>;

  if (error || !classrooms.current || classrooms.current.length === 0) return renderErrorMessage();

  return (
    <>
      <PageHeader title="Minhas Salas" />
      <ButtonContainer>
        <ClassroomAction
          handleCreateClassroom={handleCreateClassroom}
          handleEnterClassroom={handleEnterClassroom}
        />
      </ButtonContainer>
      <ClassroomCardContainer>
        {
          classrooms.current && classrooms.current.map((room, index) => {
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
      </ClassroomCardContainer>
    </>
  );
};

export default Classrooms;
