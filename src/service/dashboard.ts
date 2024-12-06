import { IAverage, IDashboardPercent, IPerStudent, IQuestionInfoResponse, IReport } from "../interfaces/Dashboard";
import { BASE_URL, doRequest } from "./api";

const GET_PERCENT = `${BASE_URL}/questionaries/dashboard/percent/`;
const GET_AVERAGE = `${BASE_URL}/questionaries/dashboard/average/`;
const GET_REPORT = `${BASE_URL}/questionaries/dashboard/report/`;
const GET_QUESTION_INFO = `${BASE_URL}/questionaries/dashboard/questionInfo/`;
const GET_PER_STUDENT = `${BASE_URL}/questionaries/dashboard/perStudent/`;


export const getPercent = async (idQuestionnarie: number, successCallback: (percents: IDashboardPercent) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_PERCENT+idQuestionnarie, "GET")
    .then(response => successCallback(response as IDashboardPercent ))
    .catch(error => errorCallback(error.message));
};

export const getAverage = async (idQuestionnarie: number, successCallback: (percents: IAverage) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_AVERAGE+idQuestionnarie, "GET")
    .then(response => successCallback(response as IAverage ))
    .catch(error => errorCallback(error.message));
};


export const getReport = async (idQuestionnarie: number, successCallback: (percents: IReport) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_REPORT+idQuestionnarie, "GET")
    .then(response => successCallback(response as IReport ))
    .catch(error => errorCallback(error.message));
};


export const getQuestionInfo = async (idQuestionnarie: number, successCallback: (percents: IQuestionInfoResponse) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_QUESTION_INFO+idQuestionnarie, "GET")
    .then(response => successCallback(response as IQuestionInfoResponse ))
    .catch(error => errorCallback(error.message));
};

export const getPerStudent = async (idQuestionnarie: number, successCallback: (percents: IPerStudent) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_PER_STUDENT+idQuestionnarie, "GET")
    .then(response => successCallback(response as IPerStudent ))
    .catch(error => errorCallback(error.message));
};

