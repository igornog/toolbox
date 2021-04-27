import React from "react";
import "./editPaymentInfoModal.scss";
import Button from "../../atoms/button"

function EditPaymentInfoModal(params) {
  const closeEditPaymentInfoModal = () => {
    params.setEditPaymentInfoModalOn(false);
    params.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeEditPaymentInfoModal}><p>X</p></span>
          <div className="content">
            <p>Esses dados serão apagados diretamente no DW.<br/> Você tem certeza que quer continuar?</p>
            <div>
              <Button onClick={closeEditPaymentInfoModal}>Sim, quero deletar</Button>
              <Button onClick={closeEditPaymentInfoModal}>Não</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditPaymentInfoModal;
