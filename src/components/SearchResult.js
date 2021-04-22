import React from "react";
import Button from "../atoms/button";
import "./SearchResult.scss";

function SearchResult(params) {

  const openEditModal = () => {
    params.setEditModalOn(true)
  }

  const openDeleteConfirmationModal = () => {
    params.setDeleteConfirmationModalOn(true)
  }

  return (
    <>
      <section className="search-result">
        <div className="search-result-company-content">
          <div className="search-result-main-info">
            <h2>{params.companyName}</h2>
            <h3>{params.cnpjNumber}</h3>
            <Button className="btn-warning">excluir empresa</Button>
          </div>
          <div className="search-result-aditional-info">
            <p>
              Data de abertura<span>00/00/0000</span>
            </p>
            <p>
              <span>cidade</span>
              <span>estado</span>
            </p>
          </div>
          <div className="search-result-aditional-info">
            <p>
              Porte<span>MEI</span>
            </p>
            <p>
              Cód.Nat. Jurídica<span>0000</span>
            </p>
            <p>
              Situação Cadastral<span>ATIVA</span>
            </p>
          </div>
          <div className="hiring-step">
            <p>Step atual no fluxo de contratação<span>DOCUMENTOS</span></p>
            <Button className="btn-atention">retornar step no fluxo de contratação</Button>
          </div>
        </div>
        <div className="search-result-beneficiaries-content">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>nome</th>
                <th>cpf</th>
                <th>plano</th>
                <th>data de nascimento</th>
                <th>tipo de cobrança</th>
                <th>data do pagamento</th>
                <th>ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234567890</td>
                <td>Igor Carlos Mathias Nogueira</td>
                <td>417.775.328-92</td>
                <td>Apartamento</td>
                <td>08/03/1993</td>
                <td>Cartão de crédito</td>
                <td>01/01/2021</td>
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
