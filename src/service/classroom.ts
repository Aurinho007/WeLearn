import IClassroom from "../interfaces/Classroom";
import { BASE_URL, doRequest } from "./api";

const GET_CLASSROOM_URL = `${BASE_URL}/rooms`;

export const getClassroom = async (successCallback: (classroom: IClassroom[]) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_CLASSROOM_URL, "GET")
    .then(response => successCallback(response))
    .catch(error => errorCallback(error.message));
};