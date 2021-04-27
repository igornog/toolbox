import React from "react";
import LoginBtn from '../atoms/LoginBtn';
import toolboxIcon from '../assets/toolbox.png'

const Login = (props) => (
    <section className="login-section">
        <h2>Hiring Toolbox <span><img src={toolboxIcon} alt="toolbox-icon"></img></span></h2>
        <LoginBtn setLog={props.setLog}/>
    </section>
);

export default Login;