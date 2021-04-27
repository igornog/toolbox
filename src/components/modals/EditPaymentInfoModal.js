import React from "react";
import "./editPaymentInfoModal.scss";
import Button from "../../atoms/button";

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
          <span onClick={closeEditPaymentInfoModal}>
            <p>X</p>
          </span>
          <div className="content">
            <h3>Alterar dados de pagamento</h3>
            <div className="data">
            <div className="payment-value">
                <p>
                  Valor pago: <span>{params.paymentValue}</span>
                </p>
              </div>
              <div className="payment-date">
                <p>
                  Data do pagamento: <input type="date" id="payment-day" name="payment-day"></input>
                </p>
              </div>
              <div className="payment-method">
                <p>
                  Método de pagamento:
                  <select>
                    <option>Cartão de Crédito</option>
                    <option>Boleto</option>
                  </select>
                </p>
              </div>
            </div>
            <Button onClick={closeEditPaymentInfoModal}>Confirmar</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditPaymentInfoModal;
