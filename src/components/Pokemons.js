import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import EditarPokemon from "./EditarPokemon";

function Pokemons() {
    const [pokemonsLista, setPokemonLista] = useState(undefined);

    useEffect(() => {
        api.get("pokemons").then(result => setPokemonLista(result.data));
        return () => { };
    }, []);

    function ExcluirPokemon(id){
        api.delete(`pokemons/${id}`);
        
    }

    return (
        <>
            <Link to="/NovoPokemon">Novo Pokemon +</Link>

            {pokemonsLista && pokemonsLista.map((p) => (
                <div key={p._id} className="card mt-2">
                    <div className="card-header d-flex justify-content-end">
                        <button type="button" className="btn btn-primary btn-sm">Alterar</button>
                        <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => ExcluirPokemon(p._id)}>Excluir</button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{p.nome}</h5>
                        <p className="card-text">{p.descricao}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li key="1" className="list-group-item">{p.tipo1}</li>
                        <li key="2" className={p.tipo2 ? "list-group-item" : "list-group-item d-none"}>{p.tipo2}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Pokemons;