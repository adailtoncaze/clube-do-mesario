"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const slides = [
  {
    id: 1,
    logo: '/images/logo-feelup.png',
    type: 'MODA FITNESS',
    title: 'FEELUP',
    discounts: [
      '20% de desconto no PIX',
      '15% de desconto no Cartão de Crédito'
    ],
    banner: '/images/banner_feelup.png'
  },
  {
    id: 2,
    logo: '/images/logo-otica-diniz.png',
    type: 'ÓTICA',
    title: 'DINIZ',
    discounts: [
      '15% de desconto no PIX',
      '10% de desconto no Cartão de Crédito'
    ],
    banner: '/images/banner_diniz_social.png'
  },
  // ... outros slides
]

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] bg-[url('/images/banner-hero.svg')] bg-cover bg-no-repeat bg-center">
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            centeredSlides={true}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{
              el: '.swiper-custom-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} bg-white w-2 h-2 opacity-50 rounded-full cursor-pointer transition-all duration-300"></span>`
              },
            }}
            navigation={{
              prevEl: '.swiper-custom-button-prev',
              nextEl: '.swiper-custom-button-next',
            }}
            className="h-full w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="h-full flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-8 h-full">
                  {/* Coluna da Esquerda */}
                  <div className="flex flex-col items-start space-y-4 justify-center max-w-xl">
                    <div className="flex justify-center items-center border-2 rounded-lg overflow-hidden w-[115px] h-[115px] bg-no-repeat bg-center bg-cover">
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.logo}
                          alt={slide.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xl font-extralight">{slide.type}</p>
                      <h1 className="text-4xl font-bold">{slide.title}</h1>
                    </div>
                    <div className="space-y-1">
                      {slide.discounts.map((discount, index) => (
                        <p key={index} className="text-2xl font-semibold">{discount}</p>
                      ))}
                    </div>
                    <a
                      href="#ofertas"
                      className="mt-4 inline-flex items-center justify-center px-8 py-3 border border-white rounded-full text-sm font-medium text-white hover:bg-white hover:text-primary transition-colors"
                    >
                      Ver ofertas
                    </a>
                  </div>

                  {/* Coluna da Direita */}
                  <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-end">
                    <div className="flex justify-center items-center border-2 rounded-lg overflow-hidden w-[580px] h-[300px] bg-no-repeat bg-center bg-cover">
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.banner}
                          alt={`${slide.title} Banner`}
                          fill
                          sizes="(max-width: 580px) 100vw, 580px"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="swiper-custom-pagination flex gap-2" />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="swiper-custom-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer hover:bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-custom-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer hover:bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  )
} 