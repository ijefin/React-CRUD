import React from "react";

//creating a class component.
export default class App extends React.Component {
  state = {
    nome: "",
  };

  //set state para setar o estado passando a propriedade no qual quero alterar
  changeName = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };

  render() {
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.changeName} />
        <h1>Olá mundo {this.state.nome}</h1>
      </>
    );
  }
}
