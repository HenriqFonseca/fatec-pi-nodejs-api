import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginAdmin() {
    const token = sessionStorage.getItem("token_admin")

    if(token){
        return window.location = "/dashboard/perfil"
    }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    if(password.length < 5){
      return toast.warn("A senha deve conter mais de 5 caracteres");
    }

    axios.post(
      "http://localhost:8081/admin/auth/login",
      {
        email: email,
        senha: password
      }
    ).then((response) => {
        sessionStorage.setItem("token_admin", response.data.token)
        window.location = "/dashboard/perfil"
    }).catch((err) => {
        toast.warn(err.response.data.msg);
        console.log(err)
    }
)
  }

  return (
    <div className="login-body">
    <ToastContainer />
    <div className="container-login">
    <span className="login-form-title">Área restrita</span>

    <span className="login-form-subtitle">Faça login com a conta de administrador</span>

      <div className="wrap-login">
        <form className="login-form" onSubmit={loginSubmitHandler}>


          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn" type="submit">Entrar</button>
          </div>
        </form>
      </div>

      {/* 
        <div className="ajuda">
          <span>Problemas com login?</span>
        </div>

        <div className="wpp-btn">
          Falar com especialistas
        </div> 
      */}
    </div>
  </div>
    );
}