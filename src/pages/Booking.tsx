import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Calendar, MapPin, Wrench, Laptop, Cctv, Printer, Tv, Refrigerator, AirVent, Zap } from 'lucide-react';
import heroImage from '@/assets/hero2.jpg';

const services = [
  { id: 'laptop', name: 'Laptop Repair', icon: Laptop, price: 'From ₹500' },
  { id: 'cctv', name: 'CCTV Installation', icon: Cctv, price: 'From ₹2,000' },
  { id: 'printer', name: 'Printer Service', icon: Printer, price: 'From ₹300' },
  { id: 'tv', name: 'TV Repair', icon: Tv, price: 'From ₹800' },
  { id: 'washing', name: 'Washing Machine', icon: Wrench, price: 'From ₹600' },
  { id: 'fridge', name: 'Refrigerator', icon: Refrigerator, price: 'From ₹700' },
  { id: 'ac', name: 'AC Service', icon: AirVent, price: 'From ₹1,200' },
  { id: 'automation', name: 'Home Automation', icon: Zap, price: 'From ₹1,500' }
];

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM', 
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
  '6:00 PM - 8:00 PM'
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    location: '',
    date: '',
    time: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We will contact you soon.');
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      service: '',
      location: '',
      date: '',
      time: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Image */}
      <section
        className="relative h-[300px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Book Service</h1>
          <p className="text-white/90 text-lg">Expert technicians at your doorstep</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-glass-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-glass-primary" />
                  Select Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <label
                        key={service.id}
                        className={`glass-card p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                          formData.service === service.id
                            ? 'border-glass-primary bg-glass-primary/10'
                            : 'border-glass-primary/20 hover:border-glass-primary/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            formData.service === service.id
                              ? 'bg-glass-primary text-white'
                              : 'bg-glass-card text-glass-primary'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.price}</p>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="glass-card border-glass-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-glass-primary" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="glass-card border-glass-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Mobile Number</label>
                      <Input
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        required
                        className="glass-card border-glass-primary/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email (Optional)</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="glass-card border-glass-primary/30"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Location</label>
                    <Input
                      placeholder="Enter your complete address"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                      className="glass-card border-glass-primary/30"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="glass-card border-glass-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                      <select
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        required
                        className="w-full glass-card border border-glass-primary/30 rounded-md px-3 py-2 text-sm"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Issue Description</label>
                    <Textarea
                      placeholder="Describe the problem or service requirement..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className="glass-card border-glass-primary/30"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Service'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <Card className="glass-card border-glass-primary/20">
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={() => window.open('tel:9745008687')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={() => window.open('https://wa.me/919745008687')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-glass-primary/20">
              <CardHeader>
                <CardTitle>Service Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-glass-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-muted-foreground">Perambra and surrounding areas (15km radius)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-glass-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 8:00 PM<br />Sunday: On request</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-4 h-4 text-glass-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Service Guarantee</p>
                    <p className="text-muted-foreground">30-day service warranty on all repairs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="glass-card p-4 rounded-2xl border border-glass-success/30">
              <h3 className="font-semibold text-glass-success mb-2">Why Choose Us?</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Expert technicians</li>
                <li>• Doorstep service</li>
                <li>• Genuine parts only</li>
                <li>• Transparent pricing</li>
                <li>• Quick response time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
