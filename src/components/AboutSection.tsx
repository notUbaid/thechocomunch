import { useState, useEffect, useRef } from 'react';
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

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full -z-10 blur-3xl opacity-50"></div>

      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              {/* Fallback image if the original is missing, but using the original path */}
              <img 
                src={kehkashanPortrait}
                alt="Kehkashan Khan - Founder of The Choco Munch bakery in Ahmedabad"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-accent/20 rounded-2xl pointer-events-none"></div>
            </div>
            {/* Elegant overlapping card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 md:p-8 rounded-xl shadow-luxury max-w-xs border border-border/40">
              <p className="font-script text-3xl text-primary mb-2">Since 2018</p>
              <p className="text-sm font-poppins text-muted-foreground">Baking memories, one batch at a time.</p>
            </div>
          </div>

          {/* Content Column */}
          <div className={`lg:col-span-7 lg:pl-10 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">The Story</span>
              <div className="h-[1px] w-12 bg-accent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Meet <span className="text-primary font-script font-normal text-6xl md:text-7xl align-middle inline-block mt-[-10px]">Kehkashan</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 font-poppins leading-relaxed">
              <p>
                Welcome to The Choco Munch! I'm Kehkashan Khan, the passionate baker behind every recipe, cookie, and cake you see here.
              </p>
              <p>
                My journey began with a simple desire: to create treats that not only look spectacular but taste like home. I believe that baking is an art form—one that requires patience, the finest ingredients, and, above all, a lot of love.
              </p>
              <p>
                Whether I'm crafting an intricate custom wedding cake or teaching an eager class of beginners how to bake their first perfect loaf of bread, my focus is always on uncompromising quality and hygiene. Every recipe I share and every order I fulfill comes from years of perfecting the art of baking.
              </p>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="w-16 h-[1px] bg-border"></div>
              <p className="font-script text-4xl text-primary">Kehkashan Khan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;