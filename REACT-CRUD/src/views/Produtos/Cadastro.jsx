import React from "react";
import "./Cadastro.css";

export default class CadastroProduto extends React.Component {
  state = {
    nome: "",
    sku: "",
    descricao: "",
    preco: 0,
    fornecedor: "",
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="card" id="card-cadastro">
            <div className="card-header ">
              <h3>Cadastrar novo produto</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm">
                  <div className="form-group pb-3">
                    <label>Nome: *</label>
                    <input
                      type="text"
                      placeholder="Nome do produto"
                      className="form-control"
                      value={this.state.nome}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label>SKU: *</label>
                    <input
                      type="text"
                      placeholder="SKU do produto (código)"
                      className="form-control"
                      value={this.state.sku}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <div className="form-group pb-3">
                    <label>Preço: *</label>
                    <input
                      type="number"
                      min={0.0}
                      step="0.01"
                      placeholder="Valor do produto"
                      className="form-control"
                      value={this.state.preco}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label>Fornecedor: *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fornecedor do produto (EX: Nike)"
                      value={this.state.fornecedor}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <div className="form-group pb-3">
                    <label>Descrição:</label>
                    <textarea
                      className="form-control"
                      placeholder="Descrição do produto (opcional)."
                      value={this.state.descricao}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm text-end">
                  <button id="clean" className="btn btn-danger low-radius ">
                    Limpar
                  </button>
                  <button id="save" className="btn btn-success low-radius ">
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
