import "./remuneration.scss";

export default function Remuneration() {
  return (
    <div className="remuneration-container">
      <p className="title">Remuneração</p>

      <div className="remuneration-box">
        <form>
          <label htmlFor="salario">
            <p className="item-name">Salário Desejado</p>
            <input type="number" className="salario" id="salario" />
          </label>

          <label htmlFor="horas">
            <p className="item-name">Horas Trabalhadas no mês</p>
            <input type="number" className="horas" id="horas" />
          </label>

          <p className="hour-value-name">Valor da Hora</p>
        </form>
      </div>
    </div>
  );
}
