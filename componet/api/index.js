import config from "./global.js";
const Api = {
  logIn: (body) => {
    return config.axiosHandle().post("token/", body);
  },
  
};
export default Api;
