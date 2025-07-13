import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
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

  const openWhatsApp = (customMessage?: string) => {
    const phoneNumber = "+911234567890"; // Replace with actual number
    const message = customMessage || "Hi! I'd love to join your baking class.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! My name is ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`;
    openWhatsApp(message);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick response guaranteed",
      action: () => openWhatsApp(),
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 12345 67890",
      action: () => window.open("tel:+911234567890"),
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "kehkashan@chocomunch.in",
      action: () => window.open("mailto:kehkashan@chocomunch.in"),
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate-dark mb-6">
            Have Questions or Want to Join?
          </h2>
          <p className="text-xl text-chocolate-medium max-w-3xl mx-auto font-poppins leading-relaxed">
            We'd love to hear from you! Whether you want to join a workshop, order a custom cake, 
            or just have questions about our baking classes, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Options */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="font-script text-3xl font-bold text-chocolate-dark mb-8">
              Get in Touch
            </h3>
            
            {/* Quick Contact Options */}
            <div className="space-y-6 mb-8">
              {contactOptions.map((option, index) => (
                <div 
                  key={option.title}
                  className={`flex items-center p-4 rounded-2xl bg-card hover-lift cursor-pointer border border-border/50 transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  onClick={option.action}
                >
                  <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center mr-4 shadow-soft`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate-dark font-poppins">
                      {option.title}
                    </h4>
                    <p className="text-chocolate-medium font-poppins text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="card-luxury bg-gradient-accent text-center">
              <MessageCircle className="w-16 h-16 text-chocolate-medium mx-auto mb-4" />
              <h4 className="font-script text-2xl font-bold text-chocolate-dark mb-3">
                Prefer WhatsApp?
              </h4>
              <p className="text-chocolate-medium font-poppins mb-6">
                Get instant responses to your queries and book your spot directly!
              </p>
              <button
                onClick={() => openWhatsApp()}
                className="btn-luxury w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`card-luxury transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="font-script text-3xl font-bold text-chocolate-dark mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-chocolate-dark font-poppins font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-chocolate-medium focus:ring-2 focus:ring-chocolate-medium/20 transition-colors duration-300 font-poppins"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-chocolate-dark font-poppins font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-chocolate-medium focus:ring-2 focus:ring-chocolate-medium/20 transition-colors duration-300 font-poppins"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-chocolate-dark font-poppins font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-chocolate-medium focus:ring-2 focus:ring-chocolate-medium/20 transition-colors duration-300 font-poppins resize-none"
                  placeholder="Tell us about your baking interests, what you'd like to learn, or any specific requirements for custom orders..."
                />
              </div>

              <button
                type="submit"
                className="btn-luxury w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </button>
            </form>

            <p className="text-chocolate-medium font-poppins text-sm text-center mt-4">
              * This form will send your message via WhatsApp for faster response
            </p>
          </div>
        </div>

        {/* Location Info */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="card-luxury bg-gradient-cream max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-chocolate-medium mx-auto mb-4" />
            <h4 className="font-script text-2xl font-bold text-chocolate-dark mb-3">
              Visit Our Kitchen
            </h4>
            <p className="text-chocolate-medium font-poppins">
              Home-based premium bakery in Mumbai<br />
              (Exact address shared upon booking)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;