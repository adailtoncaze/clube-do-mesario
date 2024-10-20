'use client'; // Isso força o Next.js a renderizar no lado do cliente

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Importando o CSS do efeito de fade
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules'; // Importando os módulos necessários

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[url('/images/banner-hero.svg')] bg-no-repeat bg-cover">
      <div className="">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade, Pagination]} // Adiciona os módulos necessários
          autoplay={{
            delay: 4000,  // Define o intervalo de tempo (em milissegundos)
            disableOnInteraction: false,  // O autoplay não é interrompido após a interação do usuário
          }}
          speed={1000} // Define o tempo da transição entre os slides (1 segundo)
          centeredSlides={true}
          loop={true}
          effect="fade" // Define o efeito de transição para "fade"
          fadeEffect={{ crossFade: true }} // Habilita o crossFade
          pagination={{ dynamicBullets: true, clickable: true }} // Habilita a paginação
          navigation={true}
          className="mySwiper"
        >

          {/* Slide 1 */}
          <SwiperSlide className="relative flex items-center justify-center"> {/* Ajuste principal aqui */}
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center text-white p-8 min-h-[60vh]">
              {/* Coluna da Esquerda */}
              <div className="flex flex-col items-start space-y-4 justify-center">
                <div className="flex justify-center items-center border-2 rounded-lg overflow-hidden w-[115px] h-[115px] bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: "url('/images/logo-feelup.png')" }}
                >
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl font-bold mb-1">FEELUP</h1> {/* Margem inferior do h1 ajustada */}
                  <p className="text-xl mt-0 font-extralight">MODA FITNESS</p> {/* Margem superior do p removida */}
                </div>
                <p className="text-2xl font-semibold">20% de desconto no PIX <br /> 15% de desconto no Cartão de Crédito</p> {/* Margem superior do p removida */}
                <div className="flex justify-center md:justify-end md:flex-shrink-0">
                  <a href="#ofertas" className="bg-primary text-white border border-white text-sm px-6 py-3 rounded-full hover:bg-white hover:text-primary">Ver ofertas</a>
                </div>

              </div>

              {/* Coluna da Direita */}
              <div className="flex justify-center items-center border-2 rounded-lg overflow-hidden w-[580px] h-[300px] bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: "url('/images/banner_feelup.png')" }}
              >
              </div>

            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative flex items-center justify-center"> {/* Ajuste principal aqui */}
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center text-white p-8 min-h-[60vh]">
              {/* Coluna da Esquerda */}
              <div className="flex flex-col items-start space-y-4 justify-center">
                <div className="flex justify-center items-center border-2 rounded-lg overflow-hidden w-[115px] h-[115px] bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: "url('/images/logo-otica-diniz.png')" }}
                >
                </div>
                <div className="flex flex-col justify-center">
                <p className="text-xl mb-0 font-extralight">ÓTICA</p> {/* Margem superior do p removida */}
                  <h1 className="text-4xl font-bold mb-1">DINIZ</h1> {/* Margem inferior do h1 ajustada */}
                  
                </div>
                <p className="text-2xl font-semibold">15% de descontos no PIX <br /> 10% de desconto no Cartão de Crédito</p> {/* Margem superior do p removida */}
                <div className="flex justify-center md:justify-end md:flex-shrink-0">
                  <a href="#ofertas" className="bg-primary text-white border border-white text-sm px-6 py-3 rounded-full hover:bg-white hover:text-primary">Ver ofertas</a>
                </div>

              </div>

              {/* Coluna da Direita */}
              <div className="flex justify-center items-center border-2 rounded-lg overflow-hidden w-[580px] h-[300px] bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: "url('/images/banner_diniz_social.png')" }}
              >
              </div>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
