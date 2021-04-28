import React from "react";
import "./deleteConfirmationModal.scss";
import Button from "../../atoms/button";
import CompaniesServices from "../../services/companies";

function DeleteCompanyConfirmationModal(props) {
  console.log("props=>>>", props);

  const closeConfirmationModal = () => {
    props.setDeleteCompanyConfirmationModalOn(false);
    props.setModalOn(false);
  };

  const confirmationModal = () => {
    // chama api
    // CompaniesServices.deleteCompanies(props.companyResponsableId)

    alert("esperando endpoint company...");
    props.setDeleteCompanyConfirmationModalOn(false);
    props.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeConfirmationModal}>
            <p>X</p>
          </span>
          <div className="content">
            <p>
              Os dados da empresa <strong>{props.companyName}</strong> serão
              apagados diretamente no DW.
            </p>
            <p>Você tem certeza que quer continuar?</p>
            <div>
              <Button onClick={confirmationModal}>Sim, quero deletar</Button>
              <Button onClick={closeConfirmationModal}>Não</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteCompanyConfirmationModal;
