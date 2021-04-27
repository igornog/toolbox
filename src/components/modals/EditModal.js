import React from "react";
import "./editModal.scss";

function EditModal(props) {
  const closeEditModal = () => {
    props.setEditModalOn(false);
    props.setModalOn(false);
  };

  return (
    <>
      <div className="modal-background"></div>
      <main>
        <section>
          <span className="close-btn" onClick={closeEditModal}><p>X</p></span>
          <header>
            <h3>Dados para edição</h3>
            <p>{props.companyName}</p>
            <p>{props.companyAlias}</p>
            <p>{props.cnpjNumber}</p>
          </header>
          <div className="payment-info">
            <h3>Pagamento</h3>
            <p>Data: <span>{props.paymentDate}</span></p>
            <p>Método: <span>{props.paymentMethod}</span></p>
            <p>Valor: <span>{props.paymentValue}</span></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditModal;
