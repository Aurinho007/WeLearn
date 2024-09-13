import { CreateQuestionnarieDTO } from "../dtos/questionnarie";
import IQuestionnarie from "../interfaces/Questionnarie";
import { BASE_URL, doRequest } from "./api";

const GET_QUESTIONNARIES_URL = `${BASE_URL}/questionaries/`;
const CREATE_QUESTIONNARIE_URL = `${BASE_URL}/questionaries`;


export const getAllQuestionnaries = (idClassroom: number, successCallback: (questionnaries: IQuestionnarie[]) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_QUESTIONNARIES_URL+idClassroom, "GET")
    .then(response => successCallback(response as IQuestionnarie[]))
    .catch(error => errorCallback(error.message));
};

export const createQuestionnarie = (questionnaire: CreateQuestionnarieDTO,successCallback: () => void, errorCallback: (error: string) => void) => {
  doRequest(CREATE_QUESTIONNARIE_URL, "POST", questionnaire)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};
