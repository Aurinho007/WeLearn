import { useLocation } from "react-router-dom";
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
import { CreateQuestionnarieDTO } from "../../dtos/questionnarie";
import { useToast } from "../../contexts/ToastContext";
import { createQuestionnarie, getAllQuestionnaries } from "../../service/questionnnarie";
import { useEffect, useState } from "react";
import IQuestionnarie from "../../interfaces/Questionnarie";
import ErroCard from "../../components/ErrorCard/index";
import Loader from "../../components/Loader";


/**
 * o ID deve ser unico apenas no contexo da sala
 * Falta o parâmetro isDone
 */

const Classroom = () => {
  const { isTeacher, isStudent } = useUser();
  const { showToast } = useToast();

  const location = useLocation();
  const { room }: { room: IClassroom } = location.state || {};

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [questionnaries, setQuestionnaries] = useState<IQuestionnarie[]>();

  useEffect(() => {
    getAllQuestionnaries(room.id, sucessCallback, errorCallback);
  }, []);

  const sucessCallback = (response: IQuestionnarie[]) => {
    setLoading(false);
    setQuestionnaries(response);
  };

  const errorCallback = (error: string) => {
    setLoading(false);
    setError(error);
  };


  const handleClickCreateQuestionnarie = () => {
    const name = prompt("Digite a descrição do questionário:\n\nExemplo: História do Brasil");

    if (!name) {
      showToast("Digite o nome da sala", "info");
      return;
    }

    const newQuestionnarie: CreateQuestionnarieDTO = {
      nome: name as string,
      idSala: room.id
    };

    const sucessCallback = () => {
      showToast("Questionário criado com sucesso!", "success");
      window.location.reload();
    };

    const errorCallback = (error: string) => {
      showToast(error, "error");
    };

    createQuestionnarie(newQuestionnarie, sucessCallback, errorCallback);

  };

  if (error) {
    return (
      <ErroCard
        text={error}
        buttonText="Recarregar"
        onClick={() => window.location.reload()}
      />
    );
  }

  if (loading) return <Loader height={130} width={130} />;

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
                onClick={handleClickCreateQuestionnarie}
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
            {
              questionnaries?.map((item, index) => {
                return (
                  <QuestionaryCard
                    key={index}
                    title={"Questionário " + item.id}
                    description={item.nome}
                    // isDone={item.isDone}
                  />
                );
              })
            }
          </QuestionaryContainer>


        </Right>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;
