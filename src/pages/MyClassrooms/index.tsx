import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../contexts/UserContext";
import EmptyClassrooms from "./components/EmptyClassrooms";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const Classrooms = () => {
  const navigate = useNavigate();
  const { isLogged } = useUser();

  const handleClick = () => {
    navigate("/sala");
  };

  const navigateToLogin = () => {
    navigate("/login");
  }


  return (
    <>
      {
        !isLogged() ?
          <EmptyClassrooms
            text="Parece que você não está logado"
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
          /> :
          <>
            <PageHeader title="Minhas Salas" />
            <ClassroomCard
              ranking="Ouro"
              title="Cálculo Computacional"
              teacherName="Amanda"
              classRoomId={1244}
              conclusionPercent={50}
              onClick={handleClick}
            />
          </>
      }


    </>
  );
};

export default Classrooms;
