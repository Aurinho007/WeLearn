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
import { Container, CustomOption, Option, OptionContainer, OptionLabel, QuestionTitle, Statement } from "./styles";

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
  const [answers, setAnswers] = useState<AnswerType[]>();
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    const init = async () => {
      await getQuestions(questionnaire.id, successCallback, errorCallback);
    };

    init();
  }, []);

  const successCallback = (response: IQuestion[]) => {
    setLoading(false);
    setQuestions(response);
    setCurrentQuestion(response[currentNumberQuestion]);
  };

  const errorCallback = (error: string) => {
    navigate(ROUTES.GO_BACK);
    showToast(error, "error");
  };

  const answerQuestion = () => {
    const answareObj = { idQuestao: currentQuestion?.id, resposta: selected };
    const newNumberQuestion = currentNumberQuestion + 1;

    setAnswers(prev => prev?.concat([answareObj]));

    setSelected(undefined);
    setCurrentQuestion(questions[newNumberQuestion] as IQuestion);
    setCurrentNumberQuestion(newNumberQuestion);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
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

        <OptionContainer>
          <OptionLabel>
            <CustomOption selected={selected === "A"}>A</CustomOption>
            <Option
              type="radio"
              value="A"
              checked={selected === "A"}
              onChange={handleOptionChange}
            />
            {currentQuestion?.alternativaA}
          </OptionLabel>

          <OptionLabel>
            <CustomOption selected={selected === "B"}>B</CustomOption>
            <Option
              type="radio"
              value="B"
              checked={selected === "B"}
              onChange={handleOptionChange}
            />
            {currentQuestion?.alternativaB}

          </OptionLabel>

          <OptionLabel>
            <CustomOption selected={selected === "C"}>C</CustomOption>
            <Option
              type="radio"
              value="C"
              checked={selected === "C"}
              onChange={handleOptionChange}
            />
            {currentQuestion?.alternativaC}

          </OptionLabel>

          <OptionLabel>
            <CustomOption selected={selected === "D"}>D</CustomOption>
            <Option
              type="radio"
              value="D"
              checked={selected === "D"}
              onChange={handleOptionChange}
            />
            {currentQuestion?.alternativaD}

          </OptionLabel>
        </OptionContainer>

        <button onClick={answerQuestion}>
          TESTE
        </button>

      </Container>


    </>
  );
};

export default AnswerQuestionnarie;