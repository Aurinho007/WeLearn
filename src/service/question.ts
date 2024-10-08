import QuestionDTO from "../dtos/question";
import IQuestion from "../interfaces/Question";
import { BASE_URL, doRequest } from "./api";

const GET_QUESTIONS_URL = `${BASE_URL}/questionaries/questions/`;
const CREATE_QUESTION_URL = `${BASE_URL}/questionaries/questions`;
const UPDATE_QUESTION_URL = `${BASE_URL}/questionaries/questions`;
const DELETE_QUESTION_URL = `${BASE_URL}/questionaries/questions/`;

export const getQuestions = (idQuestionnarie: number, successCallback: (questions: IQuestion[]) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_QUESTIONS_URL+idQuestionnarie, "GET")
    .then(response => successCallback(response as IQuestion[]))
    .catch(error => errorCallback(error.message));
};

export const createQuestion = (question: QuestionDTO, successCallback: () => void, errorCallback: (error: string) => void) => {
  doRequest(CREATE_QUESTION_URL, "POST", question)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

export const updateQuestion = (question: QuestionDTO, successCallback: () => void, errorCallback: (error: string) => void) => {
  doRequest(UPDATE_QUESTION_URL, "PUT", question)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

export const delQuestion = (questionId: number, successCallback: () => void, errorCallback: (error: string) => void) => {
  doRequest(DELETE_QUESTION_URL+questionId, "DELETE")
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};