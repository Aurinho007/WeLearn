import { useState } from "react";
import IButton from "./interface";
import { Container, Button, Text } from "./styles";
import { handleClick } from "../utils";

const PrimaryButton = (props: IButton): React.JSX.Element => {
  const { onClick, text } = props;

  const [isActive, setIsActive] = useState<boolean>(true)


  return (
    <Container>
      <Button style={props} onClick={() => handleClick(isActive, setIsActive, onClick)}>
        <Text>{text}</Text>
      </Button>
    </Container>
  );
};

export default PrimaryButton;
