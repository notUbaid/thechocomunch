import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero_premium_cake.png'; // Updated to the new generated image

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
    const phoneNumber = "+919033775880";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with subtle elegant gradient for text readability */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium artisan custom chocolate cake in Surat"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Soft, dark gradient fading from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container-max px-6 md:px-12 mt-20 md:mt-0">
        <div className={`transition-all duration-1000 max-w-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">Home Bakery</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight">
            The Choco Munch
          </h1>
          
          <p className="text-2xl md:text-3xl text-chocolate-medium font-script mb-8">
            Whisked with Passion, Baked with Heart
          </p>
          
          <p className="text-lg text-foreground/80 font-poppins mb-12 leading-relaxed max-w-lg">
            Experience the finest artisanal treats. From exquisite custom cakes to delightful hands-on baking workshops, made with uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://wa.me/+919033775880?text=Hi!%20I'd%20love%20to%20join%20your%20baking%20workshop."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex justify-center items-center"
            >
              Join a Workshop
            </a>
            
            <a
              href="https://wa.me/+919033775880?text=Hi!%20I'd%20like%20to%20order%20a%20custom%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream inline-flex justify-center items-center"
            >
              Order a Cake
            </a>
          </div>
        </div>
      </div>

      {/* Elegant minimalist scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-12 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className="flex flex-col items-center gap-3 text-foreground hover:text-foreground/80 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest rotate-90 mb-6">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;