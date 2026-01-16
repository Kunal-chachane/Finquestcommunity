import { Star, MapPin, TrendingUp, Shield, CreditCard, Building, Smartphone, Coins } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import amazonPayImage from 'figma:asset/d03c8bd7e8b6ada401a11f1092e5fc23cb114d2a.png';
import paytmImage from 'figma:asset/4840f9feb525b3cf948bbb0aeef05115c974a0dd.png';
import googlePayImage from 'figma:asset/79a2bbbde32e88fbc8388dc74b6b26bdce3940cb.png';
import upstoxImage from 'figma:asset/d3ba86db97e6033a9e06888a4ba8a71290973b43.png';

const fintechCompanies = [
  {
    id: 1,
    name: "Amazon Pay",
    category: "Payments",
    rating: 4.8,
    distance: "0.5 km",
    description: "Secure payments by Amazon with rewards",
    icon: CreditCard,
    accent: "bg-orange-500",
    image: amazonPayImage
  },
  {
    id: 2,
    name: "Paytm",
    category: "Digital Wallet",
    rating: 4.6,
    distance: "1.2 km",
    description: "India's leading digital payment platform",
    icon: Smartphone,
    accent: "bg-blue-500",
    image: paytmImage
  },
  {
    id: 3,
    name: "Upstox",
    category: "Trading",
    rating: 4.7,
    distance: "0.8 km",
    description: "Smart trading and investment platform",
    icon: TrendingUp,
    accent: "bg-purple-500",
    image: upstoxImage
  },
  {
    id: 4,
    name: "Google Pay",
    category: "Mobile Wallet",
    rating: 4.8,
    distance: "2.1 km",
    description: "Quick and secure payments by Google",
    icon: Shield,
    accent: "bg-green-500",
    image: googlePayImage
  },
  {
    id: 5,
    name: "Razorpay",
    category: "Payment Gateway",
    rating: 4.5,
    distance: "1.5 km",
    description: "Powerful payment solutions for businesses",
    icon: Building,
    accent: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1751969814107-7d79fdca2db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXpvcnBheSUyMHBheW1lbnQlMjBnYXRld2F5fGVufDF8fHx8MTc1ODI3NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    name: "PhonePe",
    category: "UPI Payments",
    rating: 4.7,
    distance: "0.3 km",
    description: "Safe and instant UPI money transfers",
    icon: Smartphone,
    accent: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZXBlJTIwbW9iaWxlJTIwd2FsbGV0fGVufDF8fHx8MTc1ODI3NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FintechGrid() {
  return (
    <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Fintech Companies
            <br />
            <motion.span 
              className="text-pink-300"
              whileHover={{ scale: 1.05, color: "#f8b4cb" }}
              transition={{ duration: 0.3 }}
            >
              Near You
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/90 max-w-2xl mx-auto drop-shadow-md"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Discover innovative financial services in your area
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fintechCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer group"
            >
              <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:shadow-2xl hover:border-white/30 transition-all duration-300">
                {/* Company Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute top-3 right-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur rounded-full px-2 py-1">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                      <span className="text-xs text-white">{company.rating}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-3 left-3"
                    whileHover={{ scale: 1.05, x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge variant="secondary" className="text-xs bg-pink-500/80 text-white border-pink-300/30 backdrop-blur">
                      {company.category}
                    </Badge>
                  </motion.div>
                </div>

                {/* Company Info */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div 
                      className={`p-2 rounded-xl ${company.accent} bg-opacity-20 backdrop-blur-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <company.icon className={`w-5 h-5 text-white`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg text-white font-semibold mb-1"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {company.name}
                      </motion.h3>
                      <motion.div 
                        className="flex items-center gap-1 text-white/70"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MapPin className="w-3 h-3" />
                        </motion.div>
                        <span className="text-xs">{company.distance}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-white/80 text-sm leading-relaxed"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {company.description}
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}