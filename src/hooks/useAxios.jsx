import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("axios error ", error.response);   
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
