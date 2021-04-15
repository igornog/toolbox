import React from "react";
import "./SearchResult.scss";

function SearchResult(params) {

  const openEditModal = () => {
    params.seteditModalOn(true)
  }

  return (
    <>
      <section className="search-result">
        <div className="search-result-company-content">
          <div className="search-result-main-info">
            <h2>Nome da empresa</h2>
            <h3>00.000.000/0000-00</h3>
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
                  <p>apagar</p>
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
