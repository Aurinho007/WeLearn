import { useLocation, useNavigate } from "react-router-dom";
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
import { useContext, useEffect, useState } from "react";
import IQuestionnarie from "../../interfaces/Questionnarie";
import ErroCard from "../../components/ErrorCard/index";
import Loader from "../../components/Loader";
import ROUTES from "../../constants/routesConstants";
import ErrorCard from "../../components/ErrorCard/index";
import Ranking from './components/Ranking/index';
import MobileButton from "../../components/Buttons/mobileButton";
import { ModalContext } from "../../contexts/ModalContext";

const Classroom = () => {
  const location = useLocation();
  const { isTeacher, isStudent, isMobile } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [questionnaries, setQuestionnaries] = useState<IQuestionnarie[]>();
  const modal = useContext(ModalContext);


  const { room }: { room: IClassroom } = location.state || {};

  useEffect(() => {
    if (!room) {
      navigate(ROUTES.HOME);
      return;
    }
    getAllQuestionnaries(room.id, sucessCallback, errorCallback);
  }, []);

  const sucessCallback = (response: IQuestionnarie[]) => {
    setLoading(false);
    response.map((item, index) => {
      if (!item.liberado && isStudent()) {
        response.splice(index, 1);
      }
    });
    setQuestionnaries(response.reverse());
  };

  const errorCallback = (error: string) => {
    setLoading(false);
    setError(error);
  };


  const handleClickCreateQuestionnarie = async () => {
    let name: string | null = null;

    if (modal) {
      name = await modal.showModal({
        title: "Digite o tema do questionário",
        subTitle: "",
        placeholder: "História do Brasil",
        buttonText: "Adicionar",
      });

    }

    if (!name) {
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

  const handleClickQuestionnarie = (questionnaire: IQuestionnarie) => {
    if (isTeacher()) {
      navigate(ROUTES.QUESTIONNARIE, { state: { questionnaire, room } });
    } else {
      if (questionnaire.isDone) {
        showToast("Você já fez este questionário", "info");
        return;
      }
      navigate(ROUTES.ANSWER_QUESTIONNARIE, { state: { questionnaire, room }, replace: true });
    }
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

  if (loading) return <Loader size={130} />;

  return (
    <>
      <PageHeader title={`Sala de ${room.nomeSala}`} hasBackButton />
      <ClassroomContainer>
        <Left>
          <LeftHeader>
            {
              isStudent() && !isMobile &&
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
          {!isMobile && <Ranking />}

        </Left>

        <Right>
          <HeaderRight>
            <Title>
              Questionários
            </Title>
            {isTeacher() ?
              isMobile ?
                <MobileButton
                  label="Adicionar questionário"
                  onClick={handleClickCreateQuestionnarie}
                />
                :
                <SecondaryButton
                  Ffamily="montserrat"
                  Fsize={1}
                  Fweight={400}
                  onClick={handleClickCreateQuestionnarie}
                  outside="blue"
                  text="Adicionar"
                />
              : <></>
            }

          </HeaderRight>
          {
            room.percentualConcluido != null && isStudent() &&
            <ConclusionBar
              conclusionPercent={room.percentualConcluido}
              height={30}
            />

          }
          <QuestionaryContainer>
            {
              questionnaries?.length === 0 || !questionnaries ?
                <ErrorCard
                  text="Esta sala ainda não possui questionários"
                  buttonText={isTeacher() ? "Adicionar questionário" : ""}
                  onClick={isTeacher() ? handleClickCreateQuestionnarie : () => { }}
                />
                :
                questionnaries.map((item, index) => {
                  return (
                    <QuestionaryCard
                      key={index}
                      title={"Questionário " + ((index - questionnaries.length) * -1)}
                      description={item.nome}
                      onClick={() => handleClickQuestionnarie(item)}
                      isDone={item.isDone}
                    />
                  );
                })
            }
          </QuestionaryContainer>


          {isMobile && <>
            <Title>
              Ranking
            </Title>
            <Ranking />
          </>
          }
        </Right>
      </ClassroomContainer>
    </>
  );
};

export default Classroom;
