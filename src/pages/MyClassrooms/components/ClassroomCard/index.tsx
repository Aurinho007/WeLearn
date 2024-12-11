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
import { useUser } from "../../../../contexts/UserContext";

const ClassroomCard = (props: ClassroomCardProps) => {
  const {
    id,
    name,
    elo,
    teacherName,
    conclusionPercent,
    onClick,
  } = props;

  const { isStudent } = useUser();

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
        <Title style={isStudent() ? { marginLeft: "10px" } : {}}>{name}</Title>
      </TitleContainer>
      <DataContainer>
        <Line>
          <Description>Professor</Description>
          <Value>{teacherName.split(" ")[0] +" "+teacherName.split(" ")[1]}</Value>
        </Line>
        <Line>
          <Description>Código</Description>
          <Value>{id}</Value>
        </Line>
        {
          elo &&
          <Line>
            <Description>Elo</Description>
            <Value>{elo}</Value>
          </Line>
        }
        {
          !elo &&
          <div style={{height: 10}}></div>
        }
      </DataContainer>
      {
        conclusionPercent != null && isStudent() &&
        <ConclusionBar
          conclusionPercent={conclusionPercent}
          height={18}
        />
      }
    </Card>
  );
};

export default ClassroomCard;
