"use client";
import Login from "../../components/Login/index.js";
import Register from "../../components/Register/index.js";
import { useState } from "react";

export default function LoginPage() {
  const [clientRoute, setClientRoute] = useState("buttons");

  const handleClient = (item) => {
    setClientRoute(item);
  };

  return (
    <div>
      {clientRoute === "buttons" && (
        <div>
          <p onClick={() => handleClient("login")}>Entrar</p>
          <p onClick={() => handleClient("signIn")}>Cadastrar</p>
        </div>
      )}

      {clientRoute === "login" && (
        <div>
          <Login />
          <p onClick={() => handleClient("buttons")}>Voltar</p>
        </div>
      )}
      {clientRoute === "signIn" && (
        <div>
          <Register />
          <p onClick={() => handleClient("buttons")}>Voltar</p>
        </div>
      )}
    </div>
  );
}
