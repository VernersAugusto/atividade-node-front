import React, { useEffect } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import { getToken, getUsuarioId } from "../api/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NovoUsuario({history, match}) {
    const [usuario, setUsuario] = React.useState({
        nome: "",
        email: "",
        senha: "",
        pokemons: [],
    });

    useEffect(() => {        
        api.get(`Usuarios/${getUsuarioId()}`, {headers: {"token": getToken()}})
        .then(result => {
            setUsuario(result.data);
        });
        return () => {};
    }, []);
    

    function submitForm(event) {
        event.preventDefault();
        api.put(`usuarios/${getUsuarioId()}`, usuario, {headers: {"token": getToken()}})
            .then(result => {
                toast.success(result.data, { position: "top-right", 
                                             autoClose: 2000, 
                                             onClose: () => history.push("/home")})     
            })
            .catch(error => toast.error(error.response.data, { position: "top-right" }));        
    }

    function usuarioHandler(event) {
        setUsuario({ ...usuario, [event.target.name]: event.target.value });
    }

    return (
        <>
            <form className="form" onSubmit={submitForm} style={{ width: "50%" }}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input name="nome"
                        className="form-control"
                        value={usuario.nome}
                        onChange={usuarioHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        className="form-control"
                        value={usuario.email}
                        onChange={usuarioHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                        className="form-control"
                        name="senha"
                        value={usuario.senha}
                        onChange={usuarioHandler}
                    />
                </div>
                <Link className="btn btn-danger mr-2" to="/home">Voltar</Link>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default NovoUsuario;