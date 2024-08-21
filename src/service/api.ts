import { getUser } from "../controllers/userController";

export const BASE_URL = "http://localhost:3001/api";

export const doRequest = async (url: string, method: "POST" | "GET", params?: any, useToken?: boolean): Promise<any> => {
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  if (useToken) {
    headers['Authorization'] = `Bearer ${getUser()?.token}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    ...(method !== "GET" && { body: JSON.stringify(params) })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error ?? 'Ops! Algo deu errado...');
  }

  return await response.json();
}
