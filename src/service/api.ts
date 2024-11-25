import { getUser } from "../controllers/userController";

// export const BASE_URL = process.env.REACT_APP_API_URL;
export const BASE_URL = "http://34.41.102.229:3001/api";

export const EXPIRED_TOKEN_ERROR = "Token expirado";

export const doRequest = async (
  url: string,
  method: "POST" | "GET" | "DELETE" | "PUT",
  params?: unknown
): Promise<unknown> => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getUser()?.token}`
  };

  const response = await fetch(url, {
    method,
    headers,
    ...(method !== "GET" && { body: JSON.stringify(params) })
  });

  console.table(response);

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.error === "Erro na verificação do token") {
      errorData.error = EXPIRED_TOKEN_ERROR;
    }
    console.log(errorData);
    throw new Error(errorData.error ?? "Ops! Algo deu errado...");
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
};