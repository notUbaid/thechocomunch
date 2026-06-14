import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/thechocomunch-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Story' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'custom-cakes', label: 'Cakes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container-max px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src={logo}
              alt="The Choco Munch"
              className="w-10 h-10 rounded-full shadow-sm"
            />
            <h1 className={`font-script text-2xl font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-foreground'}`}>
              The Choco Munch
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${
                  isScrolled ? 'text-foreground/80 hover:text-accent' : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-xl shadow-luxury transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-b border-border/50' : 'max-h-0'}`}>
          <div className="px-6 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg uppercase tracking-wider py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium border-b border-border/30 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;