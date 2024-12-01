import Image from 'next/image'

export default function Benefits() {
  const otherBenefits = [
    'Dispensa do serviço pelo dobro dos dias de convocação e da seleção eleitoral',
    'Garantia dos dias trabalhados em horas de estágio extracurricular',
    'Critério de desempate em concursos públicos, se houver previsão em edital',
    'Isenção da taxa de inscrição em concurso público, se houver previsão em edital',
    'Auxílio-alimentação para o dia da eleição'
  ]

  return (
    <section id="beneficios" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-700 mb-8">
              Benefícios Exclusivos para Mesários e Colaboradores
            </h2>
            <p className="text-gray-600 text-xl mb-8">
              Faça a diferença na democracia. Seja um Mesário Voluntário e desfrute dos 
              benefícios oferecidos pelo Clube do Mesário!
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Cadastre-se
            </button>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl text-gray-600 font-semibold mb-6">
              Outros benefícios em ser Mesário
            </h3>
            <div className="space-y-4">
              {otherBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 