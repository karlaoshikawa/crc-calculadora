export default function BoxInfo() {
  return (
    <div className="boxinfo-container">
      <label htmlFor="box-name">
        Nome da Caixa
        <input
          type="text"
          className="box-name"
          id="box-name"
          placeholder="Digite o nome da caixa"
        />
      </label>

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

        <label htmlFor="altura">
          Altura
          <input type="number" className="altura" id="altura" />
        </label>

        <label htmlFor="largura">
          Largura
          <input type="number" className="largura" id="largura" />
        </label>

        <label htmlFor="altura">
          Altura
          <input type="number" className="altura" id="altura" />
        </label>

        <label htmlFor="largura">
          Largura
          <input type="number" className="largura" id="largura" />
        </label>

        <label htmlFor="altura">
          Altura
          <input type="number" className="altura" id="altura" />
        </label>

        <label htmlFor="largura">
          Largura
          <input type="number" className="largura" id="largura" />
        </label>
      </form>
      <a>Adicionar parte</a>
    </div>
  );
}
