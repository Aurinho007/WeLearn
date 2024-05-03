import {
  Bar,
  Card,
  DataContainer,
  Description,
  FillBar,
  Line,
  PercentNumber,
  RankingIcon,
  Title,
  TitleContainer,
  Value,
} from "./styles";
import { ClassroomCardProps } from "./type";
import ouro from "../../../../assets/images/gold-medal.svg";

const ClassroomCard = (props: ClassroomCardProps) => {
  const {
    ranking,
    title,
    teacherName,
    classRoomId,
    conclusionPercent,
    onClick,
  } = props;

  return (
    <Card onClick={onClick}>
      <TitleContainer>
        <RankingIcon src={ouro} />
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
      <Bar>
        <FillBar conclusionPercent={conclusionPercent} />
        <PercentNumber>{conclusionPercent}%</PercentNumber>
      </Bar>
    </Card>
  );
};

export default ClassroomCard;
