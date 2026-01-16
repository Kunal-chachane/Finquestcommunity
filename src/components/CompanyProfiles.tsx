import { Star, MapPin, ExternalLink, Heart, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const featuredCompanies = [
  {
    id: 1,
    name: "Amazon Pay",
    tagline: "Safe, secure payments by Amazon",
    category: "Digital Payments",
    rating: 4.8,
    reviews: 12547,
    distance: "0.5 km",
    image: "https://images.unsplash.com/photo-1669865016788-992a0eb4b6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBwYXklMjBtb2JpbGUlMjBwYXltZW50fGVufDF8fHx8MTc1ODI3NzUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Amazon rewards", "Secure payments", "Easy refunds", "Gift card balance"],
    description: "Pay securely with Amazon Pay and earn rewards on every transaction. Trusted by millions for online and in-store payments with enhanced security features.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Paytm",
    tagline: "India's leading digital payment app",
    category: "Digital Wallet",
    rating: 4.6,
    reviews: 28931,
    distance: "0.8 km",
    image: "https://images.unsplash.com/photo-1732258355921-4d9f948aed36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXl0bSUyMHBheW1lbnQlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU4Mjc3NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["UPI payments", "Bill payments", "Recharge", "Shopping & travel"],
    description: "Complete digital payment solution offering UPI, wallet, banking, shopping, and entertainment services all in one super app with cashback rewards.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Upstox",
    tagline: "Smart trading, simplified",
    category: "Stock Trading",
    rating: 4.7,
    reviews: 15624,
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cHN0b3glMjB0cmFkaW5nJTIwaW52ZXN0bWVudCUyMGFwcHxlbnwxfHx8fDE3NTgyNzc1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Zero brokerage", "Advanced charts", "Real-time data", "SIP investments"],
    description: "Modern trading platform offering zero brokerage on equity delivery trades with advanced charting tools and seamless investment experience.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    name: "Google Pay",
    tagline: "A simple way to pay",
    category: "UPI Payments",
    rating: 4.8,
    reviews: 35672,
    distance: "0.9 km",
    image: "https://images.unsplash.com/photo-1508938255445-041651dfe0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBwYXklMjBtb2JpbGUlMjBwYXltZW50fGVufDF8fHx8MTc1ODI3NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["UPI payments", "Rewards & offers", "Bill payments", "Google integration"],
    description: "Fast, simple, and secure payments with Google's trusted technology. Send money to friends, pay bills, and earn rewards with every transaction.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    name: "PhonePe",
    tagline: "Digital payments for everyone",
    category: "UPI Platform",
    rating: 4.7,
    reviews: 22439,
    distance: "0.6 km",
    image: "https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZXBlJTIwbW9iaWxlJTIwd2FsbGV0fGVufDF8fHx8MTc1ODI3NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["UPI transactions", "Mutual funds", "Insurance", "Gold investment"],
    description: "Complete financial services platform offering payments, investments, insurance, and wealth management solutions with instant money transfers.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    name: "Razorpay",
    tagline: "Payment solutions for businesses",
    category: "Payment Gateway",
    rating: 4.6,
    reviews: 8945,
    distance: "1.4 km",
    image: "https://images.unsplash.com/photo-1751969814107-7d79fdca2db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXpvcnBheSUyMHBheW1lbnQlMjBnYXRld2F5fGVufDF8fHx8MTc1ODI3NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Payment gateway", "Business banking", "Payroll", "International payments"],
    description: "Comprehensive payment solutions for businesses with advanced APIs, analytics, and automated reconciliation for seamless financial operations.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export function CompanyProfiles() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <section className="py-20 px-6 bg-black/10 backdrop-blur-sm">
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
            Featured
            <br />
            <motion.span 
              className="text-pink-300"
              whileHover={{ scale: 1.05, color: "#f8b4cb" }}
              transition={{ duration: 0.3 }}
            >
              Companies
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/90 max-w-2xl mx-auto drop-shadow-md"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Discover top-rated fintech companies with exceptional services
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {featuredCompanies.slice(0, 4).map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <motion.div 
                    className="lg:w-1/2 relative group cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={company.image}
                        alt={company.name}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </motion.div>
                    
                    {/* Video Play Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-pink-600 rounded-full p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </motion.div>

                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" variant="secondary" className="rounded-full bg-white/90 backdrop-blur text-gray-900 hover:bg-white">
                          <Play className="w-4 h-4" />
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" variant="secondary" className="rounded-full bg-white/90 backdrop-blur text-gray-900 hover:bg-white">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="absolute bottom-4 left-4"
                      whileHover={{ scale: 1.05, x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge className="bg-pink-500/80 text-white backdrop-blur border-white/20">
                        {company.category}
                      </Badge>
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                        <span className="text-lg text-white">{company.rating}</span>
                        <span className="text-white/70">({company.reviews} reviews)</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-1 text-white/70"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MapPin className="w-4 h-4" />
                        </motion.div>
                        <span className="text-sm">{company.distance}</span>
                      </motion.div>
                    </div>

                    <motion.h3 
                      className="text-2xl mb-2 text-white font-bold"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {company.name}
                    </motion.h3>
                    <motion.p 
                      className="text-pink-300 mb-4"
                      whileHover={{ color: "#f8b4cb", y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {company.tagline}
                    </motion.p>
                    
                    <motion.p 
                      className="text-white/90 mb-6 leading-relaxed"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {company.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge variant="secondary" className="text-xs bg-pink-500/20 text-pink-200 border-pink-300/30 hover:bg-pink-500/30 transition-all duration-200">
                            {feature}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button className="w-full rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          View Profile
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="icon" className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}