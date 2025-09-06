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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="glass-premium max-w-md w-full rounded-2xl overflow-hidden border-2 border-glass-primary/30 animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-glass-primary to-glass-secondary p-6 text-white relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-6 h-6" />
              <h2 className="text-xl font-bold">Flash Sale Alert!</h2>
            </div>
            <p className="text-white/90">Limited Time Offers</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Countdown Timer */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Timer className="w-5 h-5 text-glass-primary" />
              <span className="text-sm text-muted-foreground">Ends in:</span>
            </div>
            <div className="flex justify-center gap-2">
              <div className="glass-card px-3 py-2 rounded-lg text-center border border-glass-primary/30">
                <div className="text-lg font-bold text-glass-primary">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="glass-card px-3 py-2 rounded-lg text-center border border-glass-primary/30">
                <div className="text-lg font-bold text-glass-primary">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground">Min</div>
              </div>
              <div className="glass-card px-3 py-2 rounded-lg text-center border border-glass-primary/30">
                <div className="text-lg font-bold text-glass-primary">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs text-muted-foreground">Sec</div>
              </div>
            </div>
          </div>

          {/* Offers */}
          <div className="space-y-4">
            <div className="glass-card p-4 rounded-lg border border-glass-success/30">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-glass-success" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Accessories in Stock</h3>
                  <p className="text-sm text-muted-foreground">SSDs, RAMs, Chargers & More</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-glass-success">₹500+ OFF</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-lg border border-glass-warning/30">
              <div className="flex items-center gap-3">
                <Percent className="w-8 h-8 text-glass-warning" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Pre-owned i3 Laptop</h3>
                  <p className="text-sm text-muted-foreground">Certified with 1 Year Warranty</p>
                </div>
                <div className="text-right">
                  <div className="text-sm line-through text-muted-foreground">₹20,999</div>
                  <span className="text-lg font-bold text-glass-warning">₹15,999</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-lg border border-glass-accent/30">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-glass-accent" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Festive Sale</h3>
                  <p className="text-sm text-muted-foreground">Up to 30% OFF on Electronics</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-glass-accent">30% OFF</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-6">
            <Button 
              variant="glass-primary" 
              className="flex-1"
              onClick={() => setIsVisible(false)}
            >
              Shop Now
            </Button>
            <Button 
              variant="glass-outline"
              onClick={() => setIsVisible(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;