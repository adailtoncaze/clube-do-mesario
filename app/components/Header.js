const Header = () => {
    return (
      <header className="bg-primary p-3">
        <div className="container mx-auto flex justify-between">
          <nav className="hidden md:flex space-x-6 text-white text-xs text- ml-auto">
            <a href="#destaques" className="hover:underline font-light">Destaques</a>
            <a href="#sobre" className="hover:underline font-light">Sobre o Projeto</a>
            <a href="#parceiros" className="hover:underline font-light">Empresas Parceiras</a>
            <a href="#beneficios" className="hover:underline font-light">Benefícios</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  