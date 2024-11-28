import { useState } from "react";
import { handleClick } from "../utils";
import ISecondaryButton from "./interface";
import { Button } from "./styles";

const SecondaryButton = (props: ISecondaryButton): React.JSX.Element => {
  const { onClick, text } = props;
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <Button style={props} onClick={() => handleClick(isActive, setIsActive, onClick)}>
      {text}
    </Button>
  );
};

export default SecondaryButton;
