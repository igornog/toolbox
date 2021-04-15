import React from "react";
import "./uploadModal.scss";

function UploadModal(params) {
  const closeUploadModal = () => {
    params.setUploadModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeUploadModal}><p>X</p></span>
          Editar
        </div>
      </section>
    </>
  );
}

export default UploadModal;
