import { Container, PrimaryBtn } from "./styles";

interface MobileButtonProps {
  label: string
  onClick: () => void
}

const MobileButton = (props: MobileButtonProps) => {
  const {  label, onClick } = props;
  return (
    <Container>
      <PrimaryBtn onClick={onClick}>
        {label}
      </PrimaryBtn>
    </Container>
  );
};

export default MobileButton;
