import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  // const { auth } = useContext(AuthContext);
  // const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      }
      // (error) => {
      //   if (error.response.status === 401 || error.response.status === 403) {
      //     signOut(auth).then(() => {
      //       console.log('sdhfjhfhf')
      //     })
      //   }
      // }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
