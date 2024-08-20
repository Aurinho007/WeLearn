import ClassroomDto from "../dtos/classroom/classroom";
import { doRequest } from "./api";

const GET_CLASSROOM_URL = "/classroom/";

export const getClassroom = (successCallback: (classroom: ClassroomDto[]) => void, errorCallback: (error: string) => void) => {
  doRequest(GET_CLASSROOM_URL, "GET", true)
  .then(response => successCallback(response))
  .catch(error => errorCallback(error.message))
}