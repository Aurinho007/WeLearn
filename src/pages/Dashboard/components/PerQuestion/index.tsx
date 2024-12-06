import { useEffect, useState } from "react";
import TerciaryButton from "../../../../components/Buttons/TerciaryButton";
import { Container } from "../../styles";
import { Header, Title, Drop, Dash, ItemContainer, Value, Label, BtnContainer, DataContainer } from "./style";
import { IQuestionInfo, IQuestionInfoResponse } from "../../../../interfaces/Dashboard";
import { getQuestionInfo } from "../../../../service/dashboard";
import Loader from "../../../../components/Loader";
import IQuestion from "../../../../interfaces/Question";
import QuestionModal from "../../../Questionnaire/components/QuestionModal";

type PerQuestionProps = {
  id: number
  questions: IQuestion[]
}

const PerQuestion = (props: PerQuestionProps) => {
  const { id, questions } = props;

  const [questionInfo, setQuestionInfo] = useState<IQuestionInfo[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const [current, setCurrent] = useState<IQuestionInfo>();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function init() {
      getQuestionInfo(id, sucessCallback, errorCallback);
    }

    init();
  }, []);

  const sucessCallback = (response: IQuestionInfoResponse) => {
    setQuestionInfo(response.info);
    setLoading(false);
    setCurrent(response.info[0]);
  };

  const errorCallback = (error: string) => {
    setError(error);
    setLoading(false);
  };

  const onChangeQuestion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuestion = questionInfo?.find(
      (item) => item.questao === parseInt(event.target.value)
    );
    setCurrent(selectedQuestion);
  };


  if (error) {
    return (
      <Container>
        <Header>
          <Title>
            Por questão
          </Title>
          <Drop>
            <option value="-">-</option>
          </Drop>
        </Header>
        <Dash>
          {error}
        </Dash>
      </Container>
    );
  }

  if (loading) {
    return (
      <Dash>
        <Loader size={80} />
      </Dash>
    );
  }

  return (
    <Container>
      <Header>
        <Title>
          Por questão
        </Title>
        <Drop value={current?.questao} onChange={onChangeQuestion}>
          {
            questionInfo?.length && questionInfo.map(item => {
              return (
                <option value={item.questao} key={item.questao}>{`Questão ${item.questao}`}</option>
              );
            })
          }
        </Drop>
      </Header>

      <Dash>
        <DataContainer>
          <ItemContainer>
            <Value>
              {current?.totalRespostas}
            </Value>
            <Label>
              Total de respostas
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.taxaAcerto.toFixed(1)}%
            </Value>
            <Label>
              Taxa de acerto
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.acertos}
            </Value>
            <Label>
              Acertos
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.erros}
            </Value>
            <Label>
              Erros
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.abstencao}
            </Value>
            <Label>
              Abstenções
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.maisErrada}
            </Value>
            <Label>
              Errada mais escolhida
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.dificuldadeSelecionada}
            </Value>
            <Label>
              Dificuldade selecionada
            </Label>
          </ItemContainer>
          <ItemContainer>
            <Value>
              {current?.dificuldadeCalculada}
            </Value>
            <Label>
              Dificuldade Real
            </Label>
          </ItemContainer>
        </DataContainer>

        <BtnContainer>
          <TerciaryButton
            Fsize={1}
            onClick={() => setShowModal(true)}
            text="Ver questão"
            colored={false}
          />
        </BtnContainer>
      </Dash>

      <QuestionModal
        showModal={showModal}
        setShowModal={setShowModal}
        questionnaireId={id}
        modalType={"view"}
        question={questions.find(item => item.idInQuestionarie === current?.questao) as IQuestion}
        setSending={setShowModal} //gambi
      />
    </Container>
  );

};

export default PerQuestion;