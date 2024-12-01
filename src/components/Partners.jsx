"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const partners = [
  {
    name: 'FEELUP',
    logo: '/images/logo-feelup.png',
    discount: '20%',
    location: 'Guarabira'
  },
  {
    name: 'ÓTICA DINIZ',
    logo: '/images/logo-otica-diniz.png',
    discount: '15%',
    location: 'Guarabira'
  },
  {
    name: 'UNICESUMAR',
    logo: '/images/logo-unicesumar.jpg',
    discount: '10%',
    location: 'Guarabira'
  },
  {
    name: 'SANTA LUZIA',
    logo: '/images/logo_farmacia_santa_luzia.png',
    discount: '15%',
    location: 'Sertãozinho'
  },
  {
    name: 'ATUALLE',
    logo: '/images/logo_atualle.png',
    discount: '5%',
    location: 'Guarabira'
  },
  {
    name: 'ZIPPER',
    logo: '/images/logo_zipper.png',
    discount: '20%',
    location: 'Guarabira'
  },
  {
    name: 'RAQUEL MOURA',
    logo: '/images/logo-raquel-estetica.png',
    discount: '10%',
    location: 'Guarabira'
  }
]

export default function Partners() {
  return (
    <section id="parceiros" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/avatar.png"
              alt="Empresas Parceiras"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-4xl font-bold text-gray-700">Empresas Parceiras</h2>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Adesão
          </button>
        </div>
        <p className="text-gray-600 text-xl mb-12">Junte-se a grandes marcas em prol da democracia</p>

        {/* Logo Carousel */}
        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.partner-prev',
              nextEl: '.partner-next',
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
            className="partners-carousel"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.name} className="py-4 px-1 h-[500px]">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 h-full w-full flex flex-col">
                  {/* Logo Container - Altura fixa */}
                  <div className="p-4 bg-secondary border-b border-gray-100 h-[200px]">
                    <div className="relative bg-white rounded-lg p-6 flex items-center justify-center h-full w-full transition-all duration-300 group-hover:shadow-md">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={200}
                          height={100}
                          className="max-w-[160px] max-h-[80px] rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      {/* Nome da empresa - Agora pode quebrar linha */}
                      <h3 className="font-semibold text-gray-800 text-lg mb-4 leading-tight">
                        {partner.name}
                      </h3>

                      {/* Location e Discount na mesma linha */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                          <svg 
                            className="w-4 h-4 shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                            />
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                            />
                          </svg>
                          <span className="text-sm">{partner.location}</span>
                        </div>
                        <span className="text-sm font-bold text-white bg-primary px-3 py-1 rounded-full shrink-0">
                          {partner.discount}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-white text-primary border-2 border-primary py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 font-medium text-sm mt-4">
                      Conhecer o Regulamento
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="partner-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="partner-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 