export default function Register() {
  return (
    <div className="register-container">
      <span>Por favor utilizar o mesmo e-mail que fez a compra no Hotmart</span>

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        className="email"
        placeholder="exemplo.email@email.com"
        required
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        className="password"
        placeholder="Digite sua senha aqui"
        required
      />
      <a>Finalizar cadastro</a>
    </div>
  );
}
