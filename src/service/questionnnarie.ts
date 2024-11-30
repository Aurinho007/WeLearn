import { CreateQuestionnarieDTO } from "../dtos/questionnarie";
import IQuestionnarie from "../interfaces/Questionnarie";
import { BASE_URL, doRequest } from "./api";

const GET_QUESTIONNARIES_URL = `${BASE_URL}/questionaries/`;
const CREATE_QUESTIONNARIE_URL = `${BASE_URL}/questionaries/`;
const RELEASE_QUESTIONNARIE_URL = `${BASE_URL}/questionaries/release/`;

export const getAllQuestionnaries = async (idClassroom: number, successCallback: (questionnaries: IQuestionnarie[]) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_QUESTIONNARIES_URL+idClassroom, "GET")
    .then(response => successCallback(response as IQuestionnarie[]))
    .catch(error => errorCallback(error.message));
};

export const createQuestionnarie = async (questionnaire: CreateQuestionnarieDTO, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(CREATE_QUESTIONNARIE_URL, "POST", questionnaire)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

export const releaseQuestionnarie = async (idQuestionnarie: number, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(RELEASE_QUESTIONNARIE_URL+idQuestionnarie, "PUT")
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};