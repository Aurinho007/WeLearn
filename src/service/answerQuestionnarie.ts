import { IAnswerQuestionnarie } from "../interfaces/Questionnarie";
import { AnswerType } from "../pages/AnswerQuestionnarie";
import { BASE_URL, doRequest } from "./api";

const ANSWER_QUESTIONNARIE_URL = `${BASE_URL}/questionaries/answer/`;

export const answerQuestionnarie = async (
  idRoom: number,
  idQuestionnarie: number,
  answers: AnswerType[],
  successCallback: (response: IAnswerQuestionnarie) => void,
  errorCallback: (error: string) => void
) => {
  await await doRequest(ANSWER_QUESTIONNARIE_URL + idRoom +"/"+ idQuestionnarie, "POST", answers)
    .then(response => successCallback(response as IAnswerQuestionnarie))
    .catch(error => errorCallback(error.message));
};

