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
