import React, { useState } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,256}$/;
    return passwordRegex.test(password);
  };

  const validateLength = (inputValue) => {
    return inputValue.length < 256;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return setEmailError("Email inválido!");
    } else if (!validateLength(email)) {
      return setEmailError("O email deve ter no máximo 255 caracteres.");
    } else if (!validatePassword(password)) {
      return setPasswordError(
        "A senha deve conter no mínimo 6 caracteres, uma letra maiúscula, uma minuscula e um número",
      );
    } else if (!validateLength(password)) {
      return setPasswordError("A senha deve ter no máximo 255 caracteres");
    }
    setSuccessMsg("Cadastro realizado com sucesso");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <span>Por favor utilizar o mesmo e-mail que fez a compra no Hotmart</span>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          type="email"
          className="email"
          placeholder="exemplo.email@email.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError ? (
          <p style={{ color: "red" }}>{emailError}</p>
        ) : (
          <p>{""}</p>
        )}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          className="password"
          placeholder="Digite sua senha aqui"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError ? (
          <p style={{ color: "red" }}>{passwordError}</p>
        ) : (
          <p style={{ color: "green" }}>{successMsg}</p>
        )}
        <button type="submit">Finalizar Cadastro</button>
      </form>
    </div>
  );
}
