import Ranking from "./components/Ranking";
import { ClassroomContainer, Left, LeftHeader, Right, Title, QuestionaryContainer, HeaderRight } from "./styles";
import { useUser } from "../../contexts/UserContext";
import ConclusionBar from "../../components/ConclusionBar";
import PageHeader from "../../components/PageHeader";
import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";
import RankingIcon from "../../components/RankingIcon";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const Classroom = () => {
  const classroomName = "Cálculo Computacional";
  const { isTeacher } = useUser();

  return (
    <>
      <PageHeader title={`Sala de ${classroomName}`} hasBackButton />
      <ClassroomContainer>
        <Left>
          <LeftHeader>
            <RankingIcon
              size={100}
              elo="Ouro"
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
          <HeaderRight>
            <Title>
              Questionários
            </Title>
            { isTeacher() &&
              <SecondaryButton
                Ffamily="montserrat"
                Fsize={1}
                Fweight={400}
                onClick={() => {alert("Em breve");}}
                outside="black"
                text="Adicionar"
              />
            }

          </HeaderRight>
          <ConclusionBar
            conclusionPercent={20}
            height={30}
          />
          <QuestionaryContainer>
            <QuestionaryCard
              title="Questionário 03"
              description="PHP e .NET"
              isDone={false}
            />
            <QuestionaryCard
              title="Questionário 02"
              description="JavaScript Web"
              isDone={true}
            />

            <QuestionaryCard
              title="Questionário 01"
              description="navegador Chrome e Mozila"
              isDone={true}
            />

          </QuestionaryContainer>


        </Right>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;
