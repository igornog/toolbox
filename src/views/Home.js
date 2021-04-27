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
import CompaniesServices from "../services/companies";
import MembersServices from "../services/members";

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
  const [companyAlias, setCompanyAlias] = useState(false);
  const [cnpjNumber, setCnpjNumber] = useState(false);
  const [companyId, setCompanyId] = useState(false);
  // const [hirerId, setHirerId] = useState(false);
  const [companyCity, setCompanyCity] = useState(false);
  const [companyState, setCompanyState] = useState(false);
  const [companySize, setCompanySize] = useState(false);
  const [companyLegalNature, setCompanyLegalNature] = useState(false);
  const [paymentDate, setPaymentDate] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [paymentValue, setPaymentValue] = useState(false);
  const [contractUrl, setContractUrl] = useState(false);

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
    CompaniesServices.listAllCompanies(cnpjRawNumber)
      .then(async (data) => {
        if (data.status === 200) {

          setCnpjNotFound(false);
          setSearchOn(true);

          const company = data.data?.data?.companies[0]
          
          const companyId = company?.companyId

         try {
           const companyResponse = await CompaniesServices.checkCNPJ(companyId)
            const cnpjFormatted = companyResponse.data.data.cnpj.replace(
              /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
              "$1.$2.$3/$4-$5"  
            );
            const paymentDate = companyResponse.data.data.paymentDate.split("T");
          
            setCompanyId(companyResponse.data.data.id);
            setCompanyName(companyResponse.data.data.name);
            setCompanyAlias(companyResponse.data.data.alias);
            setCnpjNumber(cnpjFormatted);
    
            setCompanyCity(companyResponse.data.data.addressInfo.city);
            setCompanyState(companyResponse.data.data.addressInfo.state);
            setCompanySize(companyResponse.data.data.size);
            setCompanyLegalNature(companyResponse.data.data.legal_nature.code);
    
            setContractUrl(companyResponse.data.data.contractUrl)
    
            setPaymentDate(paymentDate)
            setPaymentMethod(companyResponse.data.data.paymentMethod)
            setPaymentValue(companyResponse.data.data.paymentValue)
         } catch (err) {
          console.log("get company response error:", err)
         }
        } else {
          setCnpjNotFound(true);
          setSearchOn(false);
        }
      })
      .catch((e) => {
        console.log("get all companies error", e);
      })
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
          <UploadModal companyId={companyId} setUploadModalOn={setUploadModalOn} />
        </div>
        <SearchResult
          setEditModalOn={setEditModalOn}
          setDeleteConfirmationModalOn={setDeleteConfirmationModalOn}
          companyName={companyName}
          companyAlias={companyAlias}
          cnpjNumber={cnpjNumber}
          companyCity={companyCity}
          companyState={companyState}
          companyLegalNature={companyLegalNature}
          companySize={companySize}
          paymentDate={paymentDate}
          paymentMethod={paymentMethod}
          paymentValue={paymentValue}
          contractUrl={contractUrl}
        />
      </section>
    </>
  );
}

export default Home;
