import React from "react";
import { Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho"
import NovoUsuario from "./components/NovoUsuario"
import Pokemons from "./components/Pokemons"
import NovoPokemon from "./components/NovoPokemon"
import EditarPokemon from "./components/EditarPokemon"
import Treinadores from "./components/Treinadores"
import NovoTreinador from "./components/NovoTreinador"
import EditarTreinador from "./components/EditarTreinador"
import EditarUsuario from "./components/EditarUsuario"
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/novoUsuario" component={NovoUsuario}></Route>
        <Route path="/Pokemons" component={Pokemons}></Route>
        <Route path="/NovoPokemon" component={NovoPokemon}></Route>
        <Route path="/EditarPokemon/:id" component={EditarPokemon}></Route>
        <Route path="/NovoTreinador" component={NovoTreinador}></Route>
        <Route path="/EditarTreinador/:id" component={EditarTreinador}></Route>
        <Route path="/Treinadores" component={Treinadores}></Route> 
        <Route path="/EditarUsuario/" component={EditarUsuario}></Route>
      </div>
    </>
  );
}

export default App;