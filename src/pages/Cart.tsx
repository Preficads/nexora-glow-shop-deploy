import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ correct path

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart className="w-6 h-6" /> Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 glass-card rounded-xl shadow">
          <p className="text-lg text-muted-foreground mb-4">Your cart is empty.</p>
          <Link to="/shop">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6">
              Go to Shop
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between glass-card rounded-lg p-4 border">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-muted-foreground">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>
              <Button
                size="sm"
                className="bg-red-600 text-white hover:bg-red-500 rounded-full"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6">
            <span className="text-xl font-bold">Total: ₹{totalPrice.toLocaleString()}</span>
            <Button className="bg-green-600 text-white hover:bg-green-500 rounded-full px-6">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
