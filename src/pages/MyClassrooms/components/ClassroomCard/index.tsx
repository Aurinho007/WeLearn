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
import RankingIcon from "../../../../components/RankingIcon";
import ConclusionBar from "../../../../components/ConclusionBar";

const ClassroomCard = (props: ClassroomCardProps) => {
  const {
    id,
    name,
    elo,
    teacherName,
    conclusionPercent,
    onClick,
  } = props;

  return (
    <Card onClick={onClick}>
      <TitleContainer>
        {
          elo &&
          <RankingIcon
            size={40}
            elo={elo}
          />
        }
        <Title>{name}</Title>
      </TitleContainer>
      <DataContainer>
        <Line>
          <Description>Professor</Description>
          <Value>{teacherName}</Value>
        </Line>
        <Line>
          <Description>Código</Description>
          <Value>{id}</Value>
        </Line>
        <Line>
          <Description>Elo</Description>
          <Value>{elo}</Value>
        </Line>
      </DataContainer>
      {
        conclusionPercent &&
        <ConclusionBar
          conclusionPercent={conclusionPercent}
          height={18}
        />
      }
    </Card>
  );
};

export default ClassroomCard;
