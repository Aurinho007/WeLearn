import { useState } from "react";
import { Input, Label, QuestionarrieContainer, DescriptionContainer, QuestionTitle, Buttons, ButtonsContainer } from "./styles";
import PageHeader from "../../components/PageHeader";
import Question from "../Questionnaire/components/Question";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

type Questionnarie = {
  description: string
  Questions: Question[]

}

type Question = {
  statement: string
  correct: string
  dificulty: string
  alternativeA: string
  alternativeB: string
  alternativeC: string
  alternativeD: string
}

const CreateQuestionarrie = () => {

  const newQuestion: Question = {
    statement: "",
    correct: "",
    dificulty: "",
    alternativeA: "",
    alternativeB: "",
    alternativeC: "",
    alternativeD: "",
  };

  const [description, setDescription] = useState<string>();

  const [questions, setQuestions] = useState<Question[]>([newQuestion]);

  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <PageHeader title="Programação Web" subTitle="Novo questionário" hasBackButton />

      <QuestionarrieContainer>

        <DescriptionContainer>
          <Label>Descrição do questionário</Label>
          <Input
            placeholder="História do descobrimento do Brasil pelos europeus"
            value={description}
            onChange={handleChangeDescription}
          />
        </DescriptionContainer>
        {
          questions.map((item, index) => {
            return (
              <>
                <QuestionTitle>Pergunta {index + 1}</QuestionTitle>
                <Question key={index} />
              </>
            );
          })

        }
      </QuestionarrieContainer>

      <ButtonsContainer>

        <Buttons>
          <SecondaryButton
            text="Adicionar pergunta"
            Ffamily="montserrat"
            Fsize={1.2}
            Fweight={400}
            outside="black"
            onClick={() => setQuestions(prev => [...prev, newQuestion])}
          />
          <SecondaryButton
            text="Salvar questionário"
            Ffamily="montserrat"
            Fsize={1.2}
            Fweight={500}
            outside="blue"
            onClick={() => alert("Em breve")}
          />
        </Buttons>
      </ButtonsContainer>

    </>
  );

};

export default CreateQuestionarrie;