import { Card, Description, Line, Value } from "./styles";
import QuestionaryDataCardProps from "./types";

const QuestionaryDataCard = (props: QuestionaryDataCardProps): JSX.Element => {
  const { teacherName, classroomId, studentRanking } = props

  return (
    <Card>
      <Line>
        <Description>Professor</Description>
        <Value>{teacherName}</Value>
      </Line>
      <Line>
        <Description>Código</Description>
        <Value>{classroomId}</Value>
      </Line>
      <Line>
        <Description>Ranking</Description>
        <Value>{studentRanking}</Value>
      </Line>
    </Card>
  );
};

export default QuestionaryDataCard;
