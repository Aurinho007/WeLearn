import { BASE_URL, doRequest } from "./api";
import { LoginDto, CreateAccountDto }from "../dtos/auth";
import { IUser } from "../interfaces/User";

const LOGIN_URL = `${BASE_URL}/users/auth`;
const CREATE_ACCOUNT_URL = `${BASE_URL}/users/`;

export const login = async (user: LoginDto, successCallback: (user: IUser) => void, errorCallback: (error: string) => void): Promise<void> => {
  await await doRequest(LOGIN_URL, "POST", user)
    .then(response => successCallback(response as IUser))
    .catch(error => errorCallback(error.message));
};

export const createAccount = async (newUser: CreateAccountDto, successCallback: () => void, errorCallback: (error: string) => void): Promise<void> => {
  await await doRequest(CREATE_ACCOUNT_URL, "POST", newUser)
    .then(() => successCallback())
    .catch(error => errorCallback(error.message));
};
