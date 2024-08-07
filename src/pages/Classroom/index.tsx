import ConclusionBar from "../../components/ConclusionBar";
import PageHeader from "../../components/PageHeader";
import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";
import RankingIcon from "./components/RankingIcon";
import { ClassroomContainer, Left, DataHeader, Right, Title, QuestionaryContainer } from './styles';

const Classroom = () => {
  const classroomName = "Aquitetura de Sofware"
  return (
    <>
      <PageHeader title={`Sala de ${classroomName}`} />
      <ClassroomContainer>
        <Left>
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
        </Left>

        <Right>
          <Title>
            Questionários
          </Title>
          <ConclusionBar
            conclusionPercent={65}
            height={30}
          />
          <QuestionaryContainer>
            <QuestionaryCard
              title="Questionário 01"
              description="navegador Chrome e Mozila"
              isDone={true}
            />

            <QuestionaryCard
              title="Questionário 02"
              description="JavaScript Web"
              isDone={true}
            />

            <QuestionaryCard
              title="Questionário 03"
              description="PHP e .NET"
              isDone={false}
            />

          </QuestionaryContainer>


        </Right>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;
