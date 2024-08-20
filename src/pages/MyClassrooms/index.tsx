import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../contexts/UserContext";
import EmptyClassrooms from "./components/EmptyClassrooms";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Loader from "../../components/Loader";

const Classrooms = () => {
  const navigate = useNavigate();
  const { isLogged, isStudent } = useUser();
  const [loading, setLoading] = useState(true);

  const numClassesTest: any = [{}];
  const renderEmptyClasses = !isLogged() || numClassesTest.length === 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, []);

  const handleClick = () => {
    navigate("/sala");
  };

  const navigateToLogin = () => {
    navigate("/login");
  }

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
              onClick={navigateToLogin}
              outside="blue"
              text="Login"
            />
          }
        />
      )
    }

    if (numClassesTest.length === 0) {
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
      } else {
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
    }

    return <></>

  }

  return (
    <>
      {
        loading ?
          <Loader height={130} width={130} /> :
          renderEmptyClasses ?
            renderErrorMessage() :
            <>
              <PageHeader title="Minhas Salas" />
              <ClassroomCard
                ranking="Ouro"
                title="Cálculo Computacional"
                teacherName="Amanda"
                classRoomId={1244}
                conclusionPercent={20}
                onClick={handleClick}
              />
            </>

      }
    </>
  );
};

export default Classrooms;
