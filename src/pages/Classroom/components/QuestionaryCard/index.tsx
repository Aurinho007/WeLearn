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

const QuestionaryCard = (props: QuestionaryCardProps) => {
  const { title, description, isDone } = props;

  return (
    <Card>
      <TitleContainer>
        <Title>{title}</Title>
        <Checkbox>{isDone && <CheckIcon src={correctIcon} />}</Checkbox>
      </TitleContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Card>
  );
};

export default QuestionaryCard;
