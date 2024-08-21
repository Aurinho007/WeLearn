import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import EmptyClassrooms from "./components/EmptyClassrooms";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../contexts/UserContext";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Loader from "../../components/Loader";
import IClassroom from "../../interfaces/Classroom";
import { getClassroom } from "../../service/classroom";
import { useToast } from "../../contexts/ToastContext";

const Classrooms = () => {
  const navigate = useNavigate();
  const { showToast } = useToast()
  const { isLogged, isTeacher, isStudent } = useUser();

  const classrooms = useRef<IClassroom[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  const successCallback = (response: IClassroom[]) => {
    classrooms.current = response;
    setLoading(false);
  }

  const errorCallback = (error: string) => {
    setError(error);
    showToast(error, 'error');
    setLoading(false);
  }

  useEffect(() => {
    const getRooms = async () => {
      await getClassroom(successCallback, errorCallback)
    }
    getRooms();
  }, []);

  const handleClick = () => {
    // parametros da sala
    navigate("/sala");
  };

  const enterClassroom = () => {
    alert("Em breve!");
  }

  const createClassroom = () => {
    alert("Em breve!");
  }


  const renderErrorMessage = () => {
    if (!isLogged()) {
      return (
        <EmptyClassrooms
          text="Parece que você não está logado."
          button={
            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1}
              Fweight={500}
              onClick={() => navigate("/login")}
              outside="blue"
              text="Login"
            />
          }
        />
      )
    }

    if (error) {
      return (
        <>
          <h1>Componente de erro aqui</h1>
          <h1>{error}</h1>
          <button onClick={() => window.location.reload()}>Recarregar</button>
        </>

      )
    }

    if (isTeacher()) {
      return (
        <EmptyClassrooms
          text="Parece que você ainda não tem nenhuma sala"
          button={
            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1}
              Fweight={500}
              onClick={createClassroom}
              outside="blue"
              text="Criar uma sala"
            />
          }
        />
      )

    }

    if (isStudent()) {
      return (
        <EmptyClassrooms
          text="Parece que você ainda não está em nenhuma sala."
          button={
            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1}
              Fweight={500}
              onClick={enterClassroom}
              outside="blue"
              text="Entrar em uma sala"
            />
          }
        />
      )
    }

  }

  if (loading) return <Loader height={130} width={130} />


  if (error || classrooms.current.length === 0) return renderErrorMessage()

  return (
    <>
      <PageHeader title="Minhas Salas" />

      {
        classrooms.current.map(room => {
          return (
            <ClassroomCard
              name={room.name}
              teacherName={room.teacherName}
              id={room.id}
              conclusionPercent={room.conclusionPercent}
              elo={room.elo}
              onClick={handleClick}
            />
          )
        })
      }

    </>
  );
};

export default Classrooms;
