import SESSION_STORAGE_USER_KEY from '../constants/userConstants';
import { IUser } from '../interfaces/User';

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

export const logoutUser = (): void => {
  sessionStorage.removeItem(SESSION_STORAGE_USER_KEY);
}