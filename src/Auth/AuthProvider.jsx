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
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
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
    return signOut(auth);
  };
  // mongodb func
  const handleDeletePost = (id) => {
    return axiosSecure.delete(``);
  };
  const handleUpdatePost = (id, details) => {
    return axiosSecure.patch(``, details);
  };
  //
  const contextProviders = {
    user,
    loading,
    loader,
    handleGithub,
    handleGoogle,
    handleCreateUser,
    handleUsedUser,
    handleUpdateUser,
    handleSignOut,
    handleDeletePost,
    handleUpdatePost,
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
