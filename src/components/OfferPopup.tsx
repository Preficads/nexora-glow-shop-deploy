import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Timer, Zap, Package, Percent } from 'lucide-react';

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
      {/* Glassmorphism CARD with inner blur */}
      <div className="relative max-w-md w-full rounded-2xl p-6 shadow-2xl
        bg-white/10 border border-white/20 backdrop-blur-xl
        animate-in fade-in-0 zoom-in-95 duration-300">

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 text-white hover:bg-white/20"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2 text-white">
            <Zap className="w-6 h-6" />
            <h2 className="text-xl font-bold">Flash Sale Alert!</h2>
          </div>
          <p className="text-white/80">Limited Time Offers</p>
        </div>

        {/* Countdown */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Timer className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-200">Ends in:</span>
          </div>
          <div className="flex justify-center gap-3">
            {['Hours', 'Min', 'Sec'].map((label, idx) => {
              const values = [
                timeLeft.hours.toString().padStart(2, '0'),
                timeLeft.minutes.toString().padStart(2, '0'),
                timeLeft.seconds.toString().padStart(2, '0')
              ];
              return (
                <div key={label} className="px-4 py-2 rounded-lg text-center bg-white/10 border border-white/20">
                  <div className="text-lg font-bold text-white">{values[idx]}</div>
                  <div className="text-xs text-gray-300">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Offers */}
        <div className="space-y-4 text-white">
          <div className="flex items-center gap-3 bg-white/10 border border-green-300/30 rounded-lg p-4">
            <Package className="w-8 h-8 text-green-300" />
            <div className="flex-1">
              <h3 className="font-semibold">Accessories in Stock</h3>
              <p className="text-sm text-gray-300">SSDs, RAMs, Chargers & More</p>
            </div>
            <span className="text-lg font-bold text-green-300">₹500+ OFF</span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 border border-yellow-300/30 rounded-lg p-4">
            <Percent className="w-8 h-8 text-yellow-300" />
            <div className="flex-1">
              <h3 className="font-semibold">Pre-owned i3 Laptop</h3>
              <p className="text-sm text-gray-300">Certified with 1 Year Warranty</p>
            </div>
            <div className="text-right">
              <div className="text-sm line-through text-gray-400">₹20,999</div>
              <span className="text-lg font-bold text-yellow-300">₹15,999</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 border border-pink-300/30 rounded-lg p-4">
            <Zap className="w-8 h-8 text-pink-300" />
            <div className="flex-1">
              <h3 className="font-semibold">Festive Sale</h3>
              <p className="text-sm text-gray-300">Up to 30% OFF on Electronics</p>
            </div>
            <span className="text-lg font-bold text-pink-300">30% OFF</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Button 
            className="flex-1 bg-gradient-to-r from-blue-500 to-black-500 text-white rounded-lg shadow-md hover:opacity-90"
            onClick={() => setIsVisible(false)}
          >
            Shop Now
          </Button>
          <Button 
            className="flex-1 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30"
            onClick={() => setIsVisible(false)}
          >
            Maybe Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
