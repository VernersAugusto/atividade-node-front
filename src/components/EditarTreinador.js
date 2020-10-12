import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../api/api";

function NovoTreinador({history, match}) {
    const [treinador, setTreinador] = useState({
        nome: "",
        premio: 0,
        pokemons: [],
    });

    useEffect(() => {
        api.get(`treinadores/${match.params.id}`)
        .then(result => {
            setTreinador(result.data);
        }).
        catch(error => console.log(error));
        return () => {};
    }, []);


    function submitForm(event){
        event.preventDefault();

        api.put(`treinadores/${match.params.id}`, treinador)
            .then(result => {
                toast.success(result.data, { position: "top-right", 
                                             autoClose: 2000, 
                                             onClose: () => history.push("/treinadores")});                
            })
            .catch(error => toast.error(error.response.data, { position: "top-right" }));    
    }

    function treinadorHandler(event){
        setTreinador( {...treinador, [event.target.name]: event.target.value })
    }

    return (
        <>
             <form className="form" onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="Nome">Nome</label>
                    <input name="nome"
                        value={treinador.nome}
                        onChange={treinadorHandler}
                        className="form-control"
                        id="Nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="Nome">Premio</label>
                    <input type="number" name="premio"
                        value={treinador.premio}
                        onChange={treinadorHandler}
                        className="form-control"
                        id="premio" />
                </div>               
                <Link className="btn btn-danger mr-2" to="/Treinadores">Voltar</Link>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default NovoTreinador;