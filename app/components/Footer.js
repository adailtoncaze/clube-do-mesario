const Footer = () => {
    return (
      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <img src="/logo.svg" alt="Clube do Mesário" className="h-10 mx-auto md:mx-0" />
              <p className="mt-4">Clube do Mesário 2024. Todos os direitos reservados.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="font-bold">Relacionamento</h3>
              <a href="#contato" className="block mt-2 hover:text-gray-300">Fale Conosco</a>
              <a href="#lgpd" className="block mt-2 hover:text-gray-300">LGPD - Lei Geral de Proteção de Dados</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  