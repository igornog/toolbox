import React from "react";
import Button from "../atoms/button";
import "./SearchResult.scss";

function SearchResult(params) {
  const openEditModal = () => {
    params.setEditModalOn(true);
    params.setModalOn(true);
  };

  const openDeleteConfirmationModal = () => {
    params.setDeleteConfirmationModalOn(true);
    params.setModalOn(true);
  };

  const openEditPaymentInfoModal = () => {
    params.setEditPaymentInfoModalOn(true);
    params.setModalOn(true);
  };

  const openUploadModal = () => {
    params.setUploadModalOn(true);
    params.setModalOn(true);
  };

  return (
    <>
      <section
        className={`search-result ${params.modalOn === true ? "modal-on" : ""}
          `}
      >
        <div className="search-result-company-content">
          <div className="search-result-main-info">
            <h2>{params.companyAlias}</h2>
            <h3>{params.companyName}</h3>
            <h3>{params.cnpjNumber}</h3>
            <div>
              <Button
                className="btn-warning"
                onClick={openDeleteConfirmationModal}
              >
                excluir empresa
              </Button>
              {params.contractUrl > "" ? (
                <a href={params.contractUrl}>
                  <Button className="btn-contract">baixar contrato</Button>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="search-result-aditional-info">
            {/* <p>
              Data de abertura<span>00/00/0000</span>
            </p> */}
            <p>
              <span>{params.companyCity}</span>
              <span>{params.companyState}</span>
            </p>
            <p>
              Porte<span>{params.companySize}</span>
            </p>
            <p>
              Cód.Nat. Jurídica<span>{params.companyLegalNature}</span>
            </p>
          </div>
          <div className="search-result-payment-info">
            <p className="payment-date">
              Data do pagamento
              {params.paymentDate ? (
                <p>
                  <span>{params.paymentDate}</span>
                </p>
              ) : (
                <span>-</span>
              )}
            </p>
            <p className="payment-method">
              Método de pagamento
              {params.paymentMethod ? (
                <p>
                  <span>{params.paymentMethod}</span>
                </p>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Valor pago
              {params.paymentValue > 0 ? (
                <span>R$ {params.paymentValue},00</span>
              ) : (
                <span>N/A</span>
              )}
            </p>
            <Button onClick={openEditPaymentInfoModal} className="edit-btn">
              editar
            </Button>
          </div>
          <div className="hiring-step">
            <p>
              Step atual no fluxo de contratação:<span>-</span>
            </p>
            <Button className="btn-atention">retornar step</Button>
            <Button
              className={`upload-btn ${params.searchOn === true ? "hide" : ""}`}
              onClick={openUploadModal}
            >
              <p>
                <span>+ </span>UPLOAD DE MEMBROS
              </p>
            </Button>
          </div>
        </div>
        <p className="members-qty">
          Número de membros: {params.membersArray.length}
        </p>
        <div className="search-result-beneficiaries-content">
          <table>
            <thead>
              <tr>
                <th>perfil</th>
                <th>carteirinha</th>
                <th>nome</th>
                <th>cpf</th>
                <th>email</th>
                <th>plano</th>
                <th>data de nascimento</th>
                <th>ações</th>
              </tr>
            </thead>
            <tbody>
              {params.membersArray
                ? params.membersArray.map((member) => {
                    return (
                      <tr>
                        <td>{member.profile}</td>
                        <td>{member.memberId}</td>
                        <td>{member.name}</td>
                        <td>{member.cpf}</td>
                        <td>{member.email}</td>
                        <td>
                          {
                            (member.planId = "5f202a77cb10ce002aa52fc0"
                              ? "Enfermaria"
                              : "Apartamento")
                          }
                        </td>
                        <td>{member.birthDate}</td>
                        <td>
                          <p onClick={openEditModal}>editar</p>
                          <p onClick={openDeleteConfirmationModal}>apagar</p>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default SearchResult;
