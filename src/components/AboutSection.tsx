import { useState, useEffect, useRef } from 'react';
import { Award, Heart, Shield, Star } from 'lucide-react';
import kehkashanPortrait from '../assets/kehkashan-portrait.jpeg';

const AboutSection = () => {
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

  const features = [
    {
      icon: Star,
      title: "Premium Ingredients",
      description: "Crafted with care, quality, and expert guidance from me"
    },
    {
      icon: Shield,
      title: "Hygiene First",
      description: "Maintaining the highest standards of cleanliness and safety"
    },
    {
      icon: Heart,
      title: "Joyful Teaching",
      description: "Creating memorable experiences while you learn to bake"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Years of experience in creating delightful baked goods"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-cream">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-primary rounded-3xl opacity-20"></div>
              <img 
                src={kehkashanPortrait}
                alt="Kehkashan Khan - Founder of The Choco Munch"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-luxury hover-lift"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate-dark mb-6">
              About Me
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-chocolate-medium mb-6 font-poppins leading-relaxed">
                Hi! I'm <span className="font-semibold text-chocolate-dark">Kehkashan Khan</span>, 
                founder of The Choco Munch.
              </p>
              
              <p className="text-lg text-chocolate-light mb-8 font-poppins leading-relaxed">
                I teach people how to bake cookies, cakes, cupcakes, and breads with love, 
                hygiene, and top-quality ingredients. Every recipe I share comes from years 
                of perfecting the art of baking, ensuring that each creation is not just 
                delicious but made with care and passion.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start space-x-4 transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                    <feature.icon className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-chocolate-dark font-poppins mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-chocolate-medium text-sm font-poppins">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;