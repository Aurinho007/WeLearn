import LOCAL_STORAGE_USER_KEY from '../constants/userConstants';
import { IUser } from '../interfaces/User';

export const saveUser = (user: IUser): void => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
}

export const getUser = (): IUser | null => {
  const localUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

  if(!localUser){
    return null
  }
  
  return JSON.parse(localUser) as IUser; 
}

export const logoutUser = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
}