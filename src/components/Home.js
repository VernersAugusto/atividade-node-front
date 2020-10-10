import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <p>Já é cadastrado?</p>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
            <NavLink to="/NovoUsuario">Não possui uma conta? Cadastre-se</NavLink>
        </>
    )
}

export default Home;