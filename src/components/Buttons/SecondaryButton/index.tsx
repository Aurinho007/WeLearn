import { useState } from "react";
import { handleClick } from "../utils";
import ISecondaryButton from "./interface";
import { Container, Button, Text } from "./styles";

const SecondaryButton = (props: ISecondaryButton): React.JSX.Element => {
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

export default SecondaryButton;
