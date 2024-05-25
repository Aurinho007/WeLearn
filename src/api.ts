import CreateAccountDto from './dtos/createAccount';
import loginDto from './dtos/login';
import { IUser } from './interfaces/User';

const BASE_URL = "http://localhost:3001/api";
const LOGIN_URL = `${BASE_URL}/users/auth`;
const CREATE_ACCOUNT_URL = `${BASE_URL}/users/`;

const doRequest = async (url: string, params: any, method: "POST" | "GET", token?: string): Promise<any> => {

  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(params)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Ops! Algo deu errado...');
  }

  return await response.json();

}

export const login = async (user: loginDto, sucessCallback: (user: IUser) => void, errorCallback: (error: string) => void): Promise<void> => {
  doRequest(LOGIN_URL, user, 'POST')
    .then(response => sucessCallback(response))
    .catch(error => errorCallback(error))
};

export const createAccount = async (newUser: CreateAccountDto, sucessCallback: () => void, errorCallback: (error: string) => void): Promise<void> => {
  doRequest(CREATE_ACCOUNT_URL, newUser, 'POST')
    .then(response => sucessCallback())
    .catch(error => errorCallback(error))
};