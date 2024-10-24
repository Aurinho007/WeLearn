import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IClassroom from "../../interfaces/Classroom";
import IQuestionnarie from "../../interfaces/Questionnarie";
import PageHeader from "../../components/PageHeader";
import IQuestion from "../../interfaces/Question";
import { getQuestions } from "../../service/question";
import ROUTES from "../../constants/routesConstants";
import { useToast } from "../../contexts/ToastContext";
import Loader from "../../components/Loader";
import { ButtonContainer, Container, CustomOption, Option, Options, OptionLabel, QuestionTitle, Statement, OptionContainer } from "./styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../components/Buttons/TerciaryButton";
import theme from "../../assets/theme";

type AnswerType = {
  idQuestao?: number,
  resposta?: string
}

const AnswerQuestionnarie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { room, questionnaire }: { room: IClassroom, questionnaire: IQuestionnarie } = location.state || {};

  const [questions, setQuestions] = useState<IQuestion[]>([] as IQuestion[]);
  const [loading, setLoading] = useState<boolean>(true);

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>();
  const [currentNumberQuestion, setCurrentNumberQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [selected, setSelected] = useState<string>();

  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    if (!questionnaire || !questionnaire) {
      navigate(ROUTES.HOME);
      return;
    }

    const init = async () => {
      await getQuestions(questionnaire.id, successCallback, errorCallback);
    };
    init();
  }, []);

  const successCallback = (response: IQuestion[]) => {
    setLoading(false);
    setQuestions(response);
    setCurrentQuestion(response[currentNumberQuestion]);

    if (response.length === 0) {
      showToast("Esse questionário ainda não possui perguntas", "info");
      navigate(ROUTES.CLASSROOM, { state: { room } });
    }
  };

  const errorCallback = (error: string) => {
    navigate(ROUTES.GO_BACK);
    showToast(error, "error");
  };

  const answerQuestion = () => {
    if (!selected) {
      showToast("Selecione uma alternativa", "info");
      return;
    }

    const answareObj = { idQuestao: currentQuestion?.id, resposta: selected };
    setAnswers(prev => prev?.concat([answareObj]));
    setShowAnswer(true);
  };

  const goToNextQuestion = () => {

    if (questions.length === currentNumberQuestion + 1) {
      alert("Parabéns!\nVocê finalizou mais um questionário.");
      navigate(ROUTES.GO_BACK);
    }

    const newNumberQuestion = currentNumberQuestion + 1;
    setCurrentQuestion(questions[newNumberQuestion] as IQuestion);
    setCurrentNumberQuestion(newNumberQuestion);
    setSelected(undefined);
    setShowAnswer(false);
    console.log(answers);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const renderAnswerQuestionButton = () => {
    return (
      <PrimaryButton
        width="200px"
        onClick={answerQuestion}
        text="Responder"
      />
    );
  };

  const renderNextQuestionButton = () => {
    return (
      <TerciaryButton
        Fsize={1.3}
        text="Próxima >"
        onClick={goToNextQuestion}
        colored={false}
      />
    );
  };

  const defineColor = (option: string) => {

    if (!showAnswer) return "";

    if (option.toLowerCase() === currentQuestion?.alternativaCorreta.toLowerCase()) {
      return theme.lightBlue;
    }

    if (option === selected && selected !== currentQuestion?.alternativaCorreta.toLowerCase() as string) {
      return theme.toast.error;
    }

    return "";
  };

  if (loading) return <Loader height={120} width={120} />;

  return (
    <>
      <PageHeader
        title={room.nomeSala}
        subTitle={`Questionário ${questionnaire.id}`}
      />

      <Container>
        <QuestionTitle>
          Questão {currentNumberQuestion + 1} de {questions?.length}
        </QuestionTitle>

        <Statement>
          {currentQuestion?.enunciado}
        </Statement>

        <Options>
          <OptionContainer
            color={defineColor("A")}
          >
            <OptionLabel>
              <CustomOption selected={selected === "A"}>A</CustomOption>
              <Option
                disabled={showAnswer}
                type="radio"
                value="A"
                checked={selected === "A"}
                onChange={handleOptionChange}
              />
              {currentQuestion?.alternativaA}
            </OptionLabel>
          </OptionContainer>

          <OptionContainer
            color={defineColor("B")}
          >
            <OptionLabel>
              <CustomOption selected={selected === "B"}>B</CustomOption>
              <Option
                disabled={showAnswer}
                type="radio"
                value="B"
                checked={selected === "B"}
                onChange={handleOptionChange}
              />
              {currentQuestion?.alternativaB}
            </OptionLabel>
          </OptionContainer>

          <OptionContainer
            color={defineColor("C")}
          >
            <OptionLabel>
              <CustomOption selected={selected === "C"}>C</CustomOption>
              <Option
                disabled={showAnswer}
                type="radio"
                value="C"
                checked={selected === "C"}
                onChange={handleOptionChange}
              />
              {currentQuestion?.alternativaC}
            </OptionLabel>
          </OptionContainer>

          <OptionContainer
            color={defineColor("D")}
          >
            <OptionLabel>
              <CustomOption selected={selected === "D"}>D</CustomOption>
              <Option
                disabled={showAnswer}
                type="radio"
                value="D"
                checked={selected === "D"}
                onChange={handleOptionChange}
              />
              {currentQuestion?.alternativaD}
            </OptionLabel>
          </OptionContainer>
        </Options>

        <ButtonContainer>

          {showAnswer ?
            renderNextQuestionButton() :
            renderAnswerQuestionButton()
          }

        </ButtonContainer>
      </Container>


    </>
  );
};

export default AnswerQuestionnarie;