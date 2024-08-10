import ConclusionBar from "../../components/ConclusionBar";
import PageHeader from "../../components/PageHeader";
import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";
import RankingIcon from "../../components/RankingIcon";
import { ClassroomContainer, Left, LeftHeader, Right, Title, QuestionaryContainer } from './styles';
import Ranking from "./components/Ranking";

const Classroom = () => {
  const classroomName = "Aquitetura de Sofware"
  return (
    <>
      <PageHeader title={`Sala de ${classroomName}`} hasBackButton/>
      <ClassroomContainer>
        <Left>
          <LeftHeader>
            <RankingIcon
              size={100}
              ranking="Ouro"
            />
            <ClassroomDataCard
              teacherName="Amanda Borges"
              classroomId={190622}
              studentRanking="Ouro"
            />
          </LeftHeader>
          <Ranking />
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
