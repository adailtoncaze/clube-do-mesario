import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import HighlightSection from './components/HighlightSection';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <HeroSection />
      <HighlightSection />
      <AboutSection />
      <PartnersSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
