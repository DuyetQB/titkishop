import axios from "axios";
import qs from "qs";

const http = axios.create({
  baseURL:process.env.REACT_APP_URL ||  "http://localhost:3000",

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: true,
    });
  },
});

http.interceptors.request.use(
  function (config) {
    // Add request headers if needed
    // const token = localStorage.getItem("ACCESS_TOKEN_KEY") || "";
    // if (token) {
    //   config.headers.common["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // Introduce a delay before resolving the promise
    const delayTime = 1000; // Adjust the delay time (in milliseconds) as needed

    return new Promise((resolve) => {
      resolve(response);
    });
  },
  (error) => {
    console.log("error:", error);

    if (error?.response === 401) {
      return;
    }

    if (error.response === 404) {
      return;
    }

    if (!!error.response && !!error.response.data.message) {
      alert(error.response?.data.message);
      // Handle error with a message
    } else if (!!error.response && !!error.response?.data.message) {
      // Handle error with a different message
      // alert(error.response?.data.message)
    } else if (!error.response) {
      // Handle unknown error
      // alert(error.response?.data.message)
    }

    return Promise.reject(error);
  }
);

export default http;
