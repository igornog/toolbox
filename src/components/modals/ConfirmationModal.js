import React, { useState } from "react";
import "./confirmationModal.scss";
import Button from "../../atoms/button";
import PaymentsServices from "../../services/payments";

function ConfirmationModal(props) {
  const [plansActivedSuccessfully, setplansActivedSuccessfully] = useState(
    false
  );

  const closeConfirmationModal = () => {
    props.setConfirmationModalOn(false);
    props.setModalOn(false);
    setplansActivedSuccessfully(false);
  };

  const confirmationModal = () => {
    PaymentsServices.activatePlans()
      .then((data) => {
        console.log(data);
        setplansActivedSuccessfully(true);
      })
      .catch((e) => {
        alert("Erro na requisição, checar console", e);
      });
  };

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeConfirmationModal}>
            <p>X</p>
          </span>
          <div className="content">
            {plansActivedSuccessfully === true ? (
              <p>Planos ativados com sucesso!</p>
            ) : (
              <>
                {" "}
                <p>Deseja forçar a ativação dos planos no DW?</p>
                <div>
                  <Button onClick={confirmationModal}>
                    Sim, quero continuar
                  </Button>
                  <Button onClick={closeConfirmationModal}>Não</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmationModal;
