import React from "react";
import { Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho"
import NovoUsuario from "./components/NovoUsuario"
import Pokemons from "./components/Pokemons"
import NovoPokemon from "./components/NovoPokemon"
import Treinadores from "./components/Treinadores"
import NovoTreinador from "./components/NovoTreinador"
import Login from "./components/Login";

function App() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <Route path="/" exact component={Login}></Route>
        <Route path="/novoUsuario" component={NovoUsuario}></Route>
        <Route path="/Pokemons" component={Pokemons}></Route>
        <Route path="/NovoPokemon" component={NovoPokemon}></Route>
        <Route path="/NovoTreinador" component={NovoTreinador}></Route>
        <Route path="/Treinadores" component={Treinadores}></Route> 
      </div>
    </>
  );
}

export default App;