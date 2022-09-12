import axios from 'axios'
const apiRequest = axios.create({baseURL:'http://localhost:8080/'})
// Adiciona um interceptador na requisição
apiRequest.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlMUBnbWFpbC5jb20iLCJzdWIiOjMsImlhdCI6MTY2Mjk1NTMyNywiZXhwIjoxNjYzMDQxNzI3fQ.hYky4pY-QOVKguXK8pdStQpSnaEvvy-mNKepUH-HwJ8"
    config.headers.Authorization = "bearer " + token;
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
  });

// Adiciona um interceptador na resposta
apiRequest.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Faz alguma coisa com os dados de resposta
    return response;
  }, function (error) {
    console.log("axios deu erro", error.response.status)
    if(error.response.status === 401 && typeof window !== "undefined"){
       window.navigate('/')
    }
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Faz alguma coisa com o erro da resposta
    return Promise.reject(error);
  });
export default apiRequest;