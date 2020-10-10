import React from "react";
import { Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho"
import NovoUsuario from "./components/NovoUsuario"
import Home from "./components/Home";

function App() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/novoUsuario" exact component={NovoUsuario}></Route>
      </div>
    </>
  );
}

export default App;