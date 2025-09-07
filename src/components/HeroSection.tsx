import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    },
    {
      id: 2,
      title: "Complete CCTV Solutions",
      subtitle: "Secure your space with our professional systems",
      description: "HD cameras, NVRs, and complete installation services for homes and businesses.",
      image: cctvSystem,
      cta: "View Systems",
      price: "Complete setup from ₹15,000",
    },
    {
      id: 3,
      title: "Smart Home Automation",
      subtitle: "Transform your home with intelligent technology",
      description: "IoT devices, smart switches, and automated systems for modern living.",
      image: automationKit,
      cta: "Explore Automation",
      price: "Kits starting ₹8,000",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black-950 to-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Glass Morphism Card */}
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-2xl">
                <motion.h1
                  className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {current.title}
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-white/90 mb-2 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {current.subtitle}
                </motion.p>

                <motion.p
                  className="text-white/80 mb-6 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {current.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-semibold rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {current.cta}
                  </Button>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-3 border border-white/50 bg-white/10 text-white rounded-xl backdrop-blur-md hover:bg-white/20 shadow-lg"
                  >
                    <Wrench className="w-5 h-5 mr-2" />
                    Book Service
                  </Button>
                </motion.div>

                <motion.div
                  className="mt-6 pt-6 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-white/90 font-semibold text-lg">{current.price}</p>
                  <p className="text-white/70 text-sm">
                    Free delivery • 1 Year warranty • Expert support
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </Button>
      <Button
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 shadow-lg"
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
                ? 'bg-white scale-125 shadow-md'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
