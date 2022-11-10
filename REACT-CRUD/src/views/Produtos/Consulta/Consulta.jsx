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

  showProductSku(sku) {
    console.log(`O SKU do elemento clicado é: ${sku}`);
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listProduct.map((produto, id = 0) => {
                    return (
                      <tr
                        key={id}
                        onDoubleClick={() => this.showProductSku(produto.sku)}
                      >
                        <th>{id + 1}</th>
                        <th>{produto.nome}</th>
                        <th>{produto.preco}</th>
                        <th>{produto.sku}</th>
                        <th>{produto.fornecedor}</th>
                        <td>
                          <button className="btn btn-primary m-1 rounded-0">
                            Editar
                          </button>
                          <button className="btn btn-danger m-1 rounded-0">
                            Excluir
                          </button>
                        </td>
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
