const AboutSection = () => {
    return (
      <section id="sobre" className="bg-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-secondary-dark">Sobre o Projeto</h2>
          <p className="text-lg text-gray-600 mb-8">
            O Clube do Mesário oferece vantagens exclusivas para quem colaborou nas eleições.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-secondary-dark">O que é o Clube do Mesário?</h3>
              <p className="mt-4 text-gray-600">Um projeto para promover a democracia...</p>
            </div>
            {/* Outro Card */}
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  