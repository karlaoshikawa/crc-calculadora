export default function FixedCosts() {
  return (
    <div className="fixed-costs-container">
      <p> custos fixos</p>
      <label htmlFor="aluguel">
        Aluguel
        <input type="number" id="aluguel" className="aluguel" />
      </label>
      <label htmlFor="energia">
        Energia
        <input type="number" id="energia" className="energia" />
      </label>
      <label htmlFor="agua">
        Água
        <input type="number" id="agua" className="agua" />
      </label>
      <label htmlFor="internet">
        Internet
        <input type="number" id="internet" className="internet" />
      </label>
      <label htmlFor="mei">
        MEI
        <input type="number" id="mei" className="mei" />
      </label>
      <label htmlFor="site">
        site/Loja Virtual
        <input type="number" id="site" className="site" />
      </label>
      <label htmlFor="telefone">
        Telefone/Celular
        <input type="number" id="telefone" className="telefone" />
      </label>
      <label htmlFor="colaboradores">
        Colaboradores
        <input type="number" id="colaboradores" className="colaboradores" />
      </label>
      <label htmlFor="outros">
        Outros custos
        <input type="text" id="outros" className="outros" />
      </label>
      <p>Total dos custos fixos</p>
    </div>
  );
}
