import React, { useState } from "react"
import { useGoogleLogin } from 'react-google-login';
import LogoutBtn from '../components/LogoutBtn';

import './LogBtn.scss';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '318274943652-5svcg57nbr403ica2mq8pv2lqo883ep7.apps.googleusercontent.com';

function LoginHooks() {
  const [logged,setLog] = useState(false)
  const [loginFailed,setLoginFailed] = useState(false)

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setLog(true)
    alert('Successfully logged in!')
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    setLoginFailed(true)
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return <> 
    {!logged ?
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">Sign in with Google</span>
    </button> :
     <LogoutBtn />
    }
    {loginFailed ?
    <p className='login-failed-txt' >Não foi possível fazer login com esta conta</p> : ''
    }
  </>
}

export default LoginHooks;
