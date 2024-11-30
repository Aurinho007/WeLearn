import { useLocation, useNavigate } from "react-router-dom";
import { IClassroom } from "../../interfaces/Classroom";
import PageHeader from "../../components/PageHeader";
import IQuestionnarie from "../../interfaces/Questionnarie";
import ErroCard from "../../components/ErrorCard/index";
import {
  Container,
  Dropdown,
  DropdownItem,
  Header,
  HeaderItem,
  Item,
  ItemAction,
  Line,
  QuestionsHeader,
  Separator,
  TableContainer,
  Title
} from "./styles";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import QuestionModal from "./components/QuestionModal";
import { useEffect, useRef, useState } from "react";
import { delQuestion, getQuestions } from "../../service/question";
import IQuestion from "../../interfaces/Question";
import Loader from "../../components/Loader";
import { useToast } from "../../contexts/ToastContext";
import ROUTES from "../../constants/routesConstants";
import { releaseQuestionnarie } from "../../service/questionnnarie";
import { useUser } from "../../contexts/UserContext";
import MobileButton from "../../components/Buttons/mobileButton";
import emptyQuestion from "./constants";

const Questionnaire = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"new" | "edit" | "view">("new");
  const [question, setQuestion] = useState<IQuestion>(emptyQuestion);

  const optionsRef = useRef<HTMLDivElement>(null);
  const [showOptionsIndex, setShowOptionsIndex] = useState<number | null>(null);

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { showToast } = useToast();
  const { isMobile } = useUser();

  const [sending, setSending] = useState(false);

  const { room, questionnaire }: { room: IClassroom; questionnaire: IQuestionnarie } = location.state || {};

  useEffect(() => {
    if (!room || !questionnaire) {
      navigate(ROUTES.HOME);
      return;
    }

    setLoading(true);
    setError("");
    getQuestions(questionnaire.id, getSuccesCallback, getErrorCallback);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setShowOptionsIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSuccesCallback = (response: IQuestion[]) => {
    setQuestions(response);
    setSending(false);
    setLoading(false);
  };

  const getErrorCallback = (error: string) => {
    setError(error);
    setSending(false);
    setLoading(false);
  };

  const createQuestion = () => {
    setQuestion({} as IQuestion);
    setModalType("new");
    setShowModal(true);
  };

  const viewQuestion = (question: IQuestion) => {
    setModalType("view");
    setQuestion(question);
    setShowModal(true);
    setShowOptionsIndex(null);
  };

  const editQuestion = (question: IQuestion) => {
    setModalType("edit");
    setQuestion(question);
    setShowModal(true);
    setShowOptionsIndex(null);
  };

  const deleteQuestion = (id: number) => {
    const confirmDelete = confirm("Apagar questão?\n(Não pode ser desfeito)");
    if (confirmDelete) {
      delQuestion(id, delQuestionSucessCallback, delQuestionErrorCallback);
    }
    setShowOptionsIndex(null);
  };

  const delQuestionSucessCallback = () => {
    showToast("Questão deletada", "info");
    window.location.reload();
  };

  const delQuestionErrorCallback = (error: string) => {
    showToast(error, "error");
  };

  const release = () => {
    if (questions.length === 0 || !questions) {
      showToast("É necessário pelo menos uma questão para o envio", "error");
      return;
    }

    const confirmRelease = confirm("Confirma o envio para os alunos?\n(Não pode ser desfeito)");
    if (confirmRelease)
      releaseQuestionnarie(questionnaire.id, releaseQuestionSucessCallback, releaseQuestionErrorCallback);
  };

  const releaseQuestionSucessCallback = () => {
    showToast("Questionário liberado com sucesso", "success");
    questionnaire.liberado = true;
  };

  const releaseQuestionErrorCallback = (error: string) => {
    showToast(error, "error");
  };

  const renderActionButtons = () => {
    if (isMobile) {
      if (questionnaire.liberado) {
        return (
          <MobileButton
            label="Acessar Dashboard"
            onClick={() => navigate(ROUTES.DASHBOARD, { state: { room, questionnaire } })}
          />
        );
      }

      return (
        <>
          <MobileButton label="Enviar para alunos" onClick={release} />
          <SecondaryButton
            Ffamily="montserrat"
            Fsize={1}
            Fweight={500}
            outside="blue"
            text="Adicionar Questão"
            onClick={createQuestion}
          />
        </>
      );
    }

    if (questionnaire.liberado) {
      return (
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={400}
          outside="blue"
          text="Dashboard"
          onClick={() => navigate(ROUTES.DASHBOARD, { state: { room, questionnaire } })}
        />
      );
    }

    return (
      <>
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={400}
          outside="blue"
          text="Enviar p/ alunos"
          onClick={release}
        />
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={400}
          outside="black"
          text="Adicionar Questão"
          onClick={createQuestion}
        />
      </>
    );
  };

  const getQuestionResume = (question: string) => {
    if (isMobile) {
      return question.substring(0, 10).concat("...");
    } else {
      return question.substring(0, 40).concat(`${question.length < 40 ? "" : "..."}`);
    }
  };

  if (loading || sending) return <Loader size={100} fullScreen/>;

  if (error) {
    return (
      <ErroCard text={error} buttonText="Recarregar" onClick={() => window.location.reload()} />
    );
  }

  return (
    <>
      <PageHeader title={room.nomeSala} subTitle={`${questionnaire.nome}`} hasBackButton />

      <Container>
        <QuestionsHeader>
          <Title>Questões</Title>
          <div style={{ display: "flex", gap: 30 }}>{renderActionButtons()}</div>
        </QuestionsHeader>

        <TableContainer>
          {questions && questions.length > 0 && (
            <>
              <Header>
                <HeaderItem>Questão</HeaderItem>
                <HeaderItem>Resumo</HeaderItem>
                <HeaderItem>Dificuldade</HeaderItem>
              </Header>
              <Separator />
            </>
          )}

          {questions && questions.length !== 0 ? (
            questions.map((item, index) => {
              return (
                <Line
                  showOptions={showOptionsIndex === index}
                  key={index}
                  onClick={() =>
                    setShowOptionsIndex(showOptionsIndex === index ? null : index)
                  }
                >
                  <Item>{index + 1}</Item>
                  <Item>{getQuestionResume(item.enunciado)}</Item>
                  <Item>{item.dificuldade}</Item>
                  <ItemAction ref={optionsRef}>
                    <span className="action-dots">...</span>
                    <Dropdown className="dropdown">
                      <DropdownItem onClick={() => editQuestion(item)}>Editar</DropdownItem>
                      <DropdownItem onClick={() => viewQuestion(item)}>Ver</DropdownItem>
                      <DropdownItem onClick={() => deleteQuestion(item.id)}>Apagar</DropdownItem>
                    </Dropdown>
                  </ItemAction>
                </Line>
              );
            })
          ) : (
            <ErroCard
              text="Parece que esta sala ainda não tem questões"
              buttonText="Adicionar questão"
              onClick={createQuestion}
            />
          )}
        </TableContainer>
        <QuestionModal
          showModal={showModal}
          setShowModal={setShowModal}
          questionnaireId={questionnaire.id}
          modalType={modalType}
          question={question}
          sending={sending}
          setSending={setSending}
        />
      </Container>
    </>
  );
};

export default Questionnaire;
