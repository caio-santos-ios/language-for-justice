const services = [
  {
    icon: "/service1.svg",
    title: "[TITULO]",
    description: "[TEXTO]"
  },
  {
    icon: "/service2.svg",
    title: "[TITULO]",
    description: "[TEXTO]"
  },
  {
    icon: "/service3.svg",
    title: "[TITULO]",
    description: "[TEXTO]"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-100 section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">[SEÇÃO 2]</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
              <p className="text-gray-600 text-center mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}