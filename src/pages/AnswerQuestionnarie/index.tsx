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
import { ButtonContainer, Container, CustomOption, Option, Options, OptionLabel, QuestionTitle, Statement, OptionContainer, AuxButtons } from "./styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../components/Buttons/TerciaryButton";
import theme from "../../assets/theme";
import { answerQuestionnarie } from "../../service/answerQuestionnarie";

export type AnswerType = {
  idQuestao?: number,
  resposta?: string
}

type Option = {
  option: "A" | "B" | "C" | "D";
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
  const [selected, setSelected] = useState<string>();

  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const alternatives: Option[] = [
    { option: "A" },
    { option: "B" },
    { option: "C" },
    { option: "D" },
  ];

  useEffect(() => {
    if (!questionnaire) {
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
      navigate(ROUTES.CLASSROOM, { state: { room }, replace: true });
    }
  };

  const errorCallback = (error: string) => {
    navigate(ROUTES.GO_BACK);
    showToast(error, "error");
  };

  const jumpQuestion = () => {
    const answareObj = { idQuestao: currentQuestion?.id, resposta: "-" };
    setAnswers(prev => prev?.concat([answareObj]));
    setShowAnswer(true);
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
      answerQuestionnarie(questionnaire.id, answers, answerSuccessCallback, answerErrorCallback);
      return;
    }

    const newNumberQuestion = currentNumberQuestion + 1;
    setCurrentQuestion(questions[newNumberQuestion] as IQuestion);
    setCurrentNumberQuestion(newNumberQuestion);
    setSelected(undefined);
    setShowAnswer(false);
  };

  const answerSuccessCallback = () => {
    alert("Parabéns!\nVocê finalizou mais um questionário.");
    navigate(ROUTES.GO_BACK);
  };

  const answerErrorCallback = (error: string) => {
    console.log(error);
    showToast(error, "error");
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
          {
            alternatives.map(item => {
              return (<>
                <OptionContainer
                  color={defineColor(item.option)}
                  onClick={() => {
                    if (!showAnswer) {
                      handleOptionChange({ target: { value: item.option } } as React.ChangeEvent<HTMLInputElement>);
                    }
                  }}
                >
                  <OptionLabel>
                    <CustomOption selected={selected === item.option}>{item.option}</CustomOption>
                    <Option
                      disabled={showAnswer}
                      type="radio"
                      value={item.option}
                      checked={selected === item.option}
                      onChange={handleOptionChange}
                      onClick={(e) => e.stopPropagation()}
                    />
                    {currentQuestion?.[`alternativa${item.option}`]}
                  </OptionLabel>
                </OptionContainer>
              </>);
            })

          }
        </Options>

        {
          !showAnswer &&
          <AuxButtons>
            <TerciaryButton
              text="Dica"
              Fsize={1.2}
              colored={false}
              onClick={() => alert("Em breve!")}
              tip="A dica custa 50 WeCoins"
            />

            <TerciaryButton
              text="Não sei"
              Fsize={1.2}
              colored={false}
              onClick={jumpQuestion}
              tip="Você também ganha XP e WeCoins por não saber uma questão"
            />
          </AuxButtons>
        }

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