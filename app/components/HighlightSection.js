const HighlightSection = () => {
  return (
    <section id="destaques" className="py-16">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-secondary-dark">Destaques</h2>
        <p className="font-normal text-xl text-secondary-dark w-full md:w-2/3 mb-8">
          No <span className="text-primary">Clube do Mesário</span>, as vantagens vão muito além do reconhecimento social.
          Empresas e instituições parceiras oferecem uma variedade de <span className="text-primary">benefícios exclusivos</span> para quem atuou como mesário ou colaborador nas eleições.
        </p>
        <p className="text-2xl text-secondary-dark pb-8">Confira os principais destaques:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <img src="/restaurante.jpg" alt="Restaurante" className="mb-4 rounded" />
            <h3 className="text-xl font-bold text-secondary-dark">Descontos em Restaurantes</h3>
            <a href="#ofertas" className="text-primary mt-4 block">Ver Ofertas</a>
          </div>
          {/* Outros cards de destaque */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <img src="/restaurante.jpg" alt="Restaurante" className="mb-4 rounded" />
            <h3 className="text-xl font-bold text-secondary-dark">Descontos em Restaurantes</h3>
            <a href="#ofertas" className="text-primary mt-4 block">Ver Ofertas</a>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <img src="/restaurante.jpg" alt="Restaurante" className="mb-4 rounded" />
            <h3 className="text-xl font-bold text-secondary-dark">Descontos em Restaurantes</h3>
            <a href="#ofertas" className="text-primary mt-4 block">Ver Ofertas</a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HighlightSection;
