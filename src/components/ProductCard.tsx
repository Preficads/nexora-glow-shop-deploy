import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
  category: string;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  discount, 
  isNew,
  category 
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) 
            ? 'fill-glass-warning text-glass-warning' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-glass-primary/20 hover:border-glass-primary/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl">
      {/* Image container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isNew && (
            <span className="bg-glass-success text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {discount && (
            <span className="bg-glass-accent text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="glass" size="icon" className="w-8 h-8 rounded-full">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="glass" size="icon" className="w-8 h-8 rounded-full">
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick add to cart - overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="glass-primary" size="sm" className="w-full rounded-full">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-glass-primary font-medium uppercase tracking-wide">
            {category}
          </span>
        </div>
        
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 leading-tight">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-glass-primary">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <Button variant="glass-outline" size="icon" className="w-8 h-8 rounded-full">
            <ShoppingCart className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;