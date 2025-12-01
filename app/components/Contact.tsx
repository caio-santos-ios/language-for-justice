export default function Contact() {
  return (
    <section id="contato" className="py-20 section app-bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>

        <p className="text-gray-700 mb-8">
          Fale conosco e retornaremos o mais rápido possível.
        </p>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full input-global"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full input-global"
          />
          <textarea
            placeholder="Mensagem"
            rows={5}
            className="w-full input-global"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}