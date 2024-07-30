import PageHeader from "../../components/PageHeader";
import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";
import RankingIcon from "./components/RankingIcon";
import { ClassroomContainer, ClassroomData, DataHeader, QuestionaryContainer } from './styles';

const Classroom = () => {
  const classroomName = "Aquitetura de Sofware"
  return (
    <>
      <PageHeader title={`Sala de ${classroomName}`} />
      <ClassroomContainer>
        <ClassroomData>
          <DataHeader>
            <RankingIcon
              size={100}
              ranking="ouro"
            />
            <ClassroomDataCard
              teacherName="Amanda Borges"
              classroomId={190622}
              studentRanking="Ouro"
            />
          </DataHeader>
          {/* Componente do ranking */}
        </ClassroomData>

        <QuestionaryContainer>
          

        </QuestionaryContainer>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;

{/* <QuestionaryCard
  title="Questionário 01"
  description=" navegador Chrome e Mozila"
  isDone={true}
/> */} 