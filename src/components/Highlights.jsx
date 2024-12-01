import Image from 'next/image'

export default function Highlights() {
  const highlights = [
    {
      title: 'Descontos em Restaurantes e Lanchonetes',
      image: '/images/desconto-restaurante.png',
      category: 'Alimentação',
    },
    {
      title: 'Ofertas especiais para transformar sua casa',
      image: '/images/casa-decoracao.webp',
      category: 'Casa & Decoração',
    },
    {
      title: 'Descontos exclusivos em saúde e beleza',
      image: '/images/saude-e-beleza.jpg',
      category: 'Saúde & Beleza',
    },
  ]

  return (
    <section id="destaques" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">
          Destaques
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-600 mb-2 text-xl">
            No <span className="text-primary">Clube do Mesário</span>, as vantagens vão muito além do reconhecimento social.
            Empresas e instituições parceiras oferecem uma variedade de{' '}
            <span className="text-primary">benefícios exclusivos</span> para quem atuou como mesário ou colaborador nas eleições.
          </p>
          <p className="text-primary text-2xl font-medium py-4">
            Confira os principais destaques:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              {/* Imagem de fundo */}
              <div className="relative h-[400px] w-full">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-4">
                  {highlight.title}
                </h3>
                <div className="flex items-center justify-between">
                  <button className="text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                    Ver ofertas
                  </button>
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    {highlight.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 