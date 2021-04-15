import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./home.scss";
import toolboxIcon from "../assets/toolbox.png";
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";
import Button from "../atoms/button"
import EditModal from "../components/EditModal";

function Home() {
  const [inputMask, setInputMask] = useState(false);
  const [searchOn, setsearchOn] = useState(false);
  const [editModalOn, seteditModalOn] = useState(false);

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
      <section className={`home-section ${searchOn === true ? 'search-on' : ''}`}>
        <NavBar setsearchOn={setsearchOn} />
        <div className="search-box" >
          <h2 onClick={() => setsearchOn(false)}>
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
          <Button className="" onClick={() => setsearchOn(true)}>
            <p>PROCURAR</p>
          </Button>
        </div>
        <div className={`edit-modal ${editModalOn === true ? 'edit-modal-on' : ''}`}>
          <EditModal seteditModalOn={seteditModalOn}/>
        </div>
        <SearchResult seteditModalOn={seteditModalOn}/>
      </section>
    </>
  );
}

export default Home;
