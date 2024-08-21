import { BASE_URL, doRequest } from "./api";
import { LoginDto, CreateAccountDto }from "../dtos/auth";
import { IUser } from "../interfaces/User";

const LOGIN_URL = `${BASE_URL}/users/auth`;
const CREATE_ACCOUNT_URL = `${BASE_URL}/users/`;

export const login = async (user: LoginDto, successCallback: (user: IUser) => void, errorCallback: (error: string) => void): Promise<void> => {
  doRequest(LOGIN_URL, 'POST', user)
    .then(response => successCallback(response))
    .catch(error => errorCallback(error.message))
};

export const createAccount = async (newUser: CreateAccountDto, successCallback: () => void, errorCallback: (error: string) => void): Promise<void> => {
  doRequest(CREATE_ACCOUNT_URL, 'POST', newUser)
    .then(_response => successCallback())
    .catch(error => errorCallback(error.message))
};
