import { IAverage, IDashboardPercent, IPerStudent, IQuestionInfo } from "../interfaces/Dashboard";
import { BASE_URL, doRequest } from "./api";

const GET_PERCENT = `${BASE_URL}/questionaries/dashboard/percent/`;
const GET_PER_STUDENT = `${BASE_URL}/questionaries/dashboard/perStudent/`;
const GET_AVERAGE = `${BASE_URL}/questionaries/dashboard/average/`;
const GET_QUESTION_INFO = `${BASE_URL}/questionaries/dashboard/questionInfo`;


export const getPercent = async (idQuestionnarie: number, successCallback: (percents: IDashboardPercent) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_PERCENT+idQuestionnarie, "GET")
    .then(response => successCallback(response as IDashboardPercent ))
    .catch(error => errorCallback(error.message));
};

export const getAverage = async (idQuestionnarie: number, successCallback: (percents: IAverage) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_AVERAGE+idQuestionnarie, "GET")
    .then(response => successCallback(response as IAverage ))
    .catch(error => errorCallback(error.message));
};

export const getPerStudent = async (idQuestionnarie: number, successCallback: (percents: IPerStudent) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_PER_STUDENT+idQuestionnarie, "GET")
    .then(response => successCallback(response as IPerStudent ))
    .catch(error => errorCallback(error.message));
};


export const getQuestionInfo = async (idQuestionnarie: number, successCallback: (percents: IQuestionInfo) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_QUESTION_INFO+idQuestionnarie, "GET")
    .then(response => successCallback(response as IQuestionInfo ))
    .catch(error => errorCallback(error.message));
};
