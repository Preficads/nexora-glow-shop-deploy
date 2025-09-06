import { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Search, Grid, List } from 'lucide-react';

const categories = [
  'All Products',
  'Laptops',
  'Computers', 
  'CCTV',
  'Printers',
  'TVs',
  'Washing Machines',
  'Refrigerators',
  'ACs',
  'Automation',
  'Accessories',
  'Pre-owned'
];

const products = [
  {
    id: '1',
    name: 'Dell Inspiron 15 3000 i5 Laptop',
    price: 35000,
    originalPrice: 42000,
    image: '/api/placeholder/300/200',
    rating: 4.5,
    reviews: 128,
    discount: 16,
    category: 'Laptops',
    isNew: true
  },
  {
    id: '2', 
    name: 'HP Pavilion Ryzen 5 Gaming Laptop',
    price: 42500,
    image: '/api/placeholder/300/200',
    rating: 4.7,
    reviews: 89,
    category: 'Laptops'
  },
  {
    id: '3',
    name: 'Lenovo ThinkPad Pre-owned i7',
    price: 28000,
    originalPrice: 45000,
    image: '/api/placeholder/300/200',
    rating: 4.4,
    reviews: 67,
    discount: 38,
    category: 'Pre-owned'
  },
  {
    id: '4',
    name: 'CCTV 8-Channel NVR Kit',
    price: 18500,
    image: '/api/placeholder/300/200',
    rating: 4.8,
    reviews: 45,
    category: 'CCTV'
  },
  {
    id: '5',
    name: 'Samsung 4K Smart TV 55"',
    price: 45000,
    originalPrice: 55000,
    image: '/api/placeholder/300/200',
    rating: 4.6,
    reviews: 123,
    discount: 18,
    category: 'TVs'
  },
  {
    id: '6',
    name: 'LG Front Load Washing Machine',
    price: 32000,
    image: '/api/placeholder/300/200',
    rating: 4.5,
    reviews: 78,
    category: 'Washing Machines'
  },
  {
    id: '7',
    name: 'Whirlpool Double Door Refrigerator',
    price: 28500,
    image: '/api/placeholder/300/200',
    rating: 4.3,
    reviews: 94,
    category: 'Refrigerators'
  },
  {
    id: '8',
    name: 'Daikin 1.5 Ton Split AC',
    price: 35500,
    originalPrice: 42000,
    image: '/api/placeholder/300/200',
    rating: 4.7,
    reviews: 156,
    discount: 15,
    category: 'ACs'
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-glass-primary to-glass-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Shop Electronics</h1>
          <p className="text-white/90 text-lg">Quality products with warranty and expert support</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-glass-primary/20">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-glass-primary text-white'
                        : 'hover:bg-glass-card text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-glass-primary/20">
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Under ₹10,000</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">₹10,000 - ₹25,000</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">₹25,000 - ₹50,000</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Above ₹50,000</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-card border-glass-primary/30"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="glass-outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <div className="flex rounded-lg overflow-hidden border border-glass-primary/30">
                  <Button
                    variant={viewMode === 'grid' ? 'glass-primary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'glass-primary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategory !== 'All Products' && (
                  <span> in "{selectedCategory}"</span>
                )}
              </p>
              <select className="glass-card border border-glass-primary/30 rounded-lg px-3 py-2 text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Customer Rating</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="glass-card p-8 rounded-2xl border border-glass-primary/20 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or browse different categories
                  </p>
                  <Button
                    variant="glass-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Products');
                    }}
                  >
                    View All Products
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;