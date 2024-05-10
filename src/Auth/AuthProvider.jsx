import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../services/firebase";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  const googleAuth = new GoogleAuthProvider();
  const githubAuth = new GithubAuthProvider();

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
  const handleUserUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const contextProviders = {
    user,
    loading,
    handleGithub,
    handleGoogle,
    handleCreateUser,
    handleUserUser,
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
