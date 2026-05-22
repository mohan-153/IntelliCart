import axios from "axios";



const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api",
});



API.interceptors.request.use(
  (config) => {
    if (
      typeof window !== "undefined"
    ) {
      const userInfo =
        localStorage.getItem(
          "userInfo"
        );

      if (userInfo) {
        const token =
          JSON.parse(userInfo).token;

        config.headers.Authorization =
          `Bearer ${token}`;
      }
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);



export default API;