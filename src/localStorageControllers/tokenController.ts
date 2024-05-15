import userConstants from '../constants/userConstants';

export const saveToken = (token: string): void => {
  localStorage.setItem(userConstants.LOCAL_STORAGE_TOKEN_KEY, token);
}

export const getToken = (): string => {
  const localToken = localStorage.getItem(userConstants.LOCAL_STORAGE_TOKEN_KEY);
  return localToken === null ? '' : localToken;
}

export const deleteToken = (): void => {
  localStorage.removeItem(userConstants.LOCAL_STORAGE_TOKEN_KEY);
}