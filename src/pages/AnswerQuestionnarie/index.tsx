import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IClassroom } from "../../interfaces/Classroom";
import IQuestionnarie, { IAnswerQuestionnarie } from "../../interfaces/Questionnarie";
import PageHeader from "../../components/PageHeader";
import IQuestion from "../../interfaces/Question";
import { getQuestions } from "../../service/question";
import ROUTES from "../../constants/routesConstants";
import { useToast } from "../../contexts/ToastContext";
import Loader from "../../components/Loader";
import { ButtonContainer, Container, CustomOption, Option, Options, OptionLabel, QuestionTitle, Statement, OptionContainer, AuxButtons, AlertContainer, Alert, AlertTitle, AlertSubTitle, AlertLine, AlertTextKey, AlertTextValue, AlertBtn } from "./styles";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import TerciaryButton from "../../components/Buttons/TerciaryButton";
import theme from "../../assets/theme";
import { answerQuestionnarie } from "../../service/answerQuestionnarie";
import { useUser } from "../../contexts/UserContext";
import MobileButton from "../../components/Buttons/mobileButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useWeCoin } from "../../service/weCoin";

export type AnswerType = {
  idQuestao?: number,
  resposta?: string
}

type Option = {
  option: "A" | "B" | "C" | "D";
}

type Price = {
  Fácil: number,
  Médio: number,
  Difícil: number
}

const tipPrice: Price = {
  Fácil: 100,
  Médio: 250,
  Difícil: 400
};

