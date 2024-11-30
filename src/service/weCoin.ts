import IQuestionnarie from "../interfaces/Questionnarie";
import { BASE_URL, doRequest } from "./api";

const EXPEND_WECOIN_URL = `${BASE_URL}/buy/`;

export const buyTip = (idQuestion: number, successCallback: (questionnaries: IQuestionnarie[]) => void, errorCallback: (error: string) => void) => {
  doRequest(EXPEND_WECOIN_URL+idQuestion, "GET")
    .then(response => successCallback(response as IQuestionnarie[]))
    .catch(error => errorCallback(error.message));
};
