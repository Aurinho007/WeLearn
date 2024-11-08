import { CreateClassroomDto, EntryClassroomDto } from "../dtos/classroom";
import IClassroom from "../interfaces/Classroom";
import { BASE_URL, doRequest } from "./api";

const GET_CLASSROOM_URL = `${BASE_URL}/rooms`;
const CREATE_CLASSROOM_URL = `${BASE_URL}/rooms`;
const ENTRY_CLASSROOM_URL = `${BASE_URL}/rooms/entry`;

export const getClassroom = (successCallback: (classroom: IClassroom[]) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_CLASSROOM_URL, "GET")
    .then(response => successCallback(response as IClassroom[]))
    .catch(error => errorCallback(error.message));
};

export const createClassroom = (classroomName: CreateClassroomDto, successCallback: () => void, errorCallback: (error: string) => void) => {
  doRequest(CREATE_CLASSROOM_URL, "POST", classroomName)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};

export const entryClassroom = (classroomId: EntryClassroomDto, successCallback: () => void, errorCallback: (error: string) => void) => {
  doRequest(ENTRY_CLASSROOM_URL, "POST", classroomId)
    .then(_ => successCallback())
    .catch(error => errorCallback(error.message));
};