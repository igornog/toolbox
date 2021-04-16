import React from "react";
import "./deleteConfirmationModal.scss";

function DeleteConfirmationModal(params) {
  const closeConfirmationModal = () => {
    params.setDeleteConfirmationModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeConfirmationModal}><p>X</p></span>
          Editar
        </div>
      </section>
    </>
  );
}

export default DeleteConfirmationModal;
