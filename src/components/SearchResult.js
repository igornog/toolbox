import React from "react";
import Button from "../atoms/button";
import "./SearchResult.scss";

function SearchResult(props) {
  const openEditModal = (e) => {
    props.setMemberSelected(e.target.id);
    props.setEditModalOn(true);
    props.setModalOn(true);
  };

  const openDeleteConfirmationModal = () => {
    props.setDeleteConfirmationModalOn(true);
    props.setModalOn(true);
  };

  const openEditPaymentInfoModal = () => {
    props.setEditPaymentInfoModalOn(true);
    props.setModalOn(true);
  };

  const openUploadModal = () => {
    props.setUploadModalOn(true);
    props.setModalOn(true);
  };

  return (
    <>
      <section
        className={`search-result ${props.modalOn === true ? "modal-on" : ""}
          `}
      >
        <div className="search-result-company-content">
          <div className="search-result-main-info">
            <h2>{props.companyAlias}</h2>
            <h3>{props.companyName}</h3>
            <h3>{props.cnpjNumber}</h3>
            <div>
              <Button
                className="btn-warning"
                onClick={openDeleteConfirmationModal}
              >
                excluir empresa
              </Button>
              {props.contractUrl > "" ? (
                <a href={props.contractUrl}>
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
              <span>{props.companyCity}</span>
              <span>{props.companyState}</span>
            </p>
            <p>
              Porte<span>{props.companySize}</span>
            </p>
            <p>
              Cód.Nat. Jurídica<span>{props.companyLegalNature}</span>
            </p>
          </div>
          <div className="search-result-payment-info">
            <p className="payment-date">
              Data do pagamento
              {props.paymentDate ? (
                <p>
                  <span>{props.paymentDate}</span>
                </p>
              ) : (
                <span>-</span>
              )}
            </p>
            <p className="payment-method">
              Método de pagamento
              {props.paymentMethod ? (
                <p>
                  <span>{props.paymentMethod}</span>
                </p>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Valor pago
              {props.paymentValue > 0 ? (
                <span>R$ {props.paymentValue},00</span>
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
              className={`upload-btn ${props.searchOn === true ? "hide" : ""}`}
              onClick={openUploadModal}
            >
              <p>
                <span>+ </span>UPLOAD DE MEMBROS
              </p>
            </Button>
          </div>
        </div>
        <p className="members-qty">
          Número de membros: {props.membersArray.length}
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
              {props.membersArray
                ? props.membersArray.map((member) => {
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
                          <p id={`${member.memberId}`} onClick={openEditModal}>editar</p>
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
