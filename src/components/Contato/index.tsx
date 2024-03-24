import { FormEvent } from "react";

function Contato() {

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div>
      <h2>Entre em contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div>
          <label htmlFor="numero">Número:</label>
          <input type="tel" id="numero" name="numero" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required />
          {/* Pattern definido para um formato específico de número de telefone */}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required />
        </div>
        <div>
          <button type="submit">Enviar</button>
          <button type="reset">Limpar</button>
        </div>
      </form>
    </div>
  );
}

export default Contato;
