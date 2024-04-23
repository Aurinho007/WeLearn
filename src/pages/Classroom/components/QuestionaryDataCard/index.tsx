import { Card, Description, Line, Value } from "./styles";

const QuestionaryDataCard = () => {
  return (
    <Card>
      <Line>
        <Description>Professor</Description>
        <Value>Maria</Value>
      </Line>
      <Line>
        <Description>Código</Description>
        <Value>1563</Value>
      </Line>
      <Line>
        <Description>Ranking</Description>
        <Value>Ouro</Value>
      </Line>
    </Card>
  );
};

export default QuestionaryDataCard;
