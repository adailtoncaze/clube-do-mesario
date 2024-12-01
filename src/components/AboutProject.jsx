import Image from 'next/image'

export default function AboutProject() {
  return (
    <section id='about' className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-gray-700">Sobre o Projeto</h2>
        <p className="text-gray-600 mb-8 text-xl">Conheça mais sobre o Clube do Mesário</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Image
                src="/images/mesarios.png"
                alt="O que é o Clube do Mesário?"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl text-gray-600 font-semibold mb-2">O Que é o Clube do Mesário?</h3>
                <p className="text-gray-600 mb-4">Um projeto para promover a democracia.</p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    Benefícios
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    Descontos
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    Parcerias
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Image
                src="/images/engrenagem.png"
                alt="Funcionamento"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl text-gray-600 font-semibold mb-2">Funcionamento</h3>
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