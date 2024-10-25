import { useState } from "react";
import ITerciaryButton from "./interface";
import { Container, Button, Text, PopUp, TextPopUp } from "./styles";
import { handleClick } from "../utils";

const TerciaryButton = (props: ITerciaryButton): React.JSX.Element => {
  const { onClick, text, tip } = props;
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false); // Estado para controlar o hover

  return (
    <>
      <Container>
        <Button
          style={props}
          onClick={() => handleClick(isActive, setIsActive, onClick)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && tip && (
            <PopUp>
              <TextPopUp>{tip}</TextPopUp>
            </PopUp>
          )}
          <Text style={props}>{text}</Text>
        </Button>
      </Container>
    </>
  );
};

export default TerciaryButton;
