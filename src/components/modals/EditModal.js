import React from "react";
import "./editModal.scss";

function EditModal(params) {
  const closeEditModal = () => {
    params.setEditModalOn(false);
    params.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <main>
        <section>
          <span className="close-btn" onClick={closeEditModal}><p>X</p></span>
          <header>
            <h3>Dados para edição</h3>
            <p>{params.companyName}</p>
            <p>{params.companyAlias}</p>
            <p>{params.cnpjNumber}</p>
          </header>
          <div className="payment-info">
            <h3>Pagamento</h3>
            <p>Data: <span>{params.paymentDate}</span></p>
            <p>Método: <span>{params.paymentMethod}</span></p>
            <p>Valor: <span>{params.paymentValue}</span></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditModal;
