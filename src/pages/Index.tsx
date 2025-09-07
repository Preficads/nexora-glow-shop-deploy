import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import OfferPopup from '@/components/OfferPopup';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Clock,
  Star,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Laptop,
  Cctv,
  Wrench,
  Package,
} from 'lucide-react';

import dealsBg from '@/assets/deals-bg.jpg';
import nexoraLogo from '@/assets/nexora-logo-white.png';
import dellInspironImg from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import hpr5laptop from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import lenovothinkpad from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import externalhdd from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import cctvimg from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import laptopcharger from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import automation from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import printerimg from '@/assets/Dell Inspiron 15 3000 i5 Laptop.jpg';
import preownedi3 from '@/assets/laptop-deal.png';

// Sample product data
const popularProducts = [
  { id: '1', name: 'Dell Inspiron 15 3000 i5 Laptop', price: 35000, originalPrice: 42000, image: dellInspironImg, rating: 4.5, reviews: 128, discount: 16, category: 'Laptops', isNew: true },
  { id: '2', name: 'HP Pavilion Ryzen 5 Gaming Laptop', price: 42500, image: hpr5laptop, rating: 4.7, reviews: 89, category: 'Gaming' },
  { id: '3', name: 'Lenovo ThinkPad Pre-owned', price: 24000, originalPrice: 35000, image: lenovothinkpad, rating: 4.3, reviews: 67, discount: 31, category: 'Pre-owned' },
  { id: '4', name: '1TB External HDD', price: 4500, image: externalhdd, rating: 4.6, reviews: 234, category: 'Storage' },
];

const featuredProducts = [
  { id: '5', name: 'CCTV HD Camera Kit (4 Cameras)', price: 12800, originalPrice: 15000, image: cctvimg, rating: 4.8, reviews: 45, discount: 15, category: 'CCTV' },
  { id: '6', name: 'Laptop Charger (HP/Dell Compatible)', price: 1200, image: laptopcharger, rating: 4.4, reviews: 156, category: 'Accessories' },
  { id: '7', name: 'Smart Home Automation Kit', price: 8500, image: automation, rating: 4.6, reviews: 78, category: 'Automation', isNew: true },
  { id: '8', name: 'Epson L3250 WiFi Printer', price: 9500, originalPrice: 12000, image: printerimg, rating: 4.5, reviews: 92, discount: 21, category: 'Printers' },
];

const dealOfTheDay = {
  id: '9',
  name: 'Pre-owned i3 Laptop - Certified Refurbished',
  price: 15999,
  originalPrice: 20999,
  image: preownedi3,
  rating: 4.2,
  reviews: 143,
  discount: 24,
  category: 'Pre-owned',
  timeLeft: { hours: 23, minutes: 45, seconds: 30 },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* ✅ Header removed (already global in App.tsx) */}
      <OfferPopup />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Services Include */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services Include</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nexora Solutions provides professional repair, sales, and doorstep service for all types of electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center border border-glass-primary/20 hover:border-glass-primary/40 transition-all duration-300">
              <Laptop className="w-6 h-6 mx-auto mb-3 text-glass-primary" />
              <h4 className="font-semibold mb-2">Computer & Laptop Sales</h4>
              <p className="text-sm text-muted-foreground">New & refurbished laptops and desktops.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center border border-glass-secondary/20 hover:border-glass-secondary/40 transition-all duration-300">
              <Cctv className="w-6 h-6 mx-auto mb-3 text-glass-secondary" />
              <h4 className="font-semibold mb-2">CCTV Sales & Installation</h4>
              <p className="text-sm text-muted-foreground">Surveillance cameras and security solutions.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center border border-glass-accent/20 hover:border-glass-accent/40 transition-all duration-300">
              <Wrench className="w-6 h-6 mx-auto mb-3 text-glass-accent" />
              <h4 className="font-semibold mb-2">Appliance Repair</h4>
              <p className="text-sm text-muted-foreground">TV, AC, Refrigerator, Washing Machine, and more.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center border border-glass-success/20 hover:border-glass-success/40 transition-all duration-300">
              <Package className="w-6 h-6 mx-auto mb-3 text-glass-success" />
              <h4 className="font-semibold mb-2">Doorstep Service</h4>
              <p className="text-sm text-muted-foreground">Book via call or website, we service at your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on fast, reliable, and convenient services with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center border border-glass-primary/20 hover:border-glass-primary/40 transition-all duration-300">
              <Star className="w-6 h-6 mx-auto mb-3 text-yellow-400" />
              <h4 className="font-semibold mb-2">Professional Work</h4>
              <p className="text-sm text-muted-foreground">Skilled and focused technicians for all electronics.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center border border-glass-secondary/20 hover:border-glass-secondary/40 transition-all duration-300">
              <Clock className="w-6 h-6 mx-auto mb-3 text-glass-secondary" />
              <h4 className="font-semibold mb-2">Quick Service</h4>
              <p className="text-sm text-muted-foreground">Fast repairs and support for minimal downtime.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center border border-glass-accent/20 hover:border-glass-accent/40 transition-all duration-300">
              <ShieldCheck className="w-6 h-6 mx-auto mb-3 text-glass-accent" />
              <h4 className="font-semibold mb-2">Warranty Support</h4>
              <p className="text-sm text-muted-foreground">Transparent pricing with guaranteed service quality.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center border border-glass-success/20 hover:border-glass-success/40 transition-all duration-300">
              <Phone className="w-6 h-6 mx-auto mb-3 text-glass-success" />
              <h4 className="font-semibold mb-2">Friendly Staff</h4>
              <p className="text-sm text-muted-foreground">Experienced, approachable, and helpful technicians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-glass-card/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Products</h2>
              <p className="text-muted-foreground">Top-selling items this month</p>
            </div>
            <Button variant="glass-outline">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Hand-picked accessories and devices</p>
            </div>
            <Button variant="glass-outline">
              See More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section
        className="py-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${dealsBg})` }}
      >
        <div className="container mx-auto">
          <div className="rounded-3xl p-8 border border-white/20 bg-white/10 backdrop-blur-md shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Deal of the Day</h2>
              <p className="text-white/80">Limited time offer - Don't miss out!</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={dealOfTheDay.image}
                  alt={dealOfTheDay.name}
                  className="w-full rounded-2xl"
                />
              </div>

              <div className="order-1 lg:order-2 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm opacity-90">Limited Time</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{dealOfTheDay.name}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(dealOfTheDay.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm opacity-90">({dealOfTheDay.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold">₹{dealOfTheDay.price.toLocaleString()}</span>
                  <span className="text-xl opacity-60 line-through">₹{dealOfTheDay.originalPrice?.toLocaleString()}</span>
                  <span className="bg-glass-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {dealOfTheDay.discount}% OFF
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-glass-success" />
                  <span className="text-sm">1 Year Warranty • Certified Refurbished</span>
                </div>

                <Button variant="premium" size="lg" className="w-full mb-4">
                  Grab This Deal
                </Button>

                <p className="text-sm text-center opacity-75">
                  Free delivery • 30-day return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={nexoraLogo} alt="Nexora Solutions" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 mb-4">
                "We repair, sell, and service electronics – at your doorstep."
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-glass-primary" />
                  <span className="text-sm">Chembra Road, Opp Sangam Theatre, Perambra</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-glass-primary" />
                  <span className="text-sm">9745008687 | 7593008687</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-glass-primary" />
                  <span className="text-sm">nexorapba@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop All Products</a></li>
                <li><a href="/booking" className="text-gray-400 hover:text-white transition-colors">Book Service</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Laptops</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CCTV Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pre-owned</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Nexora Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
