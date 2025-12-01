export default function Hero() {
  return (
    <section id="inicio" className="h-screen flex items-center justify-center bg-cover bg-center text-white section">
      <div className="text-center bg-black/50 p-10 rounded-xl">
        <h1 className="text-5xl font-bold mb-4">Bem-vindo à [TEXTO]</h1>
        <p className="text-xl max-w-xl mx-auto">
          [SUB TEXTO]
        </p>

        <a
          href="#servicos"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold">
          [LINK]
        </a>
      </div>
    </section>
  );
}