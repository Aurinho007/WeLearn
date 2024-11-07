import { useLocation, useNavigate } from "react-router-dom";
import IClassroom from "../../interfaces/Classroom";
import PageHeader from "../../components/PageHeader";
import IQuestionnarie from "../../interfaces/Questionnarie";
import ErroCard from "../../components/ErrorCard/index";
import { Container, Dropdown, DropdownItem, Header, HeaderItem, Item, ItemAction, Line, QuestionsHeader, Separator, TableContainer, Title } from "./styles";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import QuestionModal from "./components/QuestionModal";
import { useEffect, useState } from "react";
import { delQuestion, getQuestions } from "../../service/question";
import IQuestion from "../../interfaces/Question";
import Loader from "../../components/Loader";
import empyQuestion from "./constants";
import { useToast } from "../../contexts/ToastContext";
import ROUTES from "../../constants/routesConstants";
import { releaseQuestionnarie } from '../../service/questionnnarie';

const Questionnaire = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"new" | "edit" | "view">("new");
  const [question, setQuestion] = useState<IQuestion>(empyQuestion);

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { showToast } = useToast();

  const { room, questionnaire }: { room: IClassroom, questionnaire: IQuestionnarie } = location.state || {};

  useEffect(() => {
    if (!room || !questionnaire) {
      navigate(ROUTES.HOME);
      return;
    }

    getQuestions(questionnaire.id, getSuccesCallback, getErrorCallback);
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
  };

  const editQuestion = (question: IQuestion) => {
    const currentQuestion = question;
    setModalType("edit");
    setQuestion(currentQuestion);
    setShowModal(true);
  };

  const deleteQuestion = (id: number) => {
    const confirmDelete = confirm("Apagar questão?");
    if (confirmDelete) {
      delQuestion(id, delQuestionSucessCallback, delQuestionErrorCallback);
    }
  };

  const delQuestionSucessCallback = () => {
    showToast("Questão deletada", "info");
    window.location.reload();
  };

  const delQuestionErrorCallback = (error: string) => {
    showToast(error, "error");
  };

  const release = () => {

    // if(questions.length < 3 || !questions){
    //   showToast("É necessário pelo menos 3 questões para o envio", "error");
    //   return;
    // }

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
          text="Enviar questionário para alunos"
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

  console.log(questionnaire.liberado)
  if (loading) return <Loader height={130} width={130} />;

  return (
    <>
      <PageHeader
        title={room.nomeSala}
        subTitle={`Questionário ${questionnaire.id}`}
        hasBackButton
      />

      <Container>
        <QuestionsHeader>
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
                <HeaderItem>Tipo</HeaderItem>
                <HeaderItem>Dificuldade</HeaderItem>
              </Header>
              <Separator />
            </>

          }

          {
            questions && questions.length > 0 ?
              questions.map((item, index) => {
                return (
                  <Line key={index}>
                    <Item>
                      {index + 1}
                    </Item>
                    <Item>
                      Múltipla escolha
                    </Item>
                    <Item>
                      {item.dificuldade}
                    </Item>
                    <ItemAction>
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