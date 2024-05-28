import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";
import PaageHeader from "../../components/PageHeader";

const Classrooms = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sala");
  };

  return (
    <>
      <PaageHeader title="Minhas Salas" />
      <ClassroomCard
        ranking="Ouro"
        title="Cálculo Computacional"
        teacherName="Amanda"
        classRoomId={1244}
        conclusionPercent={50}
        onClick={handleClick}
      />
    </>
  );
};

export default Classrooms;
