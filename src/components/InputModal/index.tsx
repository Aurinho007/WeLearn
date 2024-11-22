import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { ButtonContainer, Container, Input, Modal, SubTitle, Title } from "./styles";

export interface InputModalProps {
  title: string
  subTitle?: string
  placeholder: string
  buttonText: string
  resolve: (value: string | null) => void;
}

const InputModal = (props: InputModalProps) => {
  const { buttonText, placeholder, title, subTitle, resolve } = props;

  const [input, setInput] = useState<string>('');

  const handleConfirm = () => resolve(input);
  const handleCancel = () => resolve(null);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      <Modal>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={handleChangeText}
        />

        <ButtonContainer>

          <SecondaryButton
            Ffamily="montserrat"
            Fsize={20}
            Fweight={500}
            onClick={handleCancel}
            outside="blue"
            text="Cancelar"
            width="100%"
          />

          <PrimaryButton
            onClick={handleConfirm}
            text={buttonText}
            width="80%"
          />

        </ButtonContainer>

      </Modal>
    </Container>
  )

};

export default InputModal;