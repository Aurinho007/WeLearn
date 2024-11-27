import { useState } from "react";
import { ButtonContainer, CancelBtn, ConfirmBtn, Container, Input, Modal, SubTitle, Title } from "./styles";

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

          <CancelBtn onClick={handleCancel}>
            Cancelar
          </CancelBtn>

          <ConfirmBtn onClick={handleConfirm}>
            {buttonText}
          </ConfirmBtn>
        </ButtonContainer>

      </Modal>
    </Container>
  )

};

export default InputModal;