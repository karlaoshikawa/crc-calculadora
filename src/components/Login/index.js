export default function Login() {
  return (
    <div className="login-container">
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          className="email"
          placeholder="exemplo.email@email.com"
          required
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          type="password"
          className="password"
          placeholder="Digite sua senha aqui"
          required
        />
      </label>
    </div>
  );
}
