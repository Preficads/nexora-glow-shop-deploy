import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Import all pages
import Index from "@/pages/Index";
import Shop from "@/pages/Shop";
import Booking from "@/pages/Booking";
import Contact from "@/pages/Contact";
import Cart from "@/pages/Cart";
import NotFound from "@/pages/NotFound";

// ✅ Import Header (your navbar is here)
import Header from "@/components/Header";

// ✅ Import CartProvider
import { CartProvider, useCart } from "@/context/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <BrowserRouter>
          {/* ✅ Header visible on all pages */}
          <Header />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Toaster />
          <Sonner />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
