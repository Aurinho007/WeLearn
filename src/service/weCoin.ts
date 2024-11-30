import { BASE_URL, doRequest } from "./api";

const EXPEND_WECOIN_URL = `${BASE_URL}/users/buy/`;

export const useWeCoin = async  (idQuestion: number, successCallback: () => void, errorCallback: (error: string) => void) => {
  await await doRequest(EXPEND_WECOIN_URL+idQuestion, "GET")
    .then(() => successCallback())
    .catch(error => errorCallback(error.message));
};
