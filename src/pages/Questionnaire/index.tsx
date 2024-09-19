import { useLocation } from "react-router-dom";
import IClassroom from "../../interfaces/Classroom";
import PageHeader from "../../components/PageHeader";
import IQuestionnarie from "../../interfaces/Questionnarie";
import { Container, Header, HeaderItem, Item, Line, QuestionsHeader, Separator, TableContainer, Title } from "./styles";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import IQuestion from "../../interfaces/Question";
import NewQuestionModal from "./components/NewQuestionModal";
import { useState } from "react";

const questionnaire = () => {

  const location = useLocation();
  const { room, questionnarie }: { room: IClassroom, questionnarie: IQuestionnarie } = location.state || {};

  const [showModal, setShowModal] = useState<boolean>(false);

  const mockLines: IQuestion[] = [
    {
      id: 1,
      tipo: "Múltipla escolha",
      enunciado: "Quem descobriu o Brasil?",
      dificuldade: "Fácil",
      alternativaCorreta: "a",
      alternativaA: "Pedro Cabral",
      alternativaB: "Marcal",
      alternativaC: "Bolsonaro",
      alternativaD: "Lula"
    },
    {
      id: 2,
      tipo: "Múltipla escolha",
      enunciado: "Quem descobriu o Brasil?",
      dificuldade: "Difícil",
      alternativaCorreta: "a",
      alternativaA: "Pedro Cabral",
      alternativaB: "Marcal",
      alternativaC: "Bolsonaro",
      alternativaD: "Lula"
    },

  ];

  return (
    <>
      <PageHeader
        title={room.nomeSala}
        subTitle={`Questionário ${questionnarie.id}`}
      />

      <Container>
        <QuestionsHeader>
          <Title>Questões</Title>
          <SecondaryButton
            Ffamily="montserrat"
            Fsize={1}
            Fweight={400}
            outside="blue"
            text="Adicionar Questão"
            onClick={() => setShowModal(true)}
          />
        </QuestionsHeader>

        <TableContainer>
          <Header>
            <HeaderItem>Questão</HeaderItem>
            <HeaderItem>Tipo</HeaderItem>
            <HeaderItem>Dificuldade</HeaderItem>
          </Header>

          <Separator />

          {
            mockLines.map((item, index) => {
              return (
                <Line key={index}>
                  <Item>
                    {item.id}
                  </Item>
                  <Item>
                    {item.tipo}
                  </Item>
                  <Item>
                    {item.dificuldade}
                  </Item>
                </Line>

              );
            })
          }
        </TableContainer>
        <NewQuestionModal showModal={showModal} setShowModal={setShowModal}/>
      </Container>
    </>
  );
};

export default questionnaire;