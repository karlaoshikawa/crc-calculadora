import "./fixedcosts.scss";

export default function FixedCosts() {
  return (
    <div className="fixed-costs-container">
      <p className="title"> Custos fixos</p>
      <div className="fixed-costs-box">
        <label htmlFor="aluguel">
          <p className="item-name">Aluguel</p>
          <input type="number" id="aluguel" className="aluguel" />
        </label>
        <label htmlFor="energia">
          <p className="item-name">Energia</p>
          <input type="number" id="energia" className="energia" />
        </label>
        <label htmlFor="agua">
          <p className="item-name">Água</p>
          <input type="number" id="agua" className="agua" />
        </label>
        <label htmlFor="internet">
          <p className="item-name">Internet</p>
          <input type="number" id="internet" className="internet" />
        </label>
        <label htmlFor="mei">
          <p className="item-name">MEI</p>
          <input type="number" id="mei" className="mei" />
        </label>
        <label htmlFor="site">
          <p className="item-name">Site / Loja Virtual</p>
          <input type="number" id="site" className="site" />
        </label>
        <label htmlFor="telefone">
          <p className="item-name">Telefone / Celular</p>
          <input type="number" id="telefone" className="telefone" />
        </label>
        <label htmlFor="colaboradores">
          <p className="item-name">Colaboradores</p>
          <input type="number" id="colaboradores" className="colaboradores" />
        </label>
        <label htmlFor="outros">
          <p className="item-name">Outros Custos</p>
          <input type="text" id="outros" className="outros" />
        </label>
      </div>
      <p className="total">Total dos custos fixos</p>
    </div>
  );
}
