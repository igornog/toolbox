import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./home.scss";
import toolboxIcon from "../assets/toolbox.png";
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";
import Button from "../atoms/button";
import EditModal from "../components/EditModal";
import UploadModal from "../components/UploadModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

function Home() {
  const [inputMask, setInputMask] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const [uploadModalOn, setUploadModalOn] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [deleteConfirmationModalOn, setDeleteConfirmationModalOn] = useState(
    false
  );

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
      <section
        className={`home-section ${searchOn === true ? "search-on" : ""}`}
      >
        <NavBar setsearchOn={setSearchOn} />
        <div className="search-box">
          <h2 onClick={() => setSearchOn(false)}>
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
          <Button className="" onClick={() => setSearchOn(true)}>
            <p>PROCURAR</p>
          </Button>
          <Button className="upload-btn" onClick={() => setUploadModalOn(true)}>
            <p><span>+ </span>UPLOAD DE MEMBROS</p>
          </Button>
        </div>
        <div
          className={`edit-modal ${
            editModalOn === true ? "edit-modal-on" : ""
          }`}
        >
          <EditModal setEditModalOn={setEditModalOn} />
        </div>
        <div
          className={`delete-confirmation-modal ${
            deleteConfirmationModalOn === true
              ? "delete-confirmation-modal-on"
              : ""
          }`}
        >
          <DeleteConfirmationModal
            setDeleteConfirmationModalOn={setDeleteConfirmationModalOn}
          />
        </div>
        <div
          className={`upload-modal ${
            uploadModalOn === true
              ? "upload-modal-on"
              : ""
          }`}
        >
          <UploadModal />
        </div>
        <SearchResult
          setEditModalOn={setEditModalOn}
          setDeleteConfirmationModalOn={setDeleteConfirmationModalOn}
        />
      </section>
    </>
  );
}

export default Home;
