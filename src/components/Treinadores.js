import React, { useEffect, useState } from "react";
import api from "../api/api";
import {Link} from "react-router-dom";

function Treinadores() {
    const [treinadoresLista, setTreinadoresLista] = useState(undefined);

    useEffect(() => {
        api.get("treinadores").then(result => setTreinadoresLista(result.data));
        return () => {};
    }, []);

    return (
        <>
            <Link to="NovoTreinador">Novo Treinador +</Link> 

            {treinadoresLista && treinadoresLista.map((p) => (
                <div key={p.id} className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">{p.nome}</h5>
                    <p className="card-text">{p.premio}</p>
                </div>               
            </div>
            ))}
        </>
    )
}

export default Treinadores;