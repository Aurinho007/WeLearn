import CreateAccountDto from './dtos/createAccount';
import loginDto from './dtos/login';

const BASE_URL = "http://localhost:3000/api";
const LOGIN_URL = `${BASE_URL}/users/auth`;
const CREATE_ACCOUNT_URL = `${BASE_URL}/users/`;

const doRequest = async (url: string, params: any, method: "POST" | "GET", token?: string) => {
  try {
    const data = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });

    const response: any = await data.json()
      .then(data => data)
      .catch(error => error);

    if(response.error){
      alert(response.error)
      return
    }

    return response;

  } catch (error) {
    console.error('Erro', error);
    return;
  }
}

export const login =  async (params: loginDto): Promise<any> => {
  return doRequest(LOGIN_URL, params, 'POST');
};

export const createAccount = async (params: CreateAccountDto): Promise<any> => {
  return doRequest(CREATE_ACCOUNT_URL, params, 'POST');
};