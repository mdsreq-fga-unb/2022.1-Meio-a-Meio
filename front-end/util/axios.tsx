import { parseCookies } from "nookies";
import axios from "axios";

export function getAPIClient(ctx?: any) {
  const { "nextauth-token": token } = parseCookies(ctx);
  const apiRequest = axios.create({ baseURL: "https://galdi-back.herokuapp.com/" });

  apiRequest.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      /* eslint-disable no-param-reassign */
      config.headers!.Authorization = `Bearer ${token}`;
    }
  
    return config;
  });

  if (token) {
    apiRequest.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return apiRequest;
}

export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
