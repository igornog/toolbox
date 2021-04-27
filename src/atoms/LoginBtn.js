import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import LogoutBtn from "./LogoutBtn";
import USERS_LIST from "../constants/userList";

import "./LogBtn.scss";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "318274943652-5svcg57nbr403ica2mq8pv2lqo883ep7.apps.googleusercontent.com";

function LoginHooks(props) {
  const [loginFailed, setLoginFailed] = useState(false);

  const onSuccess = (res) => {
    if (USERS_LIST.includes(res.profileObj.email)) {
      console.log("Login Success: currentUser:", res.profileObj);
      props.setLog(true);
    } else {
      setLoginFailed(true);
    }
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    setLoginFailed(true);
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <>
      {!props.logged ? (
        <button onClick={signIn} className="button">
          <img src="icons/google.svg" alt="google login" className="icon"></img>
          <span className="buttonText">Sign in with Google</span>
        </button>
      ) : (
        <LogoutBtn />
      )}
      {loginFailed ? (
        <p className="login-failed-txt">
          Não foi possível fazer login com esta conta
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default LoginHooks;
