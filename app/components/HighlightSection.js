const HighlightSection = () => {
    return (
      <section id="destaques" className="py-16 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-secondary-dark">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <img src="/restaurante.jpg" alt="Restaurante" className="mb-4 rounded" />
              <h3 className="text-xl font-bold text-secondary-dark">Descontos em Restaurantes</h3>
              <a href="#ofertas" className="text-primary mt-4 block">Ver Ofertas</a>
            </div>
            {/* Outros cards de destaque */}
          </div>
        </div>
      </section>
    );
  };
  
  export default HighlightSection;
  