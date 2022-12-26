import { onAuthStateChanged } from "firebase/auth";
import { getDisplayName } from "next/dist/shared/lib/utils";
import React, { useEffect } from "react";
import { useState } from "react";
const AuthContext = React.createContext({
  userName: "",
  token: "",
  isLoggedIn: "",
  logIn: () => {},
  logOut: () => {},
});

export const UserContext = (props) => {
  const [userName, setUserName] = useState(null);
  const [token, setToken] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
      setUserName(localStorage.getItem("username"));
    } else {
      setToken(null);
    }
  });

  const userIsLoggedIn = !!token;

  const logInHandler = (token, username) => {
    setToken(token);
    setUserName(username);
  };

  const logOutHnalder = () => {
    setToken(null);
  };
  const contextValue = {
    userName: userName,
    token: token,
    isLoggedIn: userIsLoggedIn,
    logIn: logInHandler,
    logOut: logOutHnalder,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
