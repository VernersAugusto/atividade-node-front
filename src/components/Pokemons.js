import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getToken} from "../api/auth";

function Pokemons() {
    const [pokemonsLista, setPokemonLista] = useState(undefined);
    const history = useHistory();

    function getPokemon(){
        api.get("pokemons", {headers: {"token": getToken()}}).then(result => setPokemonLista(result.data));
    }

    useEffect(() => {
        getPokemon();
        return () => { };
    }, []);


    function ExcluirPokemon(id){
        api.delete(`pokemons/${id}`, {headers: {"token": getToken()}})
            .then(result => {
                toast.success(result.data, { position: "top-right" });
                getPokemon();
            })
            .catch(error => toast.error(error.response.data, { position: "top-right" }));
    }

    function EditarPokemon(id){        
        history.push(`/EditarPokemon/${id}`);
    }

    return (
        <>
            <Link to="/NovoPokemon">Novo Pokemon +</Link>

            {pokemonsLista && pokemonsLista.map((p) => (
                <div key={p._id} className="card mt-2">                    
                    <div className="card-body">
                        <h5 className="card-title">{p.nome}</h5>
                        <p className="card-text">{p.descricao}</p>
                        <div className=" d-flex justify-content-end">
                            <button type="button" 
                            className="btn btn-primary btn-sm" 
                            onClick={() => EditarPokemon(p._id)}>Alterar</button>
                            <button type="button" 
                            className="btn btn-danger btn-sm ml-2" 
                            onClick={() => ExcluirPokemon(p._id)}>Excluir</button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li key="1" className="list-group-item">{p.tipo1}</li>
                        <li key="2" className={p.tipo2 ? "list-group-item" : "list-group-item d-none"}>{p.tipo2}</li>
                    </ul>
                </div>
            ))}
            <ToastContainer />
        </>
    )
}

export default Pokemons;