export default function Login() {
  return (
    <div className="login-container">
      <label for="email">E-mail</label>
      <input
        type="email"
        className="email"
        placeholder="exemplo.email@email.com"
        required
      />

      <label for="password">Senha</label>
      <input
        type="password"
        className="password"
        placeholder="Digite sua senha aqui"
        required
      />
    </div>
  );
}
