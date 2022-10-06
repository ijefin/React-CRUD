import React from "react";

//creating a class component.
export default class App extends React.Component {
  state = {
    nome: "",
    idade: 22,
    cpf: "1258124912",
    formacao: "Front-end Developer",
  };

  props = {};

  //like that, i can create a function that return's a component
  createComboBox = () => {
    const options = ["Jeff", "Anna"];
    const comboOtptions = options.map((opt) => <option>{opt}</option>);

    return <select>{comboOtptions}</select>;
  };

  //to use the normal function method, is necessary to use a constructor.

  // constructor() {
  //   super();
  //   this.changeName = this.changeName.bind(this);
  // }

  // changeName(event) {
  //   this.setState({
  //     nome: event.target.value,
  //   });
  // }

  //set state para setar o estado passando a propriedade no qual quero alterar
  changeName = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };

  render() {
    //to create a full customizable tag ***remember to use upper case name***
    const SelectWValues = () => this.createComboBox();

    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.changeName} />
        <h1>Olá mundo {this.state.nome}</h1>
        <h1>{this.props.idade}</h1>
        <h1>{this.props.cpf}</h1>
        <h1>{this.props.formacao}</h1>
        {this.createComboBox()}
        <SelectWValues />
      </>
    );
  }
}
