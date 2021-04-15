import React from "react";
import "./editModal.scss";

function EditModal(params) {
  const closeEditModal = () => {
    params.setEditModalOn(false);
  };

  return (
    <section>
      <div>
        <span onClick={closeEditModal}><p>X</p></span>
        Editar
      </div>
    </section>
  );
}

export default EditModal;
