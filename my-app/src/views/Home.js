import React from "react";
import "./home.scss";

const Home = () => (
    <section className="home-section">
        <nav>
            <div>MENU</div>
            <div>PERFIL</div>
        </nav>
        <div className='search-box'>
            <h2>Hiring Toolbox</h2>
            <input></input>
            <select>
                <option>CNPJ</option>
                <option>CPF</option>
                <option>Carteirinha</option>
                <option>Email</option>
            </select>
        </div>
    </section>
);

export default Home;