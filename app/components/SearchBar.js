import Image from 'next/image';
import { FaSearch, FaUtensils, FaRunning, FaFlask, FaHome, FaPlus, FaUserGraduate } from 'react-icons/fa';
import Link from 'next/link';

const SearchBar = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto">
        {/* Primeira linha com três colunas: Logo, Input e Button */}
        <div className="flex flex-col md:flex-row items-end gap-4 mb-4">
          {/* Coluna 1: Logo */}
          <div className="flex justify-center md:justify-start md:flex-shrink-0">
            <Image
              src={'/images/logo-clube-mesario.png'}
              alt='Logo do Clube do Mesário'
              width={133}
              height={89}
            />
          </div>

          {/* Coluna 2: Input (ocupa 100% do espaço disponível) */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="O que você procura hoje?"
              className="w-full pl-10 pr-4 py-2.5 border rounded focus:outline-none" // Adicione padding-left para o ícone e padding-right para o texto
            />
            <div className="absolute left-3 top-3.5"> {/* Ajuste o posicionamento do ícone conforme necessário */}
              <FaSearch className="text-gray-300" size={16} /> {/* Ícone de busca */}
            </div>
          </div>

          {/* Coluna 3: Button */}
          <div className="flex justify-center md:justify-end md:flex-shrink-0">
            <a href="#cadastro" className="bg-primary text-white text-sm px-6 py-3 rounded hover:bg-primary-light">Cadastre-se</a>
          </div>
        </div>

        {/* Segunda linha com as categorias */}
        <div className="flex py-4 space-x-8 text-secondary-dark text-base items-center justify-between">
        <div className="flex items-center space-x-1">
            <span className='text-gray-500 font-light'>Categorias:</span>
          </div>
          <Link href="/alimentacao" className="flex items-center space-x-1">
            <FaUtensils color="#787878" />
            <span className='hover:text-primary'>Alimentação</span>
          </Link>
          <Link href="/saude-beleza" className="flex items-center space-x-1">
            <FaRunning size={22} color="#787878" />
            <span className='hover:text-primary'>Saúde & Beleza</span>
          </Link>
          <Link href="/farmacia-laboratorio" className="flex items-center space-x-1">
            <FaFlask color="#787878" />
            <span className='hover:text-primary'>Farmácia & Laboratório</span>
          </Link>
          <Link href="/casa-decoracao" className="flex items-center space-x-1">
            <FaHome color="#787878" size={19}/>
            <span className='hover:text-primary'>Casa & Decoração</span>
          </Link>
          <Link href="/casa-decoracao" className="flex items-center space-x-1">
            <FaUserGraduate color="#787878" size={18}/>
            <span className='hover:text-primary'>Educação</span>
          </Link>
          <Link href="/ver-todas" className="flex items-center space-x-1">
            <FaPlus color="#48B281" size={12} />
            <span className="text-primary font-extralight hover:underline">Ver todas</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
