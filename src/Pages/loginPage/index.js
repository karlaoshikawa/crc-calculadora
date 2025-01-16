"use client";
import Login from "../../components/Login/index.js";
import Register from "../../components/Register/index.js";
import { useState } from "react";
import Header from "../../components/Header/index.js";
import "./loginPage.scss";

export default function LoginPage() {
  const [clientRoute, setClientRoute] = useState("buttons");

  const handleClient = (item) => {
    setClientRoute(item);
  };

  return (
    <div className="login-register-container">
      <Header />
      <div className="login-register-box">
        {clientRoute === "buttons" && (
          <div className="login-buttons-box">
            <p onClick={() => handleClient("login")}>Entrar</p>
            <p onClick={() => handleClient("signIn")}>Cadastrar</p>
          </div>
        )}

        {clientRoute === "login" && (
          <div className="login-box">
            <Login />
            <p onClick={() => handleClient("buttons")}>Voltar</p>
          </div>
        )}
        {clientRoute === "signIn" && (
          <div className="register-box">
            <Register />
            <p onClick={() => handleClient("buttons")}>Voltar</p>
          </div>
        )}
      </div>
    </div>
  );
}
