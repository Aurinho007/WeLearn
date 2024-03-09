import { useState } from "react";
import ITerciaryButton from "./interface";
import { Container, Button, Text } from "./styles";
import { handleClick } from "../utils";

const TerciaryButton = (props: ITerciaryButton): React.JSX.Element => {
  const { onClick, text } = props;
  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <Container>
      <Button style={props} onClick={() => handleClick(isActive, setIsActive, onClick)}>
        <Text style={props}>{text}</Text>
      </Button>
    </Container>
  );
};

export default TerciaryButton;
