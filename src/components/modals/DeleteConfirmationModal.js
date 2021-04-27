import React from "react";
import "./deleteConfirmationModal.scss";
import Button from "../../atoms/button"

function DeleteConfirmationModal(params) {
  const closeConfirmationModal = () => {
    params.setDeleteConfirmationModalOn(false);
    params.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeConfirmationModal}><p>X</p></span>
          <div className="content">
            <p>Esses dados serão apagados diretamente no DW.<br/> Você tem certeza que quer continuar?</p>
            <div>
              <Button onClick={closeConfirmationModal}>Sim, quero deletar</Button>
              <Button onClick={closeConfirmationModal}>Não</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteConfirmationModal;
