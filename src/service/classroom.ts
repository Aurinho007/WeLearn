import IClassroom from "../interfaces/Classroom";
import { doRequest } from "./api";

const GET_CLASSROOM_URL = "/room";

export const getClassroom = async (successCallback: (classroom: IClassroom[]) => void, errorCallback: (error: string) => void) => {
  await doRequest(GET_CLASSROOM_URL, "GET", true)
  .then(response => successCallback(response))
  .catch(error => errorCallback(error.message))
}