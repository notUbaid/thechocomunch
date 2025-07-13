import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Users, ChefHat } from 'lucide-react';
import workshopImage from '../assets/workshop-scene.jpg';

const WorkshopsSection = () => {
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

  const openWhatsApp = (message: string) => {
    const phoneNumber = "1234567890"; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const workshops = [
    {
      title: "Cookie Masterclass",
      description: "Learn to create perfect cookies with various flavors and decorating techniques.",
      duration: "3 hours",
      capacity: "6 students",
      price: "₹2,500",
      features: ["Chocolate Chip Cookies", "Sugar Cookie Decorating", "Storage Tips", "Recipe Booklet"]
    },
    {
      title: "Bread Basics",
      description: "Master the fundamentals of bread making from mixing to perfect crusts.",
      duration: "4 hours",
      capacity: "8 students",
      price: "₹3,000",
      features: ["Artisan Bread", "Kneading Techniques", "Proofing Methods", "Fresh Ingredients"]
    },
    {
      title: "Cupcake Decorating",
      description: "Create stunning cupcakes with professional frosting and decoration skills.",
      duration: "2.5 hours",
      capacity: "6 students",
      price: "₹2,200",
      features: ["Buttercream Piping", "Fondant Work", "Color Mixing", "Design Ideas"]
    }
  ];

  return (
    <section id="workshops" ref={sectionRef} className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate-dark mb-6">
            Learn to Bake Like a Pro
          </h2>
          <p className="text-xl text-chocolate-medium max-w-3xl mx-auto font-poppins leading-relaxed">
            Join our hands-on workshops and discover the joy of creating beautiful, 
            delicious baked goods from scratch. Small groups ensure personalized attention.
          </p>
        </div>

        {/* Special Workshop Highlight */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="card-luxury bg-gradient-accent text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-chocolate-dark mr-3" />
              <h3 className="font-script text-3xl font-bold text-chocolate-dark">
                Special 4-Day Workshop
              </h3>
            </div>
            <p className="text-lg font-poppins text-chocolate-medium mb-4">
              <span className="font-bold">15–16 May & 19–20 May 2025</span>
            </p>
            <p className="text-chocolate-dark font-poppins mb-6">
              Comprehensive baking bootcamp covering cookies, cakes, bread, and advanced decorating techniques.
            </p>
            <button
              onClick={() => openWhatsApp("Hi! I'm interested in the 4-day workshop from May 15-20, 2025.")}
              className="btn-luxury"
            >
              Reserve Your Spot
            </button>
          </div>
        </div>

        {/* Workshop Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div 
              key={workshop.title}
              className={`card-luxury transition-all duration-1000 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="mb-6">
                <ChefHat className="w-12 h-12 text-chocolate-medium mb-4" />
                <h3 className="font-script text-2xl font-bold text-chocolate-dark mb-3">
                  {workshop.title}
                </h3>
                <p className="text-chocolate-medium font-poppins mb-4">
                  {workshop.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-chocolate-light">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-poppins">{workshop.duration}</span>
                </div>
                <div className="flex items-center text-chocolate-light">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm font-poppins">{workshop.capacity}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-chocolate-dark mb-3 font-poppins">What you'll learn:</h4>
                <ul className="space-y-1">
                  {workshop.features.map((feature) => (
                    <li key={feature} className="text-sm text-chocolate-medium font-poppins flex items-center">
                      <span className="w-1.5 h-1.5 bg-chocolate-medium rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-chocolate-dark font-poppins">
                    {workshop.price}
                  </span>
                </div>
                <button
                  onClick={() => openWhatsApp(`Hi! I'd like to join the ${workshop.title} workshop.`)}
                  className="w-full btn-cream text-center"
                >
                  Book This Workshop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Image */}
        <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-luxury max-w-4xl mx-auto">
            <img 
              src={workshopImage}
              alt="Baking workshop in progress"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/50 to-transparent flex items-end">
              <div className="p-8 text-cream">
                <p className="text-lg font-poppins">
                  "Every workshop is a journey of discovery, creativity, and delicious results!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;