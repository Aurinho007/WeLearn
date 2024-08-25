import { Card, Description, Line, Value } from "./styles";
import QuestionaryDataCardProps from "./types";

const ClassroomDataCard = (props: QuestionaryDataCardProps): JSX.Element => {
  const { teacherName, classroomId, elo } = props;

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
        <Value>{elo}</Value>
      </Line>
    </Card>
  );
};

export default ClassroomDataCard;
