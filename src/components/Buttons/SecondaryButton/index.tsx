import ISecondaryButton from "./interface";
import { Container, Button, Text } from "./styles";

const SecondaryButton = (props: ISecondaryButton): React.JSX.Element => {
  const { onClick, text } = props;

  return (
    <Container>
      <Button style={props} onClick={onClick}>
        <Text style={props}>{text}</Text>
      </Button>
    </Container>
  );
};

export default SecondaryButton;
