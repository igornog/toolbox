import React from "react";
import { useGoogleLogout } from "react-google-login";

import "./LogBtn.scss";

const clientId =
  "318274943652-5svcg57nbr403ica2mq8pv2lqo883ep7.apps.googleusercontent.com";

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    window.location.reload();
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <>
      <p onClick={signOut}>sair</p>
      {/* <button onClick={signOut} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
        <span className="buttonText">Sign out</span>
      </button> */}
    </>
  );
}

export default LogoutHooks;
