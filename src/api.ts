const BASE_URL = "http://localhost:3000/api";
const LOGIN_URL = `${BASE_URL}/users/auth`;

export const login = async (params: any): Promise<string | void> => {
  try {
    const data = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    const response: any = await data.json()
      .then(data => data)
      .catch(error => error);


    return response;

  } catch (error) {
    console.error('Error during login:', error);
    return;
  }
};