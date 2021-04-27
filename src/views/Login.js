import React from "react";
import LoginBtn from '../atoms/LoginBtn';
import toolboxIcon from '../assets/toolbox.png'

const Login = params => (
    <section className="login-section">
        <h2>Hiring Toolbox <span><img src={toolboxIcon} alt="toolbox-icon"></img></span></h2>
        <LoginBtn setLog={params.setLog}/>
    </section>
);

export default Login;