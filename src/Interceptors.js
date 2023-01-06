import axios from "axios";

const authFetch = axios.create({
  baseURL: "http://localhost:5000",
});

authFetch.interceptors.request.use(
  (request) => {
    console.log("request");
    let phoneno = sessionStorage.getItem("Phone number");
    if (phoneno) {
      request.headers["auth"] = phoneno;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("response");
    return response;
  },
  (error,response) => {
    console.log(error.response);
    response.json({error:"data can't be processed"})
  }
);

export default authFetch;
