import PageHeader from "../../components/PageHeader";
import Question from "./components/Question";
import { QuestionarrieContainer } from "./styles";

const CreateQuestionarrie = () => {

  return (
    <>
      <PageHeader title="Programação Web" subTitle="Novo questionário" hasBackButton />
      <QuestionarrieContainer>
        <Question />
      </QuestionarrieContainer>
    </>
  );

};

export default CreateQuestionarrie;