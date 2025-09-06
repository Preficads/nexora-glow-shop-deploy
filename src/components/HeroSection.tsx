import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShoppingBag, Wrench } from 'lucide-react';
import heroLaptop from '@/assets/hero-laptop.jpg';
import cctvSystem from '@/assets/cctv-system.jpg';
import automationKit from '@/assets/automation-kit.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Laptops & Computers",
      subtitle: "Discover high-performance devices for work and gaming",
      description: "From budget-friendly options to premium workstations, find the perfect laptop for your needs.",
      image: heroLaptop,
      cta: "Shop Laptops",
      price: "Starting from ₹25,000",
      gradient: "from-glass-primary to-glass-secondary"
    },
    {
      id: 2,
      title: "Complete CCTV Solutions",
      subtitle: "Secure your space with our professional systems",
      description: "HD cameras, NVRs, and complete installation services for homes and businesses.",
      image: cctvSystem,
      cta: "View Systems",
      price: "Complete setup from ₹15,000",
      gradient: "from-glass-secondary to-glass-accent"
    },
    {
      id: 3,
      title: "Smart Home Automation",
      subtitle: "Transform your home with intelligent technology",
      description: "IoT devices, smart switches, and automated systems for modern living.",
      image: automationKit,
      cta: "Explore Automation",
      price: "Kits starting ₹8,000",
      gradient: "from-glass-accent to-glass-primary"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover transition-transform duration-700 scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient} opacity-80`} />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="glass-premium p-8 rounded-3xl border border-white/20">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {current.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-2 font-medium">
                {current.subtitle}
              </p>
              <p className="text-white/80 mb-6 text-lg leading-relaxed">
                {current.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  variant="premium" 
                  size="lg"
                  className="text-lg px-8 py-3 shadow-2xl"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {current.cta}
                </Button>
                <Button 
                  variant="glass-outline" 
                  size="lg"
                  className="text-white border-white/40 hover:bg-white/10 text-lg px-8 py-3"
                >
                  <Wrench className="w-5 h-5 mr-2" />
                  Book Service
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/90 font-semibold text-lg">
                  {current.price}
                </p>
                <p className="text-white/70 text-sm">
                  Free delivery • 1 Year warranty • Expert support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="glass"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </Button>
      <Button
        variant="glass"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 animate-pulse">
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse delay-1000">
        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;