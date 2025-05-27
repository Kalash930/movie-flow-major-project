import axios from "axios";


const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODUxMmNjNmM5YmMwZGMyY2E0NGIzYmNiMWE3ODBhMCIsIm5iZiI6MTc0Nzc1NzY3MC4yOTQwMDAxLCJzdWIiOiI2ODJjYWE2NmNiOTE5ZjViNDUwYmRmNmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MQemh278nnMVfjsBisO00YVUGbYBQQ4qzo61N0MqGS0'
  }
});

export default instance;