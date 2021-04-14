import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./home.scss";
import toolboxIcon from "../assets/toolbox.png";
import NavBar from "../components/NavBar";
import Button from "../atoms/button"

function Home() {
  const [inputMask, setInputMask] = useState(false);

  const changeMask = (e) => {
    let docChoosen = e.target.value;
    switch (docChoosen) {
      case "cnpj":
        setInputMask("99.999.999/9999-99");
        break;
      case "cpf":
        setInputMask("999.999.999-99");
        break;
      case "id":
        setInputMask("99999999999");
        break;
      case "email":
        setInputMask("");
        break;
      default:
    }
  };

  return (
    <>
      <section className="home-section">
        <NavBar />
        <div className="search-box">
          <h2>
            Hiring Toolbox{" "}
            <span>
              <img src={toolboxIcon} alt="toolbox-icon"></img>
            </span>
          </h2>
          <div>
            <InputMask mask={inputMask}></InputMask>
            <select onChange={changeMask}>
              <option value="email">Email</option>
              <option value="cnpj">CNPJ</option>
              <option value="cpf">CPF</option>
              <option value="id">Carteirinha</option>
            </select>
          </div>
          <Button>
            <p>PROCURAR</p>
          </Button>
        </div>
      </section>
    </>
  );
}

export default Home;
