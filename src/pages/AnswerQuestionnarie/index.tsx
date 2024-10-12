import { useLocation } from "react-router-dom";
import IClassroom from "../../interfaces/Classroom";
import IQuestionnarie from "../../interfaces/Questionnarie";

const AnswerQuestionnarie = () => {
  const location = useLocation();
  const { room, questionnaire }: { room: IClassroom, questionnaire: IQuestionnarie } = location.state || {};

  return (
    <>
      <h1>{room.id}</h1>
      <h2>{questionnaire.nome}</h2>
    </>
  );
};

export default AnswerQuestionnarie;