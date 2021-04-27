import React from "react";
import Button from "../../atoms/button";
import "./uploadModal.scss";

function UploadModal(params) {
  const closeUploadModal = () => {
    params.setUploadModalOn(false);
    params.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeUploadModal}><p>X</p></span>
          <div className="content">
            <Button>Baixar planilha</Button>
            <Button>Subir planilha</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UploadModal;
