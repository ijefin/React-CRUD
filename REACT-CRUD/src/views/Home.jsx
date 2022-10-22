import React from "react";
import NewProductButton from "../components/Buttons/NewProductButton/NewProductButton";
const Home = () => {
  return (
    <>
      <div className="jumbotron container bg-light">
        <h1 className="display-3 text-primary pt-5">Bem vindo!</h1>
        <p className="lead">
          Utilize a barra de navegação para acessar as páginas.
        </p>
        <hr className="my-4" />
        <p className="lead">
          <NewProductButton />
        </p>
      </div>
    </>
  );
};

export default Home;
