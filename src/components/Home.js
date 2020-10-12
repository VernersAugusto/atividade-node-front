import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
        <h1>bem vindo!</h1>
        <Link to="/EditarUsuario">Editar Usuário</Link>
        </>
    )
}

export default Home;