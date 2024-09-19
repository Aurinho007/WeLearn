import {
  Card,
  CheckIcon,
  Checkbox,
  Description,
  DescriptionContainer,
  Title,
  TitleContainer,
} from "./styles";
import QuestionaryCardProps from "./types";
import correctIcon from "../../../../assets/images/correct-icon.svg";
import chevron from "../../../../assets/images/chevron.png";
import { useUser } from "../../../../contexts/UserContext";

const QuestionaryCard = (props: QuestionaryCardProps) => {
  const { title, description, onClick, isDone } = props;

  const { isStudent } = useUser();

  return (
    <Card onClick={onClick}>
      <TitleContainer>
        <Title>{title}</Title>
        {
          isStudent() ?
            <Checkbox>{isDone && <CheckIcon src={correctIcon} />}</Checkbox> :
            <img src={chevron} height={30} style={{objectFit: "contain"}}/>
        }
      </TitleContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Card>
  );
};

export default QuestionaryCard;
