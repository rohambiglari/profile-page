import axios from "axios";
import Cookies from "js-cookie";

const config = {
  baseURL: "https://zebrashop.liara.run/",
  // GOOGLE_MAP_KEY: "AIzaSyD4qY6Euzpnu0WSZapPYfSd-R1NZ28c8RU",
  // MAP_IR_KEY:
  //   "&x-api-key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4Mjg2NDkwM2M0MjllOWNlNDhjODk2MDc1OTQyMTdiZWVjMmNmZWJmOGJiNjA3NjZjYjY4ZTU4NTQ0NjE1Nzk2OTYwM2VlOWM4ZGQyNzg0In0.eyJhdWQiOiI3MTQyIiwianRpIjoiZTgyODY0OTAzYzQyOWU5Y2U0OGM4OTYwNzU5NDIxN2JlZWMyY2ZlYmY4YmI2MDc2NmNiNjhlNTg1NDQ2MTU3OTY5NjAzZWU5YzhkZDI3ODQiLCJpYXQiOjE1NzY2NTQxODQsIm5iZiI6MTU3NjY1NDE4NCwiZXhwIjoxNTc5MTU5Nzg0LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.qX-fcF2UEDjTvcqz-MDxQlSNO7UjjhJZfGBoFRqvEoH_a5Hi-HD7hR_r0L4z7F0rC9d_FZaobc4ChUEYNmZbAthCcDW5ZJX5RWzlc9F-v8rdD2uu7swTgS7VMb5WxP39zsQEAw4q4vPAIboD8kWtYV9D488oqfBug_VYwA5QxRB3_71xrUmk-gObfvD_Tm5ZR3CSHqAdO8zFU8xKj0Xykc8UnpXqUqWG4lFyWO1CqMLrMKyjWWbYQ-HTRvMKRcrjQdGL-DjbPqoxS2dzWtKn7t2LVS3euuzjDFiNt4Xi5vEvMQSfZB7ogri77MsTJdW80XOO8yKnbgOBS0_R2r9AHw",
  // imagePath: "",

  // udata: { token: Cookies.get("pakanToken") },
  // pdata: null,
  // //https://map.ir/search/v2/autocomplete?text=%D8%A2%D8%B2%D8%A7%D8%AF%DB%8C&$filter=province%20eq%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86&x-api-key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4Mjg2NDkwM2M0MjllOWNlNDhjODk2MDc1OTQyMTdiZWVjMmNmZWJmOGJiNjA3NjZjYjY4ZTU4NTQ0NjE1Nzk2OTYwM2VlOWM4ZGQyNzg0In0.eyJhdWQiOiI3MTQyIiwianRpIjoiZTgyODY0OTAzYzQyOWU5Y2U0OGM4OTYwNzU5NDIxN2JlZWMyY2ZlYmY4YmI2MDc2NmNiNjhlNTg1NDQ2MTU3OTY5NjAzZWU5YzhkZDI3ODQiLCJpYXQiOjE1NzY2NTQxODQsIm5iZiI6MTU3NjY1NDE4NCwiZXhwIjoxNTc5MTU5Nzg0LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.qX-fcF2UEDjTvcqz-MDxQlSNO7UjjhJZfGBoFRqvEoH_a5Hi-HD7hR_r0L4z7F0rC9d_FZaobc4ChUEYNmZbAthCcDW5ZJX5RWzlc9F-v8rdD2uu7swTgS7VMb5WxP39zsQEAw4q4vPAIboD8kWtYV9D488oqfBug_VYwA5QxRB3_71xrUmk-gObfvD_Tm5ZR3CSHqAdO8zFU8xKj0Xykc8UnpXqUqWG4lFyWO1CqMLrMKyjWWbYQ-HTRvMKRcrjQdGL-DjbPqoxS2dzWtKn7t2LVS3euuzjDFiNt4Xi5vEvMQSfZB7ogri77MsTJdW80XOO8yKnbgOBS0_R2r9AHw

  // mapHandle: () => {
  //   return axios.create({
  //     baseURL: `https://map.ir/`,

  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "accept, content-type",
  //       Accept: "application/json",
  //       "Content-Type": "multipart/form-data",
  //       "x-api-key":
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4Mjg2NDkwM2M0MjllOWNlNDhjODk2MDc1OTQyMTdiZWVjMmNmZWJmOGJiNjA3NjZjYjY4ZTU4NTQ0NjE1Nzk2OTYwM2VlOWM4ZGQyNzg0In0.eyJhdWQiOiI3MTQyIiwianRpIjoiZTgyODY0OTAzYzQyOWU5Y2U0OGM4OTYwNzU5NDIxN2JlZWMyY2ZlYmY4YmI2MDc2NmNiNjhlNTg1NDQ2MTU3OTY5NjAzZWU5YzhkZDI3ODQiLCJpYXQiOjE1NzY2NTQxODQsIm5iZiI6MTU3NjY1NDE4NCwiZXhwIjoxNTc5MTU5Nzg0LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.qX-fcF2UEDjTvcqz-MDxQlSNO7UjjhJZfGBoFRqvEoH_a5Hi-HD7hR_r0L4z7F0rC9d_FZaobc4ChUEYNmZbAthCcDW5ZJX5RWzlc9F-v8rdD2uu7swTgS7VMb5WxP39zsQEAw4q4vPAIboD8kWtYV9D488oqfBug_VYwA5QxRB3_71xrUmk-gObfvD_Tm5ZR3CSHqAdO8zFU8xKj0Xykc8UnpXqUqWG4lFyWO1CqMLrMKyjWWbYQ-HTRvMKRcrjQdGL-DjbPqoxS2dzWtKn7t2LVS3euuzjDFiNt4Xi5vEvMQSfZB7ogri77MsTJdW80XOO8yKnbgOBS0_R2r9AHw",
  //     },
  //   });
  // },

  // axiosHandle: (headers = {}) => {
  //   return axios.create({
  //     baseURL: `${config.baseURL}api/`,
  //     // baseURL: `api/`,

  //     headers:
  //       config.udata && config.udata.token
  //         ? {
  //             Authorization: "Token " + config.udata.token,
  //             accept: "application/json",
  //             "Content-Type": "application/json",
  //             ...headers,
  //           }
  //         : {
  //             accept: "application/json",
  //             "Content-Type": "application/json",
  //             ...headers,
  //           },
  //   });
  // },
  // axiosHandleBase: () => {
  //   return axios.create({
  //     baseURL: `${config.baseURL}api/`,
  //     // baseURL: `api/`,
  //     // withCredentials: true, // Allows sending cookies with the request
  //     headers:
  //       config.udata && config.udata.token
  //         ? {
  //             Authorization: "Token " + config.udata.token,
  //             accept: "application/json",
  //             // "Access-Control-Allow-Origin":"*",
  //             "Content-Type": "application/json",
  //           }
  //         : {
  //             accept: "application/json",
  //             // "Access-Control-Allow-Origin":"*",
  //             "Content-Type": "application/json",
  //           },
  //   });
  // },
};

export default config;
