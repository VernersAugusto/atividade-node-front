import React from "react";
import { useHistory } from "react-router-dom";
import api from "../api/api";

function NovoUsuario() {
    const [usuario, setUsuario] = React.useState({
        nome: "",
        email: "",
        senha: "",
        pokemons: [],
    });

    const history = useHistory();

    function submitForm(event) {
        event.preventDefault();
        api.post("usuarios", usuario)
            .then(result => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });

        history.push("/");
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
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </>
    )
}

export default NovoUsuario;