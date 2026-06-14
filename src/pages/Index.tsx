import React, { Suspense } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import { Skeleton } from '../components/ui/skeleton';

// Lazy loaded components (below the fold)
const AboutSection = React.lazy(() => import('../components/AboutSection'));
const WorkshopsSection = React.lazy(() => import('../components/WorkshopsSection'));
const CustomCakesSection = React.lazy(() => import('../components/CustomCakesSection'));
const GallerySection = React.lazy(() => import('../components/GallerySection'));
const TestimonialsSection = React.lazy(() => import('../components/TestimonialsSection'));
const ContactSection = React.lazy(() => import('../components/ContactSection'));
const Footer = React.lazy(() => import('../components/Footer'));

const SectionSkeleton = () => (
  <div className="py-16 md:py-32 px-6 md:px-12 w-full flex flex-col items-center justify-center space-y-8">
    <Skeleton className="h-12 w-3/4 max-w-2xl rounded-full" />
    <Skeleton className="h-6 w-1/2 max-w-md rounded-full" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-12">
      <Skeleton className="h-64 w-full rounded-2xl" />
      <Skeleton className="h-64 w-full rounded-2xl hidden md:block" />
      <Skeleton className="h-64 w-full rounded-2xl hidden lg:block" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Above the fold (Eager) */}
        <HeroSection />
        
        {/* Below the fold (Lazy) */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
          <WorkshopsSection />
          <CustomCakesSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
