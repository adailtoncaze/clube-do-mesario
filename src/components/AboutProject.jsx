import Image from 'next/image'

export default function AboutProject() {
  return (
    <section id='about' className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-700">Sobre o Projeto</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">Conheça mais sobre o Clube do Mesário</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Image
                src="/images/mesarios.png"
                alt="O que é o Clube do Mesário?"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-gray-600 font-semibold mb-2">O Que é o Clube do Mesário?</h3>
                <p className="text-gray-600 mb-4">Um projeto para promover a democracia.</p>
                <div className="flex flex-wrap gap-2">
                  {['Benefícios', 'Descontos', 'Parcerias'].map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Image
                src="/images/engrenagem.png"
                alt="Funcionamento"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-gray-600 font-semibold mb-2">Funcionamento</h3>
                <p className="text-gray-600">
                  Desde a adesão até a comprovação de participação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 