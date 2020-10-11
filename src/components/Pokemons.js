import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function Pokemons() {
    const [pokemonsLista, setPokemonLista] = useState(undefined);

    useEffect(() => {
        api.get("pokemons").then(result => setPokemonLista(result.data));
        return () => { };
    }, []);

    return (
        <>
            <Link to="/NovoPokemon">Novo Pokemon +</Link>

            {pokemonsLista && pokemonsLista.map((p) => (
                <div key={p.id} className="card mt-2">
                    <div className="card-body">
                        <h5 className="card-title">{p.nome}</h5>
                        <p className="card-text">{p.descricao}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{p.tipo1}</li>
                        <li className={p.tipo2 ? "list-group-item" : "list-group-item d-none"}>{p.tipo2}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Pokemons;