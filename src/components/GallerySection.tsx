import { useState, useEffect, useRef } from 'react';
import { X, Filter } from 'lucide-react';
import customCake1 from '../assets/custom-cake-1.jpeg';
import customCake2 from '../assets/custom-cake-2.jpeg';
import customCupcake1 from '../assets/custom-cupcake-1.jpeg';
import cookies1 from '../assets/cookies-1.jpeg';
import breads1 from '../assets/breads-1.jpeg';
import workshopScene1 from '../assets/workshop-scene-1.jpeg';
import workshopScene2 from '../assets/workshop-scene-2.jpeg';
import customCake3 from '../assets/custom-cake-3.jpeg';
import customCake4 from '../assets/custom-cake-4.jpeg';
import customCake5 from '../assets/custom-cake-5.jpeg';
import workshopScene3 from '../assets/workshop-scene-3.jpeg';
import workshopScene4 from '../assets/workshop-scene-4.jpeg';
import cookies2 from '../assets/cookies-2.jpeg';
import cookies3 from '../assets/cookies-3.jpeg';
import cookies4 from '../assets/cookies-4.jpeg';
import customCake6 from '../assets/custom-cake-6.jpeg';
import customCake7 from '../assets/custom-cake-7.jpeg';
import breads2 from '../assets/breads-2.jpeg';
import breads3 from '../assets/breads-3.jpeg';
import breads4 from '../assets/breads-4.jpeg';
import customCupcake2 from '../assets/custom-cupcake-2.jpeg';
import customCupcake3 from '../assets/custom-cupcake-3.jpeg';
import customCupcake4 from '../assets/custom-cupcake-4.jpeg';
import customCupcake5 from '../assets/custom-cupcake-5.jpeg';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Cakes');
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
    { id: 1, src: customCake1, alt: "Under-the-sea themed cake with handcrafted ocean elements", category: "Cakes" },
    { id: 2, src: customCake2, alt: "Chocolate overload cake with KitKat, Oreo, and indulgent toppings", category: "Cakes" },
    { id: 3, src: customCupcake1, alt: "Vibrant cupcakes — each uniquely styled with artisanal detailing", category: "Cupcakes" },
    { id: 4, src: cookies1, alt: "Classic cookies fresh from the oven — soft, warm, and golden", category: "Cookies" },
    { id: 5, src: breads1, alt: "Oat-based bread — healthy, hearty, and full of goodness", category: "Breads" },
    { id: 6, src: workshopScene1, alt: "Hands-on baking session led by our founder, filled with smiles and learning", category: "Workshops" },
    { id: 7, src: workshopScene2, alt: "Exclusive Audi showroom workshop with Chef Varun Inamdar and The Choco Munch", category: "Workshops" },
    { id: 8, src: customCake3, alt: "Elegant two-tier cake in black, white, and gold luxe design", category: "Cakes" },
    { id: 9, src: customCake4, alt: "Whimsical caramel popcorn cake with drizzles and crunch", category: "Cakes" },
    { id: 10, src: customCake5, alt: "Minimal white birthday cake adorned with delicate florals", category: "Cakes" },
    { id: 11, src: workshopScene3, alt: "Inspiring workshop at TOTC — where baking meets mentorship", category: "Workshops" },
    { id: 12, src: workshopScene4, alt: "Facebook Live class with glowing feedback and engaged home bakers", category: "Workshops" },
    { id: 13, src: cookies2, alt: "Assorted gourmet cookies, each with distinct textures and finishes", category: "Cookies" },
    { id: 14, src: cookies3, alt: "Nan khatai and traditional bakes arranged in rustic elegance", category: "Cookies" },
    { id: 15, src: cookies4, alt: "Wholesome ragi cookies — a healthy treat with rich flavor", category: "Cookies" },
    { id: 16, src: customCake6, alt: "Exotic two-layer celebration cake with refined accents", category: "Cakes" },
    { id: 17, src: customCake7, alt: "Grand triple-layer wedding cake with timeless sophistication", category: "Cakes" },
    { id: 18, src: breads2, alt: "Golden croissants with buttery flakiness and perfect layers", category: "Breads" },
    { id: 19, src: breads3, alt: "Freshly baked loaf with soft texture and warm crust", category: "Breads" },
    { id: 20, src: breads4, alt: "Mini croissants and buns — bite-sized bliss, oven-fresh", category: "Breads" },
    { id: 21, src: customCupcake2, alt: "Minimal red and white cupcakes perfect for elegant celebrations", category: "Cupcakes" },
    { id: 22, src: customCupcake3, alt: "Floral-themed blue cupcakes with intricate piping", category: "Cupcakes" },
    { id: 23, src: customCupcake4, alt: "Baby boy themed cupcakes crafted for joyful welcomes", category: "Cupcakes" },
    { id: 24, src: customCupcake5, alt: "Charming cupcake set with playful, one-of-a-kind designs", category: "Cupcakes" }
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
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-soft hover-lift cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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