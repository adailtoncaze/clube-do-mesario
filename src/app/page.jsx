import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import AboutProject from '@/components/AboutProject'
import Partners from '@/components/Partners'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Highlights />
      <AboutProject />
      <Partners />
      <Benefits />
      <Footer />
    </main>
  )
} 