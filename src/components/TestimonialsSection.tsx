import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Zainab Khan",
      text: "This was the most fun I've had in a baking class. Kehkashan's teaching style is amazing, and the brownies? Absolutely incredible! I learned so much in just one session.",
      rating: 5,
      course: "Cookie Masterclass"
    },
    {
      name: "Fatima Ali",
      text: "The custom cake for my daughter's birthday was beyond our expectations. Beautiful design, amazing taste, and delivered exactly on time. Highly recommended!",
      rating: 5,
      course: "Custom Cake Order"
    },
    {
      name: "Mariam Saiyed",
      text: "I've attended three workshops now, and each one has been a delightful learning experience. The quality of ingredients and attention to hygiene is impressive.",
      rating: 5,
      course: "Bread Basics & Cupcake Decorating"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-gradient-cream">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate-dark mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-chocolate-medium max-w-3xl mx-auto font-poppins leading-relaxed">
            Real experiences from our baking community. These stories inspire us to keep 
            creating magical moments through the art of baking.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`card-luxury bg-background/80 backdrop-blur-sm transition-all duration-1000 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-chocolate-medium opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-chocolate-dark font-poppins leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-chocolate-dark font-poppins mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-chocolate-medium font-poppins">
                  {testimonial.course}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="card-luxury bg-gradient-accent max-w-2xl mx-auto">
            <h3 className="font-script text-3xl font-bold text-chocolate-dark mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-chocolate-medium font-poppins mb-6 leading-relaxed">
              Join our community of passionate bakers and discover the joy of creating 
              beautiful, delicious treats from scratch.
            </p>
            <button
              onClick={() => {
                const workshopsSection = document.getElementById('workshops');
                if (workshopsSection) {
                  workshopsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-luxury"
            >
              Join Our Next Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;