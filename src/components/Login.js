import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <p>Já é cadastrado?</p>
            <form style={{ width: "50%" }}>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
            <Link to="/NovoUsuario">Não possui uma conta? Cadastre-se</Link>
        </>
    )
}

export default Login;