import { MdRestaurant, MdSpa, MdLocalPharmacy, MdHome, MdSchool, MdArrowForward } from 'react-icons/md'

export default function Categories() {
  const categories = [
    { name: 'Alimentação', icon: <MdRestaurant className="text-2xl" /> },
    { name: 'Saúde & Beleza', icon: <MdSpa className="text-2xl" /> },
    { name: 'Farmácia & Laboratório', icon: <MdLocalPharmacy className="text-2xl" /> },
    { name: 'Casa & Decoração', icon: <MdHome className="text-2xl" /> },
    { name: 'Educação', icon: <MdSchool className="text-2xl" /> },
    { name: 'Ver todas', icon: <MdArrowForward className="text-2xl" /> },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto">
      <div className="flex items-center justify-between min-w-max">
        <p className="text-gray-600 font-medium whitespace-nowrap">Categorias:</p>
        <div className="flex items-center gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
            >
              <span className="text-current">{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 