import React from "react";
import "./deleteConfirmationModal.scss";

function DeleteConfirmationModal(params) {
  const closeConfirmationModal = () => {
    params.setDeleteConfirmationModalOn(false);
  };

  return (
    <section>
      <div>
        <span onClick={closeConfirmationModal}><p>X</p></span>
        Editar
      </div>
    </section>
  );
}

export default DeleteConfirmationModal;
