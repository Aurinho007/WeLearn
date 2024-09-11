import { useLocation, useNavigate } from "react-router-dom";
import Ranking from "./components/Ranking";
import { ClassroomContainer, Left, LeftHeader, Right, Title, QuestionaryContainer, HeaderRight } from "./styles";
import { useUser } from "../../contexts/UserContext";
import ConclusionBar from "../../components/ConclusionBar";
import PageHeader from "../../components/PageHeader";
import ClassroomDataCard from "./components/ClassroomDataCard";
import QuestionaryCard from "./components/QuestionaryCard";
import RankingIcon from "../../components/RankingIcon";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import IClassroom from "../../interfaces/Classroom";
import ROUTES from "../../constants/routesConstants";

const Classroom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { room }: { room: IClassroom } = location.state || {};

  const { isTeacher, isStudent } = useUser();

  return (
    <>
      <PageHeader title={`Sala de ${room.nomeSala}`} hasBackButton />
      <ClassroomContainer>
        <Left>
          <LeftHeader>
            {
              isStudent() &&
              <RankingIcon
                size={100}
                elo={room.elo as string}
              />
            }
            <ClassroomDataCard
              teacherName={room.nomeProfessor}
              classroomId={room.id}
              elo={room.elo as string}
            />
          </LeftHeader>
          <Ranking />
        </Left>

        <Right>
          <HeaderRight>
            <Title>
              Questionários
            </Title>
            {isTeacher() &&
              <SecondaryButton
                Ffamily="montserrat"
                Fsize={1}
                Fweight={400}
                onClick={() => navigate(ROUTES.CREATE_QUESTIONNARIE)}
                outside="black"
                text="Adicionar"
              />
            }

          </HeaderRight>
          {
            room.percentualConcluido &&
            <ConclusionBar
              conclusionPercent={room.percentualConcluido}
              height={30}
            />
          }
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
