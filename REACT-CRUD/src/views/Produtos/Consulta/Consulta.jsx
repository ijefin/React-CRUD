import React, { Component } from "react";

export default class ConsultaProdutos extends React.Component {
  state = {
    listProduct: [],
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="card rounded-0">
            <div className="card-header rounded-0 ">
              <h3 className="m-2">Consulta</h3>
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>SKU</th>
                    <th>Fornecedor</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listProduct.map((produto) => {
                    return (
                      <tr>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.sku}</td>
                        <td>{produto.fornecedor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
