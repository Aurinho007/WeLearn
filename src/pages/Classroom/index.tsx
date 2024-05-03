import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";

const Classroom = () => {
  return (
    <>
      <h1>Sala de Arquitetura de Software</h1>
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
