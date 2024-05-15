import CreateAccountDto from './dtos/createAccount';
import loginDto from './dtos/login';
import { IUser } from './interfaces/User';

const BASE_URL = "http://localhost:3001/api";
const LOGIN_URL = `${BASE_URL}/users/auth`;
const CREATE_ACCOUNT_URL = `${BASE_URL}/users/`;

const doRequest = async (url: string, params: any, method: "POST" | "GET", token?: string): Promise<any> => {
  try {
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

    const responseData = await response.json();

    if (responseData.error) {
      alert(responseData.error);
      return
    }

    return responseData;

  } catch (error) {
    console.error('Erro:', error);
    return
  }
}


export const login = async (params: loginDto): Promise<IUser> => {
  return doRequest(LOGIN_URL, params, 'POST');
};

export const createAccount = async (params: CreateAccountDto): Promise<void> => {
  return doRequest(CREATE_ACCOUNT_URL, params, 'POST');
};