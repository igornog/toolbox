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
            <h2>{params.companyAlias}</h2>
            <h3>{params.companyName}</h3>
            <h3>{params.cnpjNumber}</h3>
            <div>
              <Button className="btn-warning" onClick={openDeleteConfirmationModal}>excluir empresa</Button>
              {params.contractUrl > "" ?
                <a href={params.contractUrl}>
                  <Button className="btn-contract">baixar contrato</Button>
                </a> : <p>Não possui link do contrato</p>              
              }
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
              {params.paymentDate ? <span>{params.paymentDate}</span> : <span>Não foi pago</span>}
            </p>
            <p>
              Método de pagamento
              {params.paymentMethod ? <span>{params.paymentMethod}</span> : <span>-</span>}
            </p>
            <p>
              Valor pago
              {params.paymentValue ? <span>{params.paymentDate}</span> : <span>-</span>}
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
