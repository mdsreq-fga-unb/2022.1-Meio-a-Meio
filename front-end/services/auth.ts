import { apiRequest } from "../util/apiRequest";

type SignInRequestData = {
  username: string;
  password: string;
};

async function payload (username: string, password: string) {
  const response = await apiRequest.post('/administrador/login', {username, password})
  return response;
}

export async function signInRequest(data: SignInRequestData) {
  const response = await payload(data.username, data.password);

  return {
    token: response.data.access_token,
    user: {
      username: data.username,
      password: data.password,
    },
  };
}

export async function recoverUserInformation(data: SignInRequestData) {
  const response = await payload(data.username, data.password);

  return {
    token: response.data.access_token,
    user: {
      username: data.username,
      password: data.password,
    },
  };
}
