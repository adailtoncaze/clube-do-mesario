const PartnersSection = () => {
    return (
      <section id="parceiros" className="py-16 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-secondary-dark">Empresas Parceiras</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <img src="/diniz-logo.png" alt="Ótica Diniz" className="mb-4" />
              <h3 className="text-lg font-bold text-secondary-dark">Ótica Diniz</h3>
              <p className="text-gray-600">15% de desconto</p>
              <a href="#regulamento" className="text-primary mt-4 block">Conheça o Regulamento</a>
            </div>
            {/* Outros cards de empresas */}
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;
  