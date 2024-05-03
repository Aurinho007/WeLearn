import { useNavigate } from "react-router-dom";
import ClassroomCard from "./components/ClassroomCard";

const Classrooms = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sala");
  };

  return (
    <>
      <h1 style={{padding: 50}}>Salas</h1>
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
