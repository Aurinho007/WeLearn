import { useEffect, useState } from "react";
import { ButtonGroup, Container, DropDown, Input, Label, Modal, QContainer, QuestionContainer, Title } from "./styles";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../../components/Buttons/SecondaryButton/index";
import { createQuestion, updateQuestion } from "../../../../service/question";
import QuestionDTO from "../../../../dtos/question";
import { useToast } from "../../../../contexts/ToastContext";
import IQuestion from "../../../../interfaces/Question";

type NewQuestionModalProps = {
  questionnaireId: number,
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  modalType: "new" | "view" | "edit",
  question: IQuestion,
}

const QuestionModal = (props: NewQuestionModalProps) => {
  const { showModal, setShowModal, questionnaireId, question, modalType } = props;

  const [statement, setStatement] = useState<string>(question.enunciado);
  const [correct, setCorrect] = useState<string>(question.alternativaCorreta);
  const [tip, setTip] = useState<string>(question.dica);
  const [dificulty, setDificulty] = useState<string>(question.dificuldade);
  const [alternativeA, setAlternativeA] = useState<string>(question.alternativaA);
  const [alternativeB, setAlternativeB] = useState<string>(question.alternativaB);
  const [alternativeC, setAlternativeC] = useState<string>(question.alternativaC);
  const [alternativeD, setAlternativeD] = useState<string>(question.alternativaD);

  const viewOnly: boolean = modalType === "view";

  const { showToast } = useToast();

  useEffect(() => {
    setStatement(question.enunciado);
    setCorrect(question.alternativaCorreta);
    setTip(question.dica);
    setDificulty(question.dificuldade);
    setAlternativeA(question.alternativaA);
    setAlternativeB(question.alternativaB);
    setAlternativeC(question.alternativaC);
    setAlternativeD(question.alternativaD);

    if (modalType === "new") {
      setStatement("");
      setCorrect("");
      setTip("");
      setDificulty("");
      setAlternativeA("");
      setAlternativeB("");
      setAlternativeC("");
      setAlternativeD("");
    }
  }, [showModal]);

  const handleChangeStatement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatement(event.target.value);
  };

  const handleChangeCorrect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCorrect(event.target.value);
  };

  const handleChangeTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTip(event.target.value);
  };

  const handleChangeDificulty = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDificulty(event.target.value);
  };

  const handleChangeAlternativeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativeA(event.target.value);
  };

  const handleChangeAlternativeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativeB(event.target.value);
  };

  const handleChangeAlternativeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativeC(event.target.value);
  };

  const handleChangeAlternativeD = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativeD(event.target.value);
  };

  const handleCancelButton = () => {
    setStatement("");
    setCorrect("");
    setTip("");
    setDificulty("");
    setAlternativeA("");
    setAlternativeB("");
    setAlternativeC("");
    setAlternativeD("");
    setShowModal(false);
  };

  const addQuestion = (): void => {

    if (!statement) {
      showToast("Digite um enunciado", "info");
      return;
    }
    if (!tip) {
      showToast("Digite uma dica", "info");
      return;
    }
    if (!dificulty) {
      showToast("Selecione um dificuldade", "info");
      return;
    }
    if (!correct) {
      showToast("Selecione a alternativa correta", "info");
      return;
    }
    if (!alternativeA) {
      showToast("Digite a alternativa A", "info");
      return;
    }
    if (!alternativeB) {
      showToast("Digite a alternativa B", "info");
      return;
    }
    if (!alternativeC) {
      showToast("Digite a alternativa C", "info");
      return;
    }
    if (!alternativeD) {
      showToast("Digite a alternativa D", "info");
      return;
    }

    const newQuestion: QuestionDTO = {
      idQuestionario: questionnaireId,
      id: question.id,
      enunciado: statement,
      dificuldade: dificulty,
      dica: tip,
      alternativaCorreta: correct,
      alternativaA: alternativeA,
      alternativaB: alternativeB,
      alternativaC: alternativeC,
      alternativaD: alternativeD,
    };

    if (modalType === "edit") {
      updateQuestion(newQuestion, updateSuccessCallBack, updateErrorCallback);
      window.location.reload();
      setShowModal(false);
    } else {
      createQuestion(newQuestion, createSuccessCallBack, createErrorCallback);
    }

  };

  const createSuccessCallBack = () => {
    showToast("Questão criada", "success");
    location.reload();
  };

  const createErrorCallback = (error: string) => {
    showToast(error, "error");
  };

  const updateSuccessCallBack = () => {
    showToast("Questão criada", "success");
    location.reload();
  };

  const updateErrorCallback = (error: string) => {
    showToast(error, "error");
  };


  const handleCloseModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  if (!showModal) {
    return;
  }

  return (
    <Container onClick={handleCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>
          {
            modalType === "new" ? "Nova questão" : modalType === "view" ? `Questão ${question?.id}` : "Editar questão"
          }
        </Title>
        <QContainer>
          <QuestionContainer>
            <Label>Enunciado</Label>
            <Input
              placeholder="Quem descobriu o Brasil?"
              value={statement}
              onChange={handleChangeStatement}
              disabled={viewOnly}
            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Dica</Label>
            <Input
              placeholder="Foi um português"
              value={tip}
              onChange={handleChangeTip}
              disabled={viewOnly}
            />
          </QuestionContainer>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <QuestionContainer>
              <Label>Alternativa correta</Label>
              <DropDown placeholder="Selecionar" value={correct} onChange={handleChangeCorrect} disabled={viewOnly}>
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </DropDown>
            </QuestionContainer>

            <QuestionContainer style={{ marginLeft: "36px" }}>
              <Label>Dificuldade</Label>
              <DropDown placeholder="Selecionar" value={dificulty} onChange={handleChangeDificulty} disabled={viewOnly}>
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="Fácil">Fácil</option>
                <option value='Médio'>Médio</option>
                <option value="Difícil">Difícil</option>
              </DropDown>
            </QuestionContainer>
          </div>

          <QuestionContainer>
            <Label>Alternativa A</Label>
            <Input
              value={alternativeA}
              placeholder="Santos Dumont"
              onChange={handleChangeAlternativeA}
              disabled={viewOnly}
            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Alternativa B</Label>
            <Input
              value={alternativeB}
              placeholder="Algostinho Carrara"
              onChange={handleChangeAlternativeB}
              disabled={viewOnly}
            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Alternativa C</Label>
            <Input
              value={alternativeC}
              placeholder="Pedro Cabral"
              onChange={handleChangeAlternativeC}
              disabled={viewOnly}
            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Alternativa D</Label>
            <Input
              value={alternativeD}
              placeholder="Silvio Santos"
              onChange={handleChangeAlternativeD}
              disabled={viewOnly}
            />
          </QuestionContainer>
          <div style={{ marginBottom: 40 }}></div>

        </QContainer>

        <ButtonGroup>
          <SecondaryButton
            Ffamily="roboto"
            Fsize={1.45}
            Fweight={500}
            outside="blue"
            text={modalType === "view" ? "Voltar" : "Cancelar"}
            onClick={handleCancelButton}
            width="100%"
          />

          <div style={{ marginBottom: 16 }}></div>
          {
            modalType !== "view" &&
            <PrimaryButton
              text={modalType === "new" ? "Adicionar" : "Editar"}
              onClick={addQuestion}
            />
          }
        </ButtonGroup>

      </Modal>
    </Container>
  );

};

export default QuestionModal;