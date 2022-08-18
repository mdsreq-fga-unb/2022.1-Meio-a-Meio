import axios from 'axios'
const apiRequest = axios.create({baseURL:'http://localhost:8080/'})

export default apiRequest;