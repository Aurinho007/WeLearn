import { AnswerType } from "../pages/AnswerQuestionnarie";
import { BASE_URL, doRequest } from "./api";

const ANSWER_QUESTIONNARIE_URL = `${BASE_URL}/questionaries/answer/`;

export const answerQuestionnarie = (
  idRoom: number,
  idQuestionnarie: number,
  answers: AnswerType[],
  successCallback: () => void,
  errorCallback: (error: string) => void
) => {
  doRequest(ANSWER_QUESTIONNARIE_URL + idRoom +"/"+ idQuestionnarie, "POST", answers)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

