import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero-bakery-spread.jpg'; // Replace with actual hero image path

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = (message: string) => {
    const phoneNumber = "+919033775880"; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium baked goods"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate-dark/70 via-chocolate-medium/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-pink-soft/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-mint-soft/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-vanilla/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="font-script text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
            The Choco Munch
          </h1>
          
          <p className="text-2xl md:text-3xl text-vanilla font-script mb-4">
            Whisked with Passion, Baked with Heart
          </p>
          
          <p className="text-lg md:text-xl text-cream/90 font-poppins mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium home-based bakery offering exquisite custom cakes, delightful workshops, 
            and artisanal treats made with love and the finest ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => openWhatsApp("Hi! I'd love to join your baking workshop.")}
              className="btn-luxury text-lg px-10 py-5 inline-flex items-center gap-3"
            >
              <span>Join a Workshop</span>
            </button>
            
            <button
              onClick={() => openWhatsApp("Hi! I'd like to order a custom cake.")}
              className="btn-cream text-lg px-10 py-5 inline-flex items-center gap-3"
            >
              <span>Order a Cake</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-cream/70 hover:text-cream transition-colors duration-300"
        >
          <span className="text-sm font-poppins mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;