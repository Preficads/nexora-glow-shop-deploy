import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Grid, List } from "lucide-react";

// ✅ Import your hero image
import hero1 from "@/assets/hero1.jpg";

const categories = [
  "All Products",
  "Laptops",
  "Computers",
  "CCTV",
  "Printers",
  "TVs",
  "Washing Machines",
  "Refrigerators",
  "ACs",
  "Automation",
  "Accessories",
  "Pre-owned",
];

const products = [
  {
    id: "1",
    name: "Dell Inspiron 15 3000 i5 Laptop",
    price: 35000,
    originalPrice: 42000,
    image:
      "https://via.placeholder.com/300x200/111827/FFFFFF?text=Dell+Laptop", // dark background
    rating: 4.5,
    reviews: 128,
    discount: 16,
    category: "Laptops",
    isNew: true,
    description: "Powerful performance for everyday tasks and light gaming.",
    buttonLabel: "Shop Laptops",
  },
  {
    id: "2",
    name: "HP Pavilion Ryzen 5 Gaming Laptop",
    price: 42500,
    image:
      "https://via.placeholder.com/300x200/1F2937/FFFFFF?text=HP+Gaming+Laptop",
    rating: 4.7,
    reviews: 89,
    category: "Laptops",
    description: "Experience immersive gaming with cutting-edge graphics.",
    buttonLabel: "Explore Gaming",
  },
  {
    id: "3",
    name: "Lenovo ThinkPad Pre-owned i7",
    price: 28000,
    originalPrice: 45000,
    image:
      "https://via.placeholder.com/300x200/374151/FFFFFF?text=Lenovo+Pre-owned",
    rating: 4.4,
    reviews: 67,
    discount: 38,
    category: "Pre-owned",
    description: "Reliable and affordable, perfect for professional use.",
    buttonLabel: "View Pre-owned",
  },
  {
    id: "4",
    name: "CCTV 8-Channel NVR Kit",
    price: 18500,
    image:
      "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=CCTV+Kit",
    rating: 4.8,
    reviews: 45,
    category: "CCTV",
    description: "Comprehensive security solution for home and business.",
    buttonLabel: "Shop Security",
  },
  {
    id: "5",
    name: 'Samsung 4K Smart TV 55"',
    price: 45000,
    originalPrice: 55000,
    image:
      "https://via.placeholder.com/300x200/6B7280/FFFFFF?text=Samsung+4K+TV",
    rating: 4.6,
    reviews: 123,
    discount: 18,
    category: "TVs",
    description: "Stunning visuals and smart features for ultimate entertainment.",
    buttonLabel: "Browse TVs",
  },
  {
    id: "6",
    name: "LG Front Load Washing Machine",
    price: 32000,
    image:
      "https://via.placeholder.com/300x200/9CA3AF/FFFFFF?text=LG+Washing+Machine",
    rating: 4.5,
    reviews: 78,
    category: "Washing Machines",
    description: "Efficient and gentle on your clothes, with smart features.",
    buttonLabel: "See Appliances",
  },
  {
    id: "7",
    name: "Whirlpool Double Door Refrigerator",
    price: 28500,
    image:
      "https://via.placeholder.com/300x200/111827/FFFFFF?text=Whirlpool+Refrigerator",
    rating: 4.3,
    reviews: 94,
    category: "Refrigerators",
    description: "Spacious and energy-efficient for modern kitchens.",
    buttonLabel: "Discover Refrigerators",
  },
  {
    id: "8",
    name: "Daikin 1.5 Ton Split AC",
    price: 35500,
    originalPrice: 42000,
    image: "https://via.placeholder.com/300x200/1F2937/FFFFFF?text=Daikin+AC",
    rating: 4.7,
    reviews: 156,
    discount: 15,
    category: "ACs",
    description: "Powerful cooling and energy savings for your home.",
    buttonLabel: "Shop ACs",
  },
];

// ✅ Use imported images here
const heroImages = [hero1];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto-slide only if more than one image
  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ✅ Hero Section */}
      <section className="relative w-full overflow-hidden h-[300px] md:h-[400px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative flex items-center justify-center h-full text-center p-4">
          <div className="p-6 rounded-lg max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Discover the Latest Electronics
            </h1>
            <p className="text-white/90 text-md md:text-lg mb-6">
              Explore our wide range of quality products with warranty and
              expert support.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              Shop All Products
            </Button>
          </div>
        </div>
      </section>

      {/* ✅ Product Listing Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-card p-6 rounded-2xl border border-gray-700 shadow-lg">
              <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white"
                        : "hover:bg-muted/30 text-muted-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1">
            {/* Search + Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-gray-700 text-foreground focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-900 hover:bg-gray-200"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <div className="flex rounded-lg overflow-hidden border border-gray-700">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-none ${
                      viewMode === "grid"
                        ? "bg-gray-900 text-white"
                        : "text-muted-foreground hover:bg-muted/30"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-none ${
                      viewMode === "list"
                        ? "bg-gray-900 text-white"
                        : "text-muted-foreground hover:bg-muted/30"
                    }`}
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
                {selectedCategory !== "All Products" && (
                  <span> in "{selectedCategory}"</span>
                )}
              </p>
              <select className="bg-card border border-gray-700 rounded-lg px-3 py-2 text-sm text-foreground focus:border-gray-900 focus:ring-gray-900">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Customer Rating</option>
              </select>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* No Products */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-card p-8 rounded-2xl border border-gray-700 max-w-md mx-auto shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or browse different categories
                  </p>
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All Products");
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
