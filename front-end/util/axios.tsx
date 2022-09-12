import { parseCookies } from "nookies";
import axios from "axios";

export function getAPIClient(ctx?: any) {
  const { "nextauth-token": token } = parseCookies(ctx);
  const apiRequest = axios.create({ baseURL: "http://localhost:8080/" });

  apiRequest.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      /* eslint-disable no-param-reassign */
      config.headers!.Authorization = `Bearer ${token}`;
    }
  
    return config;
  });

//   apiRequest.interceptors.response.use(function (response) {
//     // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
//     // Faz alguma coisa com os dados de resposta
//     return response;
//   }, function (error) {
//     console.log("axios deu erro", error.response.status)
//     if(error.response.status === 401 && typeof window !== "undefined"){
//        window.navigate('/')
//     }
//     // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
//     // Faz alguma coisa com o erro da resposta
//     return Promise.reject(error);
//   });

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
