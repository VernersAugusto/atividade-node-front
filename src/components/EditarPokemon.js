import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getToken} from "../api/auth";

function EditarPokemon({history, match}) {
    const [pokemon, setPokemon] = useState({
        nome: "",
        descricao: "",
        tipo1: "",
        tipo2: "",
    });   

    useEffect(() => {
        api.get(`Pokemons/${match.params.id}`, {headers: {"token": getToken()}})
            .then(result => {                
                setPokemon(result.data);
            });            
            return () => {};
    }, []);

    function submitForm(event) {
        event.preventDefault();        
        api.put(`pokemons/${match.params.id}`, pokemon, {headers: {"token": getToken()}} )
            .then(result => {
                toast.success(result.data, { position: "top-right", 
                                             autoClose: 2000, 
                                             onClose: () => history.push("/pokemons")})                
            })
            .catch(error => toast.error(error.response.data, { position: "top-right" }));
    }

    function pokemonHandler(event) {        
        setPokemon({ ...pokemon, [event.target.name]: event.target.value });
    }

    return (
        <>
            <form className="form" onSubmit={submitForm}>               
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input name="nome"
                        value={pokemon.nome}
                        onChange={pokemonHandler}
                        className="form-control"
                        id="nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descricao</label>
                    <textarea name="descricao"
                        value={pokemon.descricao}
                        onChange={pokemonHandler}
                        className="form-control"
                        id="Descricao"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tipo1">Tipo 1</label>
                    <input className="form-control"
                        id="tipo1"
                        name="tipo1"
                        value={pokemon.tipo1}
                        onChange={pokemonHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="tipo2">Tipo 2</label>
                    <input className="form-control"
                        id="tipo2"
                        name="tipo2"
                        value={pokemon.tipo2}
                        onChange={pokemonHandler}
                    />
                    <small id="tipo2Help" className="form-text text-muted">Não é obrigatório</small>
                </div>
                <Link className="btn btn-danger mr-2" to="/pokemons">Voltar</Link>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default EditarPokemon;