import { useEffect, useState } from "react";
import { ButtonGroup, Container, DropDown, Input, Label, Modal, QContainer, QuestionContainer, SideContainer, Title } from "./styles";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import { createQuestion, updateQuestion } from "../../../../service/question";
import QuestionDTO from "../../../../dtos/question";
import { useToast } from "../../../../contexts/ToastContext";
import IQuestion from "../../../../interfaces/Question";

type NewQuestionModalProps = {
  questionnaireId: number;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: "new" | "view" | "edit";
  question: IQuestion;
};

type Fields = {
  statement: string;
  correct: string;
  tip: string;
  dificulty: string;
  alternativeA: string;
  alternativeB: string;
  alternativeC: string;
  alternativeD: string;
};

const QuestionModal = ({ showModal, setShowModal, questionnaireId, question, modalType }: NewQuestionModalProps) => {
  const { showToast } = useToast();
  const viewOnly = modalType === "view";

  const [fields, setFields] = useState<Fields>({
    statement: "",
    correct: "",
    tip: "",
    dificulty: "",
    alternativeA: "",
    alternativeB: "",
    alternativeC: "",
    alternativeD: "",
  });

  useEffect(() => {
    setFields({
      statement: question.enunciado || "",
      correct: question.alternativaCorreta || "",
      tip: question.dica || "",
      dificulty: question.dificuldade || "",
      alternativeA: question.alternativaA || "",
      alternativeB: question.alternativaB || "",
      alternativeC: question.alternativaC || "",
      alternativeD: question.alternativaD || "",
    });
    if (modalType === "new") resetFields();
  }, [showModal]);

  const resetFields = () =>
    setFields({
      statement: "",
      correct: "",
      tip: "",
      dificulty: "",
      alternativeA: "",
      alternativeB: "",
      alternativeC: "",
      alternativeD: "",
    });

  const handleFieldChange = (field: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [field]: event.target.value }));

  const handleCancelButton = () => {
    resetFields();
    setShowModal(false);
  };

  const addOrUpdateQuestion = () => {
    const { statement, correct, tip, dificulty, alternativeA, alternativeB, alternativeC, alternativeD } = fields;

    if (!statement || !tip || !dificulty || !correct || !alternativeA || !alternativeB || !alternativeC || !alternativeD) {
      showToast("Todos os campos devem ser preenchidos", "info");
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

    const successCallback = () => {
      showToast(`Questão ${modalType === "edit" ? "editada" : "criada"}`, "success");
      location.reload();
    };

    const errorCallback = (error: string) => showToast(error, "error");

    if (modalType === "edit") {
      updateQuestion(newQuestion, successCallback, errorCallback);
    } else {
      createQuestion(newQuestion, successCallback, errorCallback);
    }

    setShowModal(false);
  };

  const handleCloseModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <Container onClick={handleCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>{modalType === "new" ? "Nova questão" : modalType === "view" ? `Questão ${question?.id}` : "Editar questão"}</Title>
        <QContainer>
          <SideContainer>
            <QuestionContainer>
              <Label>Enunciado</Label>
              <Input
                placeholder="Quem descobriu o Brasil?"
                value={fields.statement}
                onChange={handleFieldChange("statement")}
                disabled={viewOnly}
              />
            </QuestionContainer>
            <QuestionContainer>
              <Label>Dica</Label>
              <Input
                placeholder="Foi um português"
                value={fields.tip}
                onChange={handleFieldChange("tip")}
                disabled={viewOnly}
              />
            </QuestionContainer>


            <QuestionContainer>
              <Label>Alternativa correta</Label>
              <DropDown value={fields.correct} onChange={handleFieldChange("correct")} disabled={viewOnly}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </DropDown>
            </QuestionContainer>

            <QuestionContainer>
              <Label>Dificuldade</Label>
              <DropDown value={fields.dificulty} onChange={handleFieldChange("dificulty")} disabled={viewOnly}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
              </DropDown>
            </QuestionContainer>
          </SideContainer>

          <SideContainer>
            {(["A", "B", "C", "D"] as const).map((alt) => (
              <QuestionContainer key={alt}>
                <Label>Alternativa {alt}</Label>
                <Input
                  placeholder={`Alternativa ${alt}`}
                  value={fields[`alternative${alt}` as keyof Fields]}
                  onChange={handleFieldChange(`alternative${alt}` as keyof Fields)}
                  disabled={viewOnly}
                />
              </QuestionContainer>
            ))}
          </SideContainer>
        </QContainer>

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <ButtonGroup>
            <SecondaryButton
              text={modalType === "view" ? "Voltar" : "Cancelar"}
              onClick={handleCancelButton}
              width="100%"
              outside={"blue"}
              Ffamily="roboto"
              Fweight={500}
              Fsize={1.45}
            />

            {modalType !== "view" &&
              <>
                <div style={{ height: 20 }}></div>
                <PrimaryButton text={modalType === "new" ? "Adicionar" : "Editar"} onClick={addOrUpdateQuestion} />
              </>
            }
          </ButtonGroup>
        </div>
      </Modal>
    </Container>
  );
};

export default QuestionModal;
