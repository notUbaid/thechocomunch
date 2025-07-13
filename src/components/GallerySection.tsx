import { useState, useEffect, useRef } from 'react';
import { X, Filter } from 'lucide-react';
import customCake1 from '../assets/custom-cake-1.jpg';
import customCake2 from '../assets/custom-cake-2.jpg';
import customCake3 from '../assets/custom-cake-3.jpg';
import cookiesAssortment from '../assets/cookies-assortment.jpg';
import cupcakesDisplay from '../assets/cupcakes-display.jpg';
import breadsAssortment from '../assets/breads-assortment.jpg';
import workshopScene from '../assets/workshop-scene.jpg';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
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

  const galleryItems: GalleryItem[] = [
    { id: 1, src: customCake1, alt: "Custom chocolate cake with decorations", category: "Cakes" },
    { id: 2, src: customCake2, alt: "Elegant wedding cake with gold details", category: "Cakes" },
    { id: 3, src: customCake3, alt: "Colorful birthday cake", category: "Cakes" },
    { id: 4, src: cookiesAssortment, alt: "Artisanal cookies assortment", category: "Cookies" },
    { id: 5, src: cupcakesDisplay, alt: "Beautiful decorated cupcakes", category: "Cupcakes" },
    { id: 6, src: breadsAssortment, alt: "Fresh artisan breads", category: "Breads" },
    { id: 7, src: workshopScene, alt: "Students learning in workshop", category: "Workshops" }
  ];

  const categories = ['All', 'Cakes', 'Cookies', 'Cupcakes', 'Breads', 'Workshops'];

  const filteredItems = selectedFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate-dark mb-6">
            Our Creations
          </h2>
          <p className="text-xl text-chocolate-medium max-w-3xl mx-auto font-poppins leading-relaxed">
            Explore our collection of beautiful baked goods, from custom cakes to workshop moments. 
            Each creation tells a story of passion and craftsmanship.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-gradient-primary text-cream shadow-luxury'
                  : 'bg-secondary hover:bg-accent text-chocolate-medium hover:text-chocolate-dark'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div 
                className="group relative overflow-hidden rounded-3xl shadow-soft hover-lift cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-cream">
                    <p className="font-poppins font-medium">{item.alt}</p>
                    <span className="text-sm text-cream/80 font-poppins">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-cream transition-colors duration-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-luxury"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white font-poppins font-medium text-lg">{selectedImage.alt}</h3>
                <p className="text-white/80 font-poppins">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;