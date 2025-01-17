import React, { useState } from "react";
import "./login.scss";

export default function Login() {
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
    setSuccessMsg("Login realizado com sucesso");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="email-box">
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              className="email"
              placeholder="exemplo.email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError ? (
              <p style={{ color: "red" }}>{emailError}</p>
            ) : (
              <p>{""}</p>
            )}
          </label>
        </div>

        <div className="password-box">
          <label htmlFor="password">
            Senha
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
          </label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
