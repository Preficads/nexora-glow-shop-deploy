import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-premium border-b border-glass-primary/20">
      {/* Top bar with contact info */}
      <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-gradient-to-r from-glass-primary to-glass-secondary text-white text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>9745008687 | 7593008687</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3 h-3" />
            <span>nexorapba@gmail.com</span>
          </div>
        </div>
        <div className="text-xs opacity-90">
          "We repair, sell, and service electronics – at your doorstep."
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-glass-primary to-glass-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Nexora Solutions</h1>
              <p className="text-xs text-muted-foreground">Electronics & Services</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for laptops, CCTV, accessories..."
                className="w-full pl-12 pr-4 py-2 rounded-full glass-card border-glass-primary/30 focus:border-glass-primary/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
            <Button variant="glass-primary" className="ml-2 rounded-full px-6">
              Search
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-glass-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-foreground hover:text-glass-primary transition-colors">
              Shop
            </Link>
            <Link to="/booking" className="text-foreground hover:text-glass-primary transition-colors">
              Book Service
            </Link>
            <Link to="/contact" className="text-foreground hover:text-glass-primary transition-colors">
              Contact
            </Link>
            <Button variant="glass-outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-glass-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full glass-card border-glass-primary/30"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 glass-card rounded-lg p-4 border border-glass-primary/20">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-glass-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-foreground hover:text-glass-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/booking"
                className="text-foreground hover:text-glass-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-glass-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-2 pt-2">
                <Button variant="glass-primary" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="glass-outline" size="icon">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;