import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./home.scss";
import toolboxIcon from "../assets/toolbox.png";
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";
import Button from "../atoms/button";
import EditModal from "../components/modals/EditModal";
import UploadModal from "../components/modals/UploadModal";
import DeleteConfirmationModal from "../components/modals/DeleteConfirmationModal";
import EditPaymentInfoModal from "../components/modals/EditPaymentInfoModal";
import CompaniesServices from "../services/companies";
import MembersServices from "../services/members";

function Home() {
  const [inputMask, setInputMask] = useState("99.999.999/9999-99");
  const [searchOn, setSearchOn] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [uploadModalOn, setUploadModalOn] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [deleteConfirmationModalOn, setDeleteConfirmationModalOn] = useState(
    false
  );
  const [editPaymentInfoModal, setEditPaymentInfoModalOn] = useState(false);
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
  const [membersArray, setMembersArray] = useState(false);

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
        if (
          !data.data.data.companies ||
          cnpjRawNumber.length !== 14
        ) {
          setCnpjNotFound(true);
          setSearchOn(false);
        } else {
          setCnpjNotFound(false);
          setSearchOn(true);
          console.log(data);
          const companyId = data.data.data.companies[0].companyId;
          const companyResponse = companyId
            ? await Promise.all([
                CompaniesServices.checkCNPJ(companyId),
                MembersServices.getMembers(companyId),
              ])
            : false;

          return companyResponse;
        }
      })
      .then((companyResponse) => {
        console.log(companyResponse);
        console.log(companyResponse[0].data.data.cnpj);
        const cnpjFormatted = companyResponse[0].data.data.cnpj.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          "$1.$2.$3/$4-$5"
        );
        const paymentDate = companyResponse[0].data.data.paymentDate
          ? companyResponse[0].data.data.paymentDate.split("T")[0]
          : "N/A";
        const paymentMethod = companyResponse[0].data.data.paymentMethod
          ? companyResponse[0].data.data.paymentMethod
          : "N/A";
        const paymentValue =
          companyResponse[0].data.data.paymentMethod > 0
            ? companyResponse[0].data.data.paymentValue
            : "N/A";

        // setCompanyId(companyResponse[0].data.data.id);
        setCompanyName(companyResponse[0].data.data.name);
        setCompanyAlias(companyResponse[0].data.data.alias);
        setCnpjNumber(cnpjFormatted);

        setCompanyCity(companyResponse[0].data.data.addressInfo.city);
        setCompanyState(companyResponse[0].data.data.addressInfo.state);
        setCompanySize(companyResponse[0].data.data.size);
        setCompanyLegalNature(companyResponse[0].data.data.legal_nature.code);

        setContractUrl(companyResponse[0].data.data.contractUrl);

        setPaymentDate(paymentDate);
        setPaymentMethod(paymentMethod);
        setPaymentValue(paymentValue);

        setMembersArray(companyResponse[1].data.data);
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
        </div>
        <div
          className={`edit-modal ${
            editModalOn === true ? "edit-modal-on" : ""
          }`}
        >
          <EditModal
            setModalOn={setModalOn}
            setEditModalOn={setEditModalOn}
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
          />
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
            setModalOn={setModalOn}
          />
        </div>
        <div
          className={`upload-modal ${
            uploadModalOn === true ? "upload-modal-on" : ""
          }`}
        >
          <UploadModal companyId={companyId} setUploadModalOn={setUploadModalOn} setModalOn={setModalOn}/>
        </div>
        <div
          className={`edit-payment-info-modal ${
            editPaymentInfoModal === true ? "edit-payment-info-modal-on" : ""
          }`}
        >
          <EditPaymentInfoModal
            setEditPaymentInfoModalOn={setEditPaymentInfoModalOn}
            setModalOn={setModalOn}
            paymentDate={paymentDate}
            paymentMethod={paymentMethod}
            paymentValue={paymentValue}
          />
        </div>
        <SearchResult
          setModalOn={setModalOn}
          setEditModalOn={setEditModalOn}
          setUploadModalOn={setUploadModalOn}
          setsearchOn={setSearchOn}
          setDeleteConfirmationModalOn={setDeleteConfirmationModalOn}
          setEditPaymentInfoModalOn={setEditPaymentInfoModalOn}
          modalOn={modalOn}
          uploadModalOn={uploadModalOn}
          editModalOn={editModalOn}
          deleteConfirmationModalOn={deleteConfirmationModalOn}
          deleteModalOn={editModalOn}
          editPaymentInfoModal={editPaymentInfoModal}
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
          membersArray={membersArray}
        />
      </section>
    </>
  );
}

export default Home;
