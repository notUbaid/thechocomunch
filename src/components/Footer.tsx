import { Heart, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/thechocomunch-logo.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919033775880";
    const message = "Hi! I'd love to know more about The Choco Munch.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Workshops', sectionId: 'workshops' },
    { label: 'Custom Cakes', sectionId: 'custom-cakes' },
    { label: 'Gallery', sectionId: 'gallery' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <footer className="bg-gradient-primary text-cream">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
               src={logo} 
               alt="The Choco Munch Logo" 
               className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-script text-3xl font-bold">The Choco Munch</h3>
                <p className="text-cream/80 font-poppins text-sm">Whisked with Passion, Baked with Heart</p>
              </div>
            </div>
            
            <p className="text-cream/90 font-poppins leading-relaxed mb-6 max-w-md">
              Premium home-based bakery offering exquisite custom cakes, delightful workshops, 
              and artisanal treats made with love and the finest ingredients.
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('https://instagram.com/thechocomunch', '_blank')}
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-cream/80 hover:text-cream transition-colors duration-300 font-poppins"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <button 
                onClick={() => window.open('https://maps.google.com/maps?q=Royal+Heritage,+Surat,+Gujarat,+India', '_blank')}
                className="flex items-start space-x-3 hover:text-cream transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 text-cream/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream/80 font-poppins text-sm">Royal Heritage, Surat</p>
                  <p className="text-cream/60 font-poppins text-xs">(Click to view on Google Maps)</p>
                </div>
              </button>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cream/80 flex-shrink-0" />
                <a href="tel:+919033775880" className="text-cream/80 hover:text-cream transition-colors duration-300 font-poppins text-sm">
                  +91 90337 75880
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cream/80 flex-shrink-0" />
                <a href="mailto:thechocomunch@gmail.com" className="text-cream/80 hover:text-cream transition-colors duration-300 font-poppins text-sm">
                  thechocomunch@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="mt-6 bg-cream/10 hover:bg-cream/20 text-cream px-6 py-3 rounded-full font-poppins font-medium transition-colors duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/80 font-poppins text-sm text-center md:text-left">
              © {currentYear} The Choco Munch. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-cream/80 font-poppins text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 fill-pink-soft text-pink-soft animate-pulse" />
              <span>by</span>
              <a 
                href="https://linkedin.com/in/notubaid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream hover:text-vanilla transition-colors duration-300 font-medium"
              >
                Ubaid Khan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;