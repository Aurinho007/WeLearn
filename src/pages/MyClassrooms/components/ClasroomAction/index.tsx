import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import { useToast } from "../../../../contexts/ToastContext";
import { useUser } from "../../../../contexts/UserContext";
import { CreateClassroomDto, EntryClassroomDto } from "../../../../dtos/classroom";
import { createClassroom, entryClassroom } from "../../../../service/classroom";

const ClassroomAction = () => {
  const { isStudent } = useUser();
  const { showToast } = useToast();

  const handleCreateClassroom = () => {
    const className = prompt("Digite o nome da sala:");

    const classroomName: CreateClassroomDto = {
      nome: className as string
    };

    createClassroom(
      classroomName,
      sucessCallback,
      errorCallback
    );
  };

  const handleEnterClassroom = () => {
    const classId = parseInt(prompt("*Esse é um modal de testes*\n\nDigite o Código da sala:") as string);

    const classroomId: EntryClassroomDto = {
      idSala: classId as number
    };

    entryClassroom(
      classroomId,
      sucessCallback,
      errorCallback
    );
  };

  const sucessCallback = () => {
    window.location.reload();
  };

  const errorCallback = (error: string) => {
    showToast(error, "error");
  };

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

