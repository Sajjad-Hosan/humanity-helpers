import axios from "axios";
// import useAuth from "./useAuth/useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  // const { handleSignOut } = useAuth();
  // const navigate = useLoaderData();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      // (error) => {
      //   // if (error.response.status === 401 || error.response.status === 403) {
      //   //   handleSignOut().then(() => {
      //   //     navigate("/");
      //   //   });
      //   // }
      // }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
