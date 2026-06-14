import { useState, useEffect, useRef } from 'react';
import { Heart, Star, Award, MessageCircle } from 'lucide-react';
import customCake1 from '../assets/custom-cake-1.jpeg';
import customCake2 from '../assets/custom-cake-2.jpeg';
import customCake3 from '../assets/custom-cupcake-1.jpeg';

const CustomCakesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "+919033775880"; // Replace with actual number
    const message = "Hi! I'd like to inquire about ordering a custom cake. Can you please share more details about pricing and availability?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const cakeImages = [
    { src: customCake1, alt: "Custom chocolate cake with elegant decorations" },
    { src: customCake2, alt: "Multi-tier wedding cake with gold details" },
    { src: customCake3, alt: "Colorful birthday cake with creative piping" }
  ];

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cake is crafted with passion and attention to detail"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Finest quality ingredients and expert techniques"
    },
    {
      icon: Award,
      title: "Limited Orders",
      description: "We take limited custom orders each week for quality assurance"
    }
  ];

  return (
    <section id="custom-cakes" ref={sectionRef} className="section-padding bg-gradient-accent">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate-dark mb-6">
            Custom Cake Orders
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-chocolate-medium font-poppins leading-relaxed mb-6">
              We take limited custom cake orders each week — made with love, 
              handled with care, and crafted using only the finest quality ingredients and expert techniques.
            </p>
            <p className="text-lg text-chocolate-light font-poppins">
              Each cake tells a story and celebrates your special moments with flavors 
              that create lasting memories.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <feature.icon className="w-8 h-8 text-cream" />
              </div>
              <h3 className="font-script text-2xl font-bold text-chocolate-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-chocolate-medium font-poppins">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cake Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cakeImages.map((image, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="relative group aspect-square overflow-hidden rounded-3xl shadow-luxury hover-lift">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="card-luxury bg-background/50 backdrop-blur-sm max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 text-chocolate-medium mx-auto mb-6" />
            <h3 className="font-script text-3xl font-bold text-chocolate-dark mb-4">
              Ready to Order Your Dream Cake?
            </h3>
            <p className="text-chocolate-medium font-poppins mb-8 leading-relaxed">
              Let's discuss your vision, preferences, and special requirements. 
              We'll create something truly memorable for your celebration.
            </p>
            <button
              onClick={openWhatsApp}
              className="btn-luxury inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Send Cake Inquiry
            </button>
          </div>
        </div>

        {/* Quality Promise */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-chocolate-medium font-poppins italic">
              "Every custom cake is a work of art, created with premium ingredients 
              and delivered with the highest standards of hygiene and care."
            </p>
            <p className="text-chocolate-dark font-script text-xl mt-4">
              — Kehkashan Khan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakesSection;