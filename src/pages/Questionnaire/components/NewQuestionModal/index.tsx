import { useState } from "react";
import { ButtonGroup, Container, DropDown, Input, Label, Modal, QContainer, QuestionContainer, Title } from "./styles";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../../components/Buttons/SecondaryButton/index";

type NewQuestionModalProps = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NewQuestionModal = ({ showModal, setShowModal }: NewQuestionModalProps) => {

  const [statement, setStatement] = useState<string>("");
  const [correct, setCorrect] = useState<string>("");
  const [dificulty, setDificulty] = useState<string>("");
  const [alternativeA, setAlternativeA] = useState<string>("");
  const [alternativeB, setAlternativeB] = useState<string>("");
  const [alternativeC, setAlternativeC] = useState<string>("");
  const [alternativeD, setAlternativeD] = useState<string>("");

  const handleChangeStatement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatement(event.target.value);
  };

  const handleChangeCorrect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCorrect(event.target.value);
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
    setDificulty("");
    setAlternativeA("");
    setAlternativeB("");
    setAlternativeC("");
    setAlternativeD("");
    setShowModal(false);
  };

  const addQuestion = () => {
    alert("Em breve");
  };

  const handleCloseModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <Container onClick={handleCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>
          Nova questão
        </Title>
        <QContainer>
          <QuestionContainer>
            <Label>Enunciado</Label>
            <Input
              placeholder="Quem descobriu o Brasil?"
              value={statement}
              onChange={handleChangeStatement}
            />
          </QuestionContainer>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <QuestionContainer>
              <Label>Alternativa correta</Label>
              <DropDown placeholder="Selecionar" value={correct} onChange={handleChangeCorrect}>
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </DropDown>
            </QuestionContainer>

            <QuestionContainer style={{ marginLeft: "36px" }}>
              <Label>Dificuldade</Label>
              <DropDown placeholder="Selecionar" value={dificulty} onChange={handleChangeDificulty}>
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
            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Alternativa B</Label>
            <Input
              value={alternativeB}
              placeholder="Algostinho Carrara"
              onChange={handleChangeAlternativeB}

            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Alternativa C</Label>
            <Input
              value={alternativeC}
              placeholder="Pedro Cabral"
              onChange={handleChangeAlternativeC}
            />
          </QuestionContainer>

          <QuestionContainer>
            <Label>Alternativa D</Label>
            <Input
              value={alternativeD}
              placeholder="Silvio Santos"
              onChange={handleChangeAlternativeD}
            />
          </QuestionContainer>
          <div style={{marginBottom: 40}}></div>

        </QContainer>

        <ButtonGroup>
          <SecondaryButton
            Ffamily="roboto"
            Fsize={1.45}
            Fweight={500}
            outside="blue"
            text="Cancelar"
            onClick={handleCancelButton}
            width="100%"
          />

          <div style={{marginBottom: 16}}></div>

          <PrimaryButton
            text="Adicionar"
            onClick={addQuestion}
          />
        </ButtonGroup>

      </Modal>
    </Container>
  );

};

export default NewQuestionModal;