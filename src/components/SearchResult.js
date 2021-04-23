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

  return (
    <>
      <section className="search-result">
        <div className="search-result-company-content">
          <div className="search-result-main-info">
            <h2>{params.companyName}</h2>
            <h3>{params.cnpjNumber}</h3>
            <div>
              <Button className="btn-warning" onClick={openDeleteConfirmationModal}>excluir empresa</Button>
              <a href={params.contractUrl}>
                <Button className="btn-contract">baixar contrato</Button>
              </a>
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
              Data do pagamento<span>{params.paymentDate}</span>
            </p>
            <p>
              Método de pagamento<span>{params.paymentMethod}</span>
            </p>
            <p>
              Valor pago<span>R$ {params.paymentValue},00</span>
            </p>
          </div>
          <div className="hiring-step">
            <p>
              Step atual no fluxo de contratação:<span>DOCUMENTOS</span>
            </p>
            <Button className="btn-atention">
              retornar step
            </Button>
          </div>
        </div>
        <div className="search-result-beneficiaries-content">
          <table>
            <thead>
              <tr>
                <th>perfil</th>
                <th>id</th>
                <th>nome</th>
                <th>cpf</th>
                <th>plano</th>
                <th>data de nascimento</th>
                <th>ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contratante</td>
                <td>1234567890</td>
                <td>Igor Carlos Mathias Nogueira</td>
                <td>417.775.328-92</td>
                <td>Apartamento</td>
                <td>08/03/1993</td>
                <td>
                  <p onClick={openEditModal}>editar</p>
                  <p onClick={openDeleteConfirmationModal}>apagar</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default SearchResult;
