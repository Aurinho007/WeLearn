import { LOCAL_STORAGE_USER_KEY, SESSION_STORAGE_USER_KEY } from '../constants/userConstants';
import { IUser, IUserLoginData } from '../interfaces/User';


export const saveUser = (user: IUser): void => {
  sessionStorage.setItem(SESSION_STORAGE_USER_KEY, JSON.stringify(user));
}

export const getUser = (): IUser | null => {
  const localUser = sessionStorage.getItem(SESSION_STORAGE_USER_KEY);

  if(!localUser){
    return null
  }
  
  return JSON.parse(localUser) as IUser; 
}

// Local Storage (lembrar usuário)
export const saveUserLoginData = (email: string, password: string): void => {
  const userLoginData: IUserLoginData = {
    email,
    password
  } ;

  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userLoginData));
}

export const getUserLoginData = (): IUserLoginData | null => {
  const localUserLoginData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

  if(!localUserLoginData){
    return null
  }
  
  return JSON.parse(localUserLoginData) as IUserLoginData; 
}

export const deleteUserLoginData = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
}