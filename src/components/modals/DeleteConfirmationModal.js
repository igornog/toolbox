import React from "react";
import "./deleteConfirmationModal.scss";
import Button from "../../atoms/button"
import CompaniesServices from "../../services/companies";

function DeleteConfirmationModal(props) {

  const closeConfirmationModal = () => {
    props.setDeleteConfirmationModalOn(false);
    props.setModalOn(false);
  };

  const confirmationModal = () => {
    // chama api
    // CompaniesServices.deleteCompanies(props.companyResponsableId)
    
    alert('esperando endpoint...');
    props.setDeleteConfirmationModalOn(false);
    props.setModalOn(false);
  }

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeConfirmationModal}><p>X</p></span>
          <div className="content">
            <p>Esses dados serão apagados diretamente no DW.<br/> Você tem certeza que quer continuar?</p>
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

export default DeleteConfirmationModal;
