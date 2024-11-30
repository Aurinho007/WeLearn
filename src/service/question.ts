import { GenerateQuestionDTO, QuestionDTO } from "../dtos/question";
import IQuestion from "../interfaces/Question";
import { BASE_URL, doRequest } from "./api";

const GET_QUESTIONS_URL = `${BASE_URL}/questionaries/questions/`;
const CREATE_QUESTION_URL = `${BASE_URL}/questionaries/questions`;
const UPDATE_QUESTION_URL = `${BASE_URL}/questionaries/questions`;
const DELETE_QUESTION_URL = `${BASE_URL}/questionaries/questions/`;
const GENERATE_QUESTION_URL = `${BASE_URL}/questionaries/questions/generate/`;


export const getQuestions = async (idQuestionnarie: number, successCallback: (questions: IQuestion[]) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_QUESTIONS_URL+idQuestionnarie, "GET")
    .then(response => successCallback(response as IQuestion[]))
    .catch(error => errorCallback(error.message));
};

export const createQuestion = async (question: QuestionDTO, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(CREATE_QUESTION_URL, "POST", question)
    .then(() => successCallback())
    .catch(error => errorCallback(error.message));
};

export const updateQuestion = async (question: QuestionDTO, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(UPDATE_QUESTION_URL, "PUT", question)
    .then(() => successCallback())
    .catch(error => errorCallback(error.message));
};

export const delQuestion = async (questionId: number, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(DELETE_QUESTION_URL+questionId, "DELETE")
    .then(() => successCallback())
    .catch(error => errorCallback(error.message));
};

export const generateQuestion = async (params: GenerateQuestionDTO, successCallback: (question: QuestionDTO) => void, errorCallback: (error: string) => void) => {
  await doRequest(GENERATE_QUESTION_URL, "POST", params)
    .then(response => successCallback(response as QuestionDTO))
    .catch(error => errorCallback(error.message));
};


