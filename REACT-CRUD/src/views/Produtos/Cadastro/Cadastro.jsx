import React from "react";
import "../Cadastro/Cadastro.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProdutoService from "../../../services/ProdutoServices/ProdutoServices";

const initialState = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  errors: [],
};

export default class CadastroProduto extends React.Component {
  constructor() {
    super();
    this.service = new ProdutoService();
  }

  state = initialState;

  handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState({ [fieldName]: fieldValue });
  };

  handleSaveButton = () => {
    const product = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };

    try {
      this.service.save(product);
      this.handleClearButton();
      toast.success("Salvo com sucesso!");
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
    return;
  };

  handleClearButton = () => {
    this.setState(initialState);
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
              {this.state.errors.length > 0 &&
                this.state.errors.map((msg) => (
                  <div className="alert alert-dismissible alert-danger">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                    ></button>
                    <strong>Erro! </strong>
                    {msg}!
                  </div>
                ))}
              <div className="row">
                <div className="col-sm">
                  <div className="form-group pb-3">
                    <label>Nome: *</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome do produto"
                      className="form-control"
                      onChange={this.handleInput}
                      value={this.state.nome}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label>SKU: *</label>
                    <input
                      type="text"
                      name="sku"
                      placeholder="SKU do produto (c??digo)"
                      className="form-control"
                      onChange={this.handleInput}
                      value={this.state.sku}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="form-group pb-3">
                    <label>Pre??o: *</label>
                    <input
                      type="number"
                      name="preco"
                      min={0.0}
                      step="0.01"
                      placeholder="Valor do produto"
                      className="form-control"
                      onChange={this.handleInput}
                      value={this.state.preco}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label>Fornecedor: *</label>
                    <input
                      type="text"
                      name="fornecedor"
                      className="form-control"
                      placeholder="Fornecedor do produto (EX: Nike)"
                      onChange={this.handleInput}
                      value={this.state.fornecedor}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <div className="form-group pb-3">
                    <label>Descri????o:</label>
                    <textarea
                      className="form-control"
                      name="descricao"
                      placeholder="Descri????o do produto (opcional)."
                      onChange={this.handleInput}
                      value={this.state.descricao}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm text-end">
                  <button
                    id="clean"
                    className="btn btn-danger low-radius"
                    onClick={this.handleClearButton}
                  >
                    Limpar
                  </button>
                  <button
                    id="save"
                    className="btn btn-success low-radius"
                    onClick={this.handleSaveButton}
                  >
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
