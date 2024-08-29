import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import { useUser } from "../../../../contexts/UserContext";

type ClassroomActionProps = {
  handleCreateClassroom: () => void
  handleEnterClassroom: () =>  void
}

const ClassroomAction = (props: ClassroomActionProps) => {
  const { handleCreateClassroom, handleEnterClassroom} = props;
  const { isStudent } = useUser(); 

  const renderActionButton = () => {
    if (isStudent()) {
      return (
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={400}
          outside="blue"
          text="Entrar em uma sala"
          onClick={handleEnterClassroom}
        />
      );
    }

    return (
      <SecondaryButton
        Ffamily="montserrat"
        Fsize={1}
        Fweight={400}
        outside="blue"
        text="Adicionar sala"
        onClick={handleCreateClassroom}
      />
    );
  };

  return renderActionButton();


};

export default ClassroomAction;

