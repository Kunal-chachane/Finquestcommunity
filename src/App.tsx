import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FintechGrid } from './components/FintechGrid';
import { VideoSection } from './components/VideoSection';
import { InteractiveMap } from './components/InteractiveMap';
import { CategoryFilters } from './components/CategoryFilters';
import { CompanyProfiles } from './components/CompanyProfiles';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { CursorDroplets } from './components/CursorDroplets';
import backgroundImage from 'figma:asset/c64fba8fc32367e60d516b3a407d991b675b6590.png';

export default function App() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <CursorDroplets />
      <Navigation />
      <HeroSection />
      <FintechGrid />
      <VideoSection />
      <InteractiveMap />
      <CategoryFilters />
      <CompanyProfiles />
      <CallToAction />
      <Footer />
    </div>
  );
}