import Login from "../../components/Login/index.js";
import Register from "../../components/Register/index.js";

export default function login() {
  return (
    <div>
      <form action="/login" method="post">
        <Login />
        <button>Entrar</button>
      </form>
      <button>Cadastrar</button>
      <form action="/login" method="post">
        <Register />
        <button>Finalizar cadastro</button>
      </form>
    </div>
  );
}
