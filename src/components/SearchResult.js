import React from "react";
import Button from "../atoms/button";
import "./SearchResult.scss";

function SearchResult(params) {

  const openEditModal = () => {
    params.setEditModalOn(true);
  };

  const openDeleteConfirmationModal = () => {
    params.setDeleteConfirmationModalOn(true);
  };

  const openUploadModal = () => {
    params.setUploadModalOn(true);
  };

  return (
    <>
      <section className={`search-result ${
            params.uploadModalOn === true ? "modal-on" : ""
          }
          ${
            params.editModalOn === true ? "modal-on" : ""
          }
          ${
            params.deleteConfirmationModalOn === true ? "modal-on" : ""
          }
          `}>
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
              ) : ''}
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
          <div className="search-result-aditional-info">
            <p>
              Data do pagamento
              {params.paymentDate ? (
                <span>{params.paymentDate}</span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Método de pagamento
              {params.paymentMethod ? (
                <span>{params.paymentMethod}</span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Valor pago
              {params.paymentValue ? (
                <span>R$ {params.paymentValue},00</span>
              ) : (
                <span>-</span>
              )}
            </p>
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
                <th>id</th>
                <th>nome</th>
                <th>email</th>
                <th>cpf</th>
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
                        <td>{member._id}</td>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.cpf}</td>
                        <td>{member.planId = '5f202a77cb10ce002aa52fc0' ? 'Enfermaria' : 'Apartamento'}</td>
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
