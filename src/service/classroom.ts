import { CreateClassroomDto, EntryClassroomDto } from "../dtos/classroom";
import { IClassroom, IRanking } from "../interfaces/Classroom";
import { BASE_URL, doRequest } from "./api";

const GET_CLASSROOM_URL = `${BASE_URL}/rooms`;
const CREATE_CLASSROOM_URL = `${BASE_URL}/rooms`;
const ENTRY_CLASSROOM_URL = `${BASE_URL}/rooms/entry`;
const GET_RANKING = `${BASE_URL}/rooms/ranking/`;


export const getClassroom =  async (successCallback: (classroom: IClassroom[]) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_CLASSROOM_URL, "GET")
    .then(response => successCallback(response as IClassroom[]))
    .catch(error => errorCallback(error.message));
};

export const createClassroom = async (classroomName: CreateClassroomDto, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(CREATE_CLASSROOM_URL, "POST", classroomName)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

export const entryClassroom = async (classroomId: EntryClassroomDto, successCallback: () => void, errorCallback: (error: string) => void) => {
  await doRequest(ENTRY_CLASSROOM_URL, "POST", classroomId)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

export const getRanking = async (classroomId: number, successCallback: (classroom: IRanking) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_RANKING+classroomId, "GET")
    .then(response => successCallback(response as IRanking))
    .catch(error => errorCallback(error.message));
};