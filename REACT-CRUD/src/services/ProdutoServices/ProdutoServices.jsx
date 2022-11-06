const PRODUTOS = "_PRODUTOS";

export function validationError(errors) {
  this.errors = errors;
  return;
}

export default class ProdutoService {
  save = (produto) => {
    this.validateFields(produto);

    let produtos = localStorage.getItem(PRODUTOS);

    if (!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    produtos.push(produto);

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
  };

  listAll = () => {
    const product = localStorage.getItem(PRODUTOS);
    return JSON.parse(product);
  };

  validateFields = (product) => {
    const errors = [];

    if (!product.nome) {
      errors.push("O compo NOME é obrigatório e não pode ser vazio");
    }

    if (!product.preco || product.preco < 1) {
      errors.push("O campo PREÇO é obrigatório e deve ser maior que 0");
    }

    if (!product.sku) {
      errors.push("O compo SKU é obrigatório e não pode ser vazio");
    }

    if (!product.fornecedor) {
      errors.push("O compo FORNECEDOR é obrigatório e não pode ser vazio");
    }

    if (errors.length > 0) {
      throw new validationError(errors);
    }
  };
}
