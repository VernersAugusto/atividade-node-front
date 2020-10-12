import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToken } from "../api/auth";

function Login({history}) {
    const [login, setLogin] = useState({
        email: "",
        senha: "",
    });    

    function submitForm(event){
        event.preventDefault();

        api.post(`usuarios/login`, login)
        .then(result => {                     
            setToken(result.data.token);
            history.push("/home");           
        })
        .catch(error => toast.error(error.response.data, { position: "top-right" }));
    }

    function loginHandler(event){
        setLogin({...login, [event.target.name]: event.target.value})
    }

    return (
        <>
            <ToastContainer />
            <h2>Já é cadastrado?</h2>
            <form style={{ width: "50%" }} onSubmit={submitForm}>
                <div className="form-group" >
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email"
                    className="form-control" 
                    id="email" 
                    value={login.email}
                    onChange={loginHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                    name="senha"
                    className="form-control"
                    id="password" 
                    value={login.senha}
                    onChange={loginHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
            <Link to="/NovoUsuario">Não possui uma conta? Cadastre-se</Link>            
        </>
    )
}

export default Login;