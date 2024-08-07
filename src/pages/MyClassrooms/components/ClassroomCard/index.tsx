import {
  Card,
  DataContainer,
  Description,
  Line,
  Title,
  TitleContainer,
  Value,
} from "./styles";
import { ClassroomCardProps } from "./type";
import RankingIcon from "../../../Classroom/components/RankingIcon";
import ConclusionBar from "../../../../components/ConclusionBar";

const ClassroomCard = (props: ClassroomCardProps) => {
  const {
    ranking,
    title,
    teacherName,
    classRoomId,
    onClick,
  } = props;

  return (
    <Card onClick={onClick}>
      <TitleContainer>
        <RankingIcon 
          size={40}
          ranking="ouro"
        />
        <Title>{title}</Title>
      </TitleContainer>
      <DataContainer>
        <Line>
          <Description>Professor</Description>
          <Value>{teacherName}</Value>
        </Line>
        <Line>
          <Description>Código</Description>
          <Value>{classRoomId}</Value>
        </Line>
        <Line>
          <Description>Ranking</Description>
          <Value>{ranking}</Value>
        </Line>
      </DataContainer>
      <ConclusionBar 
        conclusionPercent={20}
        height={18}
      />
    </Card>
  );
};

export default ClassroomCard;
