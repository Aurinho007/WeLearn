import { useState } from "react";
import { Container, DropDown, Input, Label, QuestionContainer } from "./styles";

const Question = () => {
  const [statement, setStatement] = useState<string>("");
  const [correct, setCorrect] = useState<string>("");
  const [dificulty, setDificulty] = useState<number>();
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
    setDificulty(parseInt(event.target.value));
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

  return (
    <Container>
      <QuestionContainer>
        <Label>Enunciado</Label>
        <Input
          placeholder="Quem descobriu o Brasil?"
          value={statement}
          onChange={handleChangeStatement}
        />
      </QuestionContainer>

      <div style={{display: "flex", flexDirection: "row"}}>
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

        <QuestionContainer style={{marginLeft: "36px"}}>
          <Label>Dificuldade</Label>
          <DropDown placeholder="Selecionar" value={dificulty} onChange={handleChangeDificulty}>
            <option value="" disabled selected>Selecione uma opção</option>
            <option value={1}>Fácil</option>
            <option value={2}>Médio</option>
            <option value={3}>Difícil</option>
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

    </Container>
  );
};

export default Question;