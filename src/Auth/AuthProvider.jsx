import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../services/firebase/firebase";
import useAxios from "../hooks/useAxios";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [userVolunteerData, setUserVolunteerData] = useState([]);
  const [userRequestData, setUserRequestData] = useState([]);
  const [items, setItems] = useState([]);
  const [filter,setFilter] = useState([]);
  const [req, setReq] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxios();

  const googleAuth = new GoogleAuthProvider();
  const githubAuth = new GithubAuthProvider();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
      //
      const curEmail = current?.email;
      const currentEmail = { email: curEmail };
      if (current) {
        axios
          .post("http://localhost:5000/jwt", currentEmail, {
            withCredentials: true,
          })
          .then(() => {
            // console.log(res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", currentEmail, {
            withCredentials: true,
          })
          .then(() => {
            // console.log(res.data);
          });
      }
    });
    return () => unSubscribe();
  }, [auth]);

  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };
  const handleGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuth);
  };
  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleUsedUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleUpdateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // mongodb func
  const handleDeletePost = (id) => {
    return axiosSecure.delete(`/user_volunteer_post/${id}`);
  };
  const handleDeleteRequest = (id) => {
    return axiosSecure.delete(`/volunteer_requested/${id}`);
  };
  //
  const contextProviders = {
    auth,
    user,
    loading,
    loader,
    req,
    setReq,
    items,
    filter,setFilter,
    setItems,
    userVolunteerData,
    userRequestData,
    setUserRequestData,
    setUserVolunteerData,
    handleGithub,
    handleGoogle,
    handleCreateUser,
    handleUsedUser,
    handleUpdateUser,
    handleSignOut,
    handleDeletePost,
    handleDeleteRequest,
  };
  return (
    <AuthContext.Provider value={contextProviders}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
