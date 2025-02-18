import axios from "axios";
import useUser from "../states/useUser";

const API_BASE_URL = "http://52.205.194.42:8080"; 

const api = axios.create({
  baseURL: API_BASE_URL, 
});


api.interceptors.request.use(
  async (config) => {
    const { accessToken,refreshToken } = useUser.getState();

    if (accessToken && !config.url?.includes("/v1/user")) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      if (refreshToken) {
        config.headers["x-refresh-token"] = refreshToken;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {
    const { setAccessToken,accessToken } = useUser.getState();
    let newAccessToken = null;
    if(response.headers.authorization != null){
      var possible = response.headers.authorization;
      newAccessToken = possible.replace("Bearer ","");
    }
    
    if (newAccessToken != null && newAccessToken != accessToken) {
      console.log("Alterando token" + newAccessToken)
      setAccessToken(newAccessToken);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;