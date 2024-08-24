import { Container, Elo } from "./styles";
import QuestionaryDataCardProps from "./types";

import diamante from "../../assets/images/diamond-medal.svg";
import ouro from "../../assets/images/gold-medal.svg";
import prata from "../../assets/images/silver-medal.svg";
import bronze from "../../assets/images/bronze-medal.svg";

const eloIcons: { [key: string]: string } = {
  diamante,
  ouro,
  prata,
  bronze
};

const RankingIcon = (props: QuestionaryDataCardProps): JSX.Element => {
  const { elo, size } = props;
  
  const icon = eloIcons[elo.toLowerCase()] || bronze;

  return (
    <Container>
      <Elo src={icon} size={size} />
    </Container>
  );
};

export default RankingIcon;
