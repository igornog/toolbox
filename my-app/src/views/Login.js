import React from "react";

import LoginBtn from '../components/LoginBtn';
// import LogoutBtn from '../components/LogoutBtn';

import toolboxIcon from '../assets/toolbox.png'

const Login = () => (
    <section className="login-section">
        <h2>Hiring Toolbox <span><img src={toolboxIcon} alt="toolbox-icon"></img></span></h2>
        <LoginBtn />
        {/* <LogoutBtn /> */}
    </section>
);

export default Login;