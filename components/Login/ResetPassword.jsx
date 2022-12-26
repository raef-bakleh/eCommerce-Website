import React, { useContext, useState } from "react";
import classes from "./ResetPassword.module.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { firebaseApp } from "../../store/firebaseConfig";
import AuthContext from "../../store/AuthCTX";

function ResetPassword(props) {
  const authCTX = useContext(AuthContext);
  const router = useRouter();
  const googleAuth = getAuth();
  const db = getFirestore(firebaseApp);
  const [displayName, setDisplayName] = useState("");
  const signupGoogle = async () => {
    const provider = new GoogleAuthProvider();

    event.preventDefault();
    const { user } = await signInWithPopup(googleAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/SignUp");
    props.setUserName(displayName);
  };
  const signupFacebook = async () => {
    event.preventDefault();
    const provider = new FacebookAuthProvider();

    const { user } = await signInWithPopup(googleAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/LoggedIn");
    props.setUserName(displayName);
  };
  const signupGithub = async () => {
    event.preventDefault();
    const provider = new GithubAuthProvider();

    const { user } = await signInWithPopup(googleAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/LoggedIn");
    props.setUserName(displayName);
  };
  const [username, setUsername] = useState("");
  const sendPasswordReset = async (username) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(googleAuth, username);
      alert("an Email has been sent please check you inbox");
    } catch (err) {
      alert(err.message);
    }
  };

  const UserContext = React.createContext(displayName);

  if (typeof window !== "undefined") {
    const userID = JSON.parse(localStorage.getItem("user"));
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      {!authCTX.isLoggedIn && (
        <div className={classes.wrapper}>
          <div className={classes.logInWrapper}>
            <div className={classes.header}>Reset Password</div>
            <form className={classes.form} action="submit">
              <div className={classes.username}>
                <input
                  className={
                    username ? classes.usernameHasValue : classes.input
                  }
                  type="text"
                  id="username"
                  placeholder="type your username"
                  value={username}
                  onChange={handleUsername}
                />
                <label htmlFor="username" id="username">
                  Email
                </label>
              </div>

              <button
                className={classes.loginButton}
                type="submit"
                onClick={() => {
                  sendPasswordReset(username);
                }}
              >
                Reset
              </button>

              <div className={classes.signUp}>
                <div className={classes.goBackToLogin}>
                  <p>
                    go back to{" "}
                    <Link href={"/"}>
                      <span
                        style={{ color: "white", textDecoration: "underline" }}
                      >
                        login
                      </span>
                    </Link>
                  </p>
                </div>
                don't have an account yet? <br />
                signup now usign
                <div className={classes.icons}>
                  <div className={classes.google} onClick={signupGoogle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 0 24 24"
                      width="30"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>{" "}
                  </div>
                  <div className={classes.github} onClick={signupGithub}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#1071d3"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                        fill="#1B1F23"
                      />
                    </svg>
                  </div>
                  <div className={classes.facebook} onClick={signupFacebook}>
                    {" "}
                    <BsFacebook fill="#3b5998" size={30} />{" "}
                  </div>
                  <div
                    className={classes.email}
                    onClick={() => {
                      router.push("/SignUp");
                    }}
                  >
                    {" "}
                    <AiOutlineMail fill="#3b4321" size={30} />{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
