import { useLocation, useNavigate } from "react-router-dom";
import IClassroom from "../../interfaces/Classroom";
import PageHeader from "../../components/PageHeader";
import IQuestionnarie from "../../interfaces/Questionnarie";
import ErroCard from "../../components/ErrorCard/index";
import { Container, Dropdown, DropdownItem, Header, HeaderItem, Item, ItemAction, Line, QuestionsHeader, Separator, TableContainer, Title } from "./styles";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import QuestionModal from "./components/QuestionModal";
import { useEffect, useRef, useState } from "react";
import { delQuestion, getQuestions } from "../../service/question";
import IQuestion from "../../interfaces/Question";
import Loader from "../../components/Loader";
import empyQuestion from "./constants";
import { useToast } from "../../contexts/ToastContext";
import ROUTES from "../../constants/routesConstants";
import { releaseQuestionnarie } from '../../service/questionnnarie';
import { useUser } from "../../contexts/UserContext";

const Questionnaire = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"new" | "edit" | "view">("new");
  const [question, setQuestion] = useState<IQuestion>(empyQuestion);

  const optionsRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { showToast } = useToast();
  const { isMobile } = useUser();

  const { room, questionnaire }: { room: IClassroom, questionnaire: IQuestionnarie } = location.state || {};

  useEffect(() => {
    if (!room || !questionnaire) {
      navigate(ROUTES.HOME);
      return;
    }

    getQuestions(questionnaire.id, getSuccesCallback, getErrorCallback);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const getSuccesCallback = (response: IQuestion[]) => {
    setQuestions(response);
    setLoading(false);
  };

  const getErrorCallback = (error: string) => {
    setError(error);
    setLoading(false);
  };

  const createQuestion = () => {
    setModalType("new");
    setShowModal(true);
  };

  const viewQuestion = (question: IQuestion) => {
    const currentQuestion = question;
    setModalType("view");
    setQuestion(currentQuestion);
    setShowModal(true);
    setShowOptions(false);
  };

  const editQuestion = (question: IQuestion) => {
    const currentQuestion = question;
    setModalType("edit");
    setQuestion(currentQuestion);
    setShowModal(true);
    setShowOptions(false);
  };

  const deleteQuestion = (id: number) => {
    const confirmDelete = confirm("Apagar questão?");
    if (confirmDelete) {
      delQuestion(id, delQuestionSucessCallback, delQuestionErrorCallback);
    }
    setShowOptions(false);
  };

  const delQuestionSucessCallback = () => {
    showToast("Questão deletada", "info");
    window.location.reload();
  };

  const delQuestionErrorCallback = (error: string) => {
    showToast(error, "error");
  };

  const release = () => {

    if(questions.length < 1 || !questions){
      showToast("É necessário pelo menos uma questão para o envio", "error");
      return;
    }

    const confirmRelease = confirm("Confirma o envio para os alunos?\n(Não pode ser desfeito)");
    if (confirmRelease) releaseQuestionnarie(questionnaire.id, releaseQuestionSucessCallback, releaseQuestionErrorCallback);
  };

  const releaseQuestionSucessCallback = () => {
    showToast("Questionário liberado com sucesso", "success");
    questionnaire.liberado = true;
  };

  const releaseQuestionErrorCallback = (error: string) => {
    showToast(error, "error");
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

  const renderActionButtons = () => {
    if (questionnaire.liberado) {
      return (
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={400}
          outside="blue"
          text="Dashboard"
          onClick={() => alert("Em breve!")}
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
    if( isMobile ) {
      return question.substring(0, 10).concat("...");
    } else {
      return question.substring(0, 40).concat(`${question.length < 40 ? "" : "..."}`);
    }
  }

  if (loading) return <Loader height={130} width={130} />;

  return (
    <>
      <PageHeader
        title={room.nomeSala}
        subTitle={`${questionnaire.nome}`}
        hasBackButton
      />

      <Container>
        <QuestionsHeader break={questionnaire.liberado}>
          <Title>Questões</Title>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {renderActionButtons()}
          </div>

        </QuestionsHeader>

        <TableContainer>
          {questions && questions.length > 0 &&
            <>
              <Header>
                <HeaderItem>Questão</HeaderItem>
                <HeaderItem>Resumo</HeaderItem>
                <HeaderItem>Dificuldade</HeaderItem>
              </Header>
              <Separator />
            </>

          }

          {
            questions && questions.length > 0 ?
              questions.map((item, index) => {
                return (
                  <Line showOptions={showOptions} key={index} onClick={() => isMobile ? setShowOptions(true) : null} >
                    <Item>
                      {index + 1}
                    </Item>
                    <Item>
                      {getQuestionResume(item.enunciado)}
                    </Item>
                    <Item>
                      {item.dificuldade}
                    </Item>
                    <ItemAction ref={optionsRef} >
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
              :
              <>
                <ErroCard
                  text="Parece que esta sala ainda não tem questões"
                  buttonText="Adicionar questão"
                  onClick={createQuestion}
                />
              </>
          }


        </TableContainer>
        <QuestionModal
          showModal={showModal}
          setShowModal={setShowModal}
          questionnaireId={questionnaire.id}
          modalType={modalType}
          question={question}
        />
      </Container>
    </>
  );
};

export default Questionnaire;