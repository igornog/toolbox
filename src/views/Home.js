import React, { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import "./home.scss";
import toolboxIcon from "../assets/toolbox.png";
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";
import Button from "../atoms/button";
import EditModal from "../components/EditModal";
import UploadModal from "../components/UploadModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import ListCompaniesService from "../services/listCompanies";
import ListMembersService from "../services/listMembers";

function Home() {
  const [inputMask, setInputMask] = useState("99.999.999/9999-99");
  const [searchOn, setSearchOn] = useState(false);
  const [uploadModalOn, setUploadModalOn] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [deleteConfirmationModalOn, setDeleteConfirmationModalOn] = useState(
    false
  );
  const [cnpjNotFound, setCnpjNotFound] = useState(false);
  const [cnpjRawNumber, setCnpjRawNumber] = useState(false);
  const [companyName, setCompanyName] = useState(false);
  const [cnpjNumber, setCnpjNumber] = useState(false);
  const [companyId, setCompanyId] = useState(false);
  const [hirerId, setHirerId] = useState(false);
  const [companyCity, setCompanyCity] = useState(false);
  const [companyState, setCompanyState] = useState(false);
  const [companySize, setCompanySize] = useState(false);
  const [companyLegalNature, setCompanyLegalNature] = useState(false);

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

  const searchCompany = () => {
    ListCompaniesService.listAllCompanies(cnpjRawNumber)
      .then((data) => {
        if (
          data.data.data.companies.length === 0 ||
          cnpjRawNumber.length !== 14
        ) {
          setCnpjNotFound(true);
          setSearchOn(false);
        } else if (cnpjRawNumber.length === 14) {
          const cnpjFormatted = data.data.data.companies[0].cnpj.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
            "$1.$2.$3/$4-$5"
          );
          console.log(data.data.data.companies);
          setCnpjNotFound(false);
          setCompanyId(data.data.data.companies[0].companyId);
          setHirerId(data.data.data.companies[0].hirerId);
          setCompanyName(data.data.data.companies[0].name);
          setCnpjNumber(cnpjFormatted);
          setSearchOn(true);

          ListCompaniesService.checkCNPJ(companyId).then((data) => {
            console.log(data.data.data);
            setCompanyCity(data.data.data.addressInfo.city);
            setCompanyState(data.data.data.addressInfo.state);
            setCompanySize(data.data.data.size);
            setCompanyLegalNature(data.data.data.legal_nature.code);
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const watchInput = (e) => {
    let rawCnpj = e.target.value.replace(/\D/g, "");
    if (e.target.value) {
      setCnpjRawNumber(rawCnpj);
    }
  };

  return (
    <>
      <section
        className={`home-section ${searchOn === true ? "search-on" : ""}`}
      >
        <NavBar setsearchOn={setSearchOn} setUploadModalOn={setUploadModalOn} />
        <div className="search-box">
          <h2 onClick={() => setSearchOn(false)}>
            Hiring Toolbox{" "}
            <span>
              <img src={toolboxIcon} alt="toolbox-icon"></img>
            </span>
          </h2>
          <div>
            <InputMask
              onLoad={watchInput}
              onChange={watchInput}
              mask={inputMask}
            ></InputMask>
            <select onChange={changeMask}>
              <option value="cnpj">CNPJ</option>
              <option value="email">Email</option>
              <option value="cpf">CPF</option>
              <option value="id">Carteirinha</option>
            </select>
          </div>
          <div
            className={`cnpj-not-found ${cnpjNotFound === true ? "show" : ""}`}
          >
            <p>CNPJ não encontrado</p>
          </div>
          <Button className="" onClick={searchCompany}>
            <p>PROCURAR</p>
          </Button>
          <Button
            className={`upload-btn ${searchOn === true ? "hide" : ""}`}
            onClick={() => setUploadModalOn(true)}
          >
            <p>
              <span>+ </span>UPLOAD DE MEMBROS
            </p>
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
            uploadModalOn === true ? "upload-modal-on" : ""
          }`}
        >
          <UploadModal setUploadModalOn={setUploadModalOn} />
        </div>
        <SearchResult
          setEditModalOn={setEditModalOn}
          setDeleteConfirmationModalOn={setDeleteConfirmationModalOn}
          companyName={companyName}
          cnpjNumber={cnpjNumber}
          companyCity={companyCity}
          companyState={companyState}
          companyLegalNature={companyLegalNature}
          companySize={companySize}
        />
      </section>
    </>
  );
}

export default Home;
