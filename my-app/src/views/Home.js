import React from "react";
import "./home.scss";
import toolboxIcon from "../assets/toolbox.png";
import NavBar from '../components/NavBar'

function Home() {
  return (
    <>
      <section className="home-section">
        <NavBar />
        <div className="search-box" >
          <h2>
            Hiring Toolbox{" "}
            <span>
              <img src={toolboxIcon} alt="toolbox-icon"></img>
            </span>
          </h2>
          <div>
            <input></input>
            <select>
              <option>CNPJ</option>
              <option>CPF</option>
              <option>Carteirinha</option>
              <option>Email</option>
            </select>
          </div>
          <button>
            <p>PROCURAR</p>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
