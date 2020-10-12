import React, { useEffect, useState } from "react";
import api from "../api/api";
import {Link, useHistory} from "react-router-dom";
import { toast } from "react-toastify";
import {getToken} from "../api/auth";

function Treinadores() {
    const [treinadoresLista, setTreinadoresLista] = useState(undefined);
    const history = useHistory();

    function getTreinador(){
        api.get("treinadores", {headers: {"token": getToken()}}).then(result => setTreinadoresLista(result.data));
    }

    useEffect(() => {
        getTreinador();
        return () => {};
    }, []);

    function EditarPokemon(id){
        history.push(`/EditarTreinador/${id}`);
    }

    function ExcluirPokemon(id){
        api.delete(`treinadores/${id}`, {headers: {"token": getToken()}})
            .then(result => {
                toast.success(result.data, {position: "top-right"});
                getTreinador();
            })
            .catch(error => toast.error(error.response.data, {position: "top-right"}));
    }

    return (
        <>
            <Link to="NovoTreinador">Novo Treinador +</Link> 

            {treinadoresLista && treinadoresLista.map((p) => (
                <div key={p._id} className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">{p.nome}</h5>
                    <p className="card-text">{p.premio}</p>
                    <div className=" d-flex justify-content-end">
                        <button type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => EditarPokemon(p._id)}>Alterar</button>
                        <button type="button" 
                        className="btn btn-danger btn-sm ml-2" 
                        onClick={() => ExcluirPokemon(p._id)}>Excluir</button>
                    </div>
                </div>               
            </div>
            ))}
        </>
    )
}

export default Treinadores;