import "./packaging.scss";

export default function Packaging() {
  return (
    <div className="packaging-contaner">
      <p className="title">Embalagens</p>

      <div className="packaging-box">
        <form>
          <label htmlFor="caixa-sacola">
            <p className="item-name">Caixa / Sacola</p>
            <input type="number" className="caixa-sacola" id="caixa-sacola" />
          </label>

          <label htmlFor="tags-cartoes">
            <p className="item-name">Tags / Cartões</p>
            <input type="number" className="tags-cartoes" id="tags-cartoes" />
          </label>

          <label htmlFor="adesivos">
            <p className="item-name">Adesivos</p>
            <input type="number" className="adesivos" id="adesivos" />
          </label>

          <label htmlFor="saquinhos">
            <p className="item-name">Saquinhos</p>
            <input type="number" className="saquinhos" id="saquinhos" />
          </label>

          <label htmlFor="tarifa-envio">
            <p className="item-name">Tarifa de envio</p>
            <input type="number" className="tarifa-envio" id="tarifa-envio" />
          </label>

          <label htmlFor="outros">
            <p className="item-name">Outros</p>
            <input type="number" className="outros" id="outros" />
          </label>
        </form>
      </div>
    </div>
  );
}
