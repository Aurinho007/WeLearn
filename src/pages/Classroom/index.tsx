import QuestionaryDataCard from "./components/QuestionaryDataCard";

const Classroom = () => {
  return (
    <>
      <h1>Sala de Arquitetura de Software</h1>
      <QuestionaryDataCard
        teacherName="Amanda Borges"
        classroomId={190622}
        studentRanking="Ouro"
      />
    </>
  );
};

export default Classroom;
