export default function BoxInfo() {
  return (
    <div className="boxinfo-container">
      <div className="boxinfo-box-name">
        <label htmlFor="box-name">
          Nome da Caixa
          <input
            type="text"
            className="box-name"
            id="box-name"
            placeholder="Digite o nome da caixa"
          />
        </label>
      </div>

      <div className="boxinfo-itens">
        <form>
          <div>
            <p>Parte 01</p>

            <label htmlFor="altura-01">
              Altura
              <input type="number" className="altura" id="altura-01" />
            </label>

            <label htmlFor="largura-01">
              Largura
              <input type="number" className="largura" id="largura=01" />
            </label>
          </div>

          <div>
            <p>Parte 02</p>

            <label htmlFor="altura">
              Altura
              <input type="number" className="altura" id="altura" />
            </label>

            <label htmlFor="largura">
              Largura
              <input type="number" className="largura" id="largura" />
            </label>
          </div>

          <div>
            <p>Parte 03</p>

            <label htmlFor="altura">
              Altura
              <input type="number" className="altura" id="altura" />
            </label>

            <label htmlFor="largura">
              Largura
              <input type="number" className="largura" id="largura" />
            </label>
          </div>

          <div>
            <p>Parte 04</p>

            <label htmlFor="altura">
              Altura
              <input type="number" className="altura" id="altura" />
            </label>

            <label htmlFor="largura">
              Largura
              <input type="number" className="largura" id="largura" />
            </label>
          </div>
        </form>
        <a>Adicionar parte</a>
      </div>
    </div>
  );
}
