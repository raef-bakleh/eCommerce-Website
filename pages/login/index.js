import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import LogIn from "../../components/Login/LogIn";
import AuthContext from "../../store/AuthCTX";

const Login = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCTX.isLoggedIn) {
      router.push("/");
    }
  }, []);
  const router = useRouter();

  const authCTX = useContext(AuthContext);
  return <div>{!authCTX.isLoggedIn && <LogIn />}</div>;
};

export default Login;
