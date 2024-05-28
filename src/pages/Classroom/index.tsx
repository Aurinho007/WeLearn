import PaageHeader from "../../components/PageHeader";
import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";

const Classroom = () => {
  const classroomName = "Aquitetura de Sofware"
  return (
    <>
      <PaageHeader title={`Sala de ${classroomName}`} />
      <ClassroomDataCard
        teacherName="Amanda Borges"
        classroomId={190622}
        studentRanking="Ouro"
      />
      <div style={{ width: 100 }}></div>
      <QuestionaryCard
        title="Questionário 01"
        description=" navegador Chrome e Mozila"
        isDone={true}
      />
    </>
  );
};

export default Classroom;