const AnswerQuestionnarie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { isMobile, setUser, user } = useUser();

  const { room, questionnaire }: { room: IClassroom, questionnaire: IQuestionnarie } = location.state || {};

  const [questions, setQuestions] = useState<IQuestion[]>([] as IQuestion[]);
  const [loading, setLoading] = useState<boolean>(true);

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>();
  const [currentNumberQuestion, setCurrentNumberQuestion] = useState<number>(0);
  const [selected, setSelected] = useState<string>();

  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(false);
  const [nota, setNota] = useState<number>(0);
  const [xp, setXp] = useState<number>(0);
  const [weCoin, setWeCoin] = useState<number>(0);

  const [sending, setSending] = useState(false);

  const [weCoinModalVisible, setWeCoinModalVisible] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const boughtTips = useRef<number[]>([]);

  const [showTipModal, setShowTipModal] = useState(false);

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
      setSending(true);
      answerQuestionnarie(room.id, questionnaire.id, answers, answerSuccessCallback, answerErrorCallback);
      return;
    }

    const newNumberQuestion = currentNumberQuestion + 1;
    setCurrentQuestion(questions[newNumberQuestion] as IQuestion);
    setCurrentNumberQuestion(newNumberQuestion);
    setSelected(undefined);
    setShowAnswer(false);
  };

  const finish = () => {
    setVisible(false);
    navigate(ROUTES.GO_BACK);
  };

  const answerSuccessCallback = (response: IAnswerQuestionnarie) => {
    setSending(false);
    setUser({
      ...user,
      weCoin: response.weCoin + user.weCoin,
      xp: response.xp + user.xp,
    });

    setXp(response.xp);
    setNota(response.nota);
    setWeCoin(response.weCoin);
    setVisible(true);
  };

  const answerErrorCallback = (error: string) => {
    showToast(error, "error");
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const buyTip = () => {

    const successCallback = () => {
      setLoadingBuy(false);
      setWeCoinModalVisible(false);
      boughtTips.current.push(currentQuestion?.id as number);
      setShowTipModal(true);
    };

    const errorCallback = (error: string) => {
      setLoadingBuy(false);
      setWeCoinModalVisible(false);
      showToast(error, "error");
    };

    setLoadingBuy(true);
    useWeCoin(currentQuestion?.id as number, successCallback, errorCallback);

  };

  const showTip = () => {
    if (boughtTips.current.includes(currentQuestion?.id as number)) {
      setShowTipModal(true);
      return;
    }
    
    setWeCoinModalVisible(true);

  };

  const renderAnswerQuestionButton = () => {

    if (isMobile) {
      return (
        <MobileButton
          onClick={answerQuestion}
          label="Responder"
        />
      );
    }

    return (
      <PrimaryButton
        width="200px"
        onClick={answerQuestion}
        text="Responder"
      />
    );
  };

  const renderNextQuestionButton = () => {

    if (isMobile) {
      return (
        <MobileButton
          onClick={goToNextQuestion}
          label="Próxima >"
        />
      );
    }

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

  const renderAuxButtons = () => {
    return (
      <AuxButtons>
        {
          currentQuestion?.dica &&
          <TerciaryButton
            text="Dica"
            Fsize={1.2}
            colored={false}
            onClick={showTip}
            tip="compre dicas usando suas WeCoins"
          />
        }

        <TerciaryButton
          text="Não sei"
          Fsize={1.2}
          colored={false}
          onClick={jumpQuestion}
          tip="Você também ganha XP e WeCoins por não saber uma questão"
        />
      </AuxButtons>
    );
  };

  const renderBuyModal = () => {
    return (
      <AlertContainer visible={weCoinModalVisible}>
        <Alert>
          <AlertTitle>
            Confirma a compra da dica?
          </AlertTitle>
          <AlertSubTitle>
            {`Você irá usar ${tipPrice[currentQuestion?.dificuldade as keyof Price]} WeCoins`}
          </AlertSubTitle>

          <AlertBtn>
            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1}
              Fweight={500}
              onClick={() => setWeCoinModalVisible(false)}
              outside="black"
              text="Cancelar"
            />

            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1}
              Fweight={500}
              onClick={buyTip}
              outside="blue"
              text="Comprar"
            />
          </AlertBtn>
        </Alert>
      </AlertContainer>
    );

  };

  const renderTipModal = () => {
    return (
      <AlertContainer visible={showTipModal}>
        <Alert>
          <AlertTitle>
            Dica
          </AlertTitle>
          <AlertSubTitle>
            {currentQuestion?.dica}
          </AlertSubTitle>

          <AlertBtn>
            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1}
              Fweight={500}
              onClick={() => setShowTipModal(false)}
              outside="black"
              text="Ok"
            />
          </AlertBtn>
        </Alert>
      </AlertContainer>
    );

  };


  if (loading || sending || loadingBuy) return <Loader size={120} fullScreen />;

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

        {
          !showAnswer && isMobile &&
          renderAuxButtons()
        }

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
          !showAnswer && !isMobile &&
          renderAuxButtons()
        }

        <ButtonContainer>

          {showAnswer ?
            renderNextQuestionButton() :
            renderAnswerQuestionButton()
          }

        </ButtonContainer>
      </Container>

      {renderBuyModal()}
      {renderTipModal()}

      <AlertContainer visible={visible}>
        <Alert>
          <AlertTitle>
            Parabéns!
          </AlertTitle>
          <AlertSubTitle>
            Você finalizou mais um questionário
          </AlertSubTitle>

          <AlertLine>
            <AlertTextKey>
              Nota:
            </AlertTextKey>
            <AlertTextValue>
              {nota}
            </AlertTextValue>
          </AlertLine>

          <AlertLine>
            <AlertTextKey>
              WeCoins:
            </AlertTextKey>
            <AlertTextValue>
              {weCoin}
            </AlertTextValue>
          </AlertLine>

          <AlertLine>
            <AlertTextKey>
              Xp:
            </AlertTextKey>
            <AlertTextValue>
              {xp}
            </AlertTextValue>
          </AlertLine>

          <AlertBtn>
            <SecondaryButton
              Ffamily="montserrat"
              Fsize={1.3}
              Fweight={400}
              onClick={finish}
              outside="blue"
              text="Ok"
            />
          </AlertBtn>

        </Alert>
      </AlertContainer>


    </>
  );
};

export default AnswerQuestionnarie;