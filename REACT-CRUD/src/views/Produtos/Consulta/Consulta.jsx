import React, { Component } from "react";
import ProdutoService from "../../../services/ProdutoServices/ProdutoServices";

export default class ConsultaProdutos extends React.Component {
  state = {
    listProduct: [],
  };

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  componentDidMount() {
    const produtos = this.service.listAll();
    this.setState({ listProduct: produtos });
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
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>SKU</th>
                    <th>Fornecedor</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listProduct.map((produto, id = 0) => {
                    return (
                      <tr key={id}>
                        <td>{id + 1}</td>
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
