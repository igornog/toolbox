import React, { useState } from "react";
import "./updateContractModal.scss";
import Button from "../../atoms/button";
import InputMask from "react-input-mask";
import CompaniesServices from "../../services/companies"

function UpdateContractModal(props) {
  console.log('update', props);
  
  const [cnpjRawNumber, setCnpjRawNumber] = useState(false);

  const closeUpdateContractModal = () => {
    props.setUpdateContractModalOn(false);
    props.setModalOn(false);
  };

  const watchInput = (e) => {
    let rawCnpj = e.target.value.replace(/\D/g, "");
    if (e.target.value) {
      setCnpjRawNumber(rawCnpj);
    }
  };

  const updateSend = () => {
    const dataPayload = {
      "data-raw": {
        "companies": [
          cnpjRawNumber
        ]
      }
    }
    console.log('cnpj', cnpjRawNumber)
    CompaniesServices.updateContract(cnpjRawNumber)
    .then( (data) => {
      console.log('data', data)
      props.setUpdateContractModalOn(false);
      props.setModalOn(false);
    })
  }

  return (
    <>
      <div className="modal-background"></div>
      <section>
        <div>
          <span onClick={closeUpdateContractModal}>
            <p>X</p>
          </span>
          <div className="content">
            <h3>Atualizar Contrato e Coberturas</h3>
            <div className="search-box">
              <div className="data">
                <p>Digite o CNPJ:</p>
                <InputMask
                  onLoad={watchInput}
                  onChange={watchInput}
                  mask={'99.999.999/9999-99'}
                  value={cnpjRawNumber}
                ></InputMask>
              </div>
            </div>
            <Button onClick={updateSend}>Confirmar</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateContractModal;
