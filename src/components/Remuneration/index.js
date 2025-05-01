export default function Remuneration() {
  return (
    <div className="remuneration-container">
      <p>remuneração</p>

      <div className="remuneration-box">
        <form>
          <label htmlFor="salario">
            Salário Desejado
            <input type="number" className="salario" id="salario" />
          </label>

          <label htmlFor="horas">
            Horas Trabalhadas no Mês
            <input type="number" className="horas" id="horas" />
          </label>

          <p>Valor da Hora</p>
        </form>
      </div>
    </div>
  );
}
