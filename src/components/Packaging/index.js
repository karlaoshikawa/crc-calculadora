export default function Packaging() {
  return (
    <div className="packaging-contaner">
      <p>embalagens</p>

      <div className="packaging-box">
        <form>
          <label htmlFor="caixa-sacola">
            Caixa/Sacola
            <input type="number" className="caixa-sacola" id="caixa-sacola" />
          </label>

          <label htmlFor="tags-cartoes">
            Tags/Cartões
            <input type="number" className="tags-cartoes" id="tags-cartoes" />
          </label>

          <label htmlFor="adesivos">
            Adesivos
            <input type="number" className="adesivos" id="adesivos" />
          </label>

          <label htmlFor="saquinhos">
            Saquinhos
            <input type="number" className="saquinhos" id="saquinhos" />
          </label>

          <label htmlFor="tarifa-envio">
            Tarifa de envio
            <input type="number" className="tarifa-envio" id="tarifa-envio" />
          </label>

          <label htmlFor="outros">
            Outros
            <input type="number" className="outros" id="outros" />
          </label>
        </form>
      </div>
    </div>
  );
}
