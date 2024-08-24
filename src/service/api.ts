import { getUser } from "../controllers/userController";

export const BASE_URL = "http://localhost:3001/api";
export const EXPIRED_TOKEN_ERROR = "Token expirado";

export const doRequest = async (url: string, method: "POST" | "GET", params?: unknown,): Promise<unknown> => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getUser()?.token}`
  };
  
  const response = await fetch(url, {
    method,
    headers,
    ...(method !== "GET" && { body: JSON.stringify(params) })
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.error === "Erro na verificação do token") {
      errorData.error = EXPIRED_TOKEN_ERROR;
    }
    throw new Error(errorData.error ?? "Ops! Algo deu errado...");
  }

  return await response.json();
};
