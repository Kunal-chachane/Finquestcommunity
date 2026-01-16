import { Check, X, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const comparisonData = [
  {
    id: 1,
    name: "NeoBank Pro",
    category: "Banking",
    rating: 4.9,
    price: "Free",
    features: {
      "Zero monthly fees": true,
      "International transfers": true,
      "ATM fee reimbursement": true,
      "24/7 customer support": true,
      "Investment options": false,
      "Crypto trading": false,
    },
    highlighted: true
  },
  {
    id: 2,
    name: "InvestSmart",
    category: "Investment",
    rating: 4.8,
    price: "$9.99/mo",
    features: {
      "Zero monthly fees": false,
      "International transfers": true,
      "ATM fee reimbursement": false,
      "24/7 customer support": true,
      "Investment options": true,
      "Crypto trading": true,
    },
    highlighted: false
  }
];

export function ComparisonSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Compare
            <br />
            <span className="text-pink-300">Side by Side</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Make informed decisions with our detailed comparison tool
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {comparisonData.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 ${
                company.highlighted 
                  ? 'border-pink-500 border-2 shadow-xl' 
                  : 'border-white/20'
              }`}>
                {company.highlighted && (
                  <div className="absolute top-0 right-0 bg-pink-500 text-white px-3 py-1 text-xs rounded-bl-lg">
                    Recommended
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {company.name.substring(0, 1)}
                    </span>
                  </div>
                  <h3 className="text-xl mb-1 text-white font-semibold">{company.name}</h3>
                  <Badge variant="secondary" className="mb-2 bg-pink-500/20 text-pink-200 border-pink-300/30">
                    {company.category}
                  </Badge>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white/90">{company.rating}</span>
                  </div>
                  <div className="text-2xl text-pink-300 mb-4 font-bold">
                    {company.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {Object.entries(company.features).map(([feature, available]) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        available 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {available ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        available ? 'text-white' : 'text-white/50'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full rounded-full text-white ${
                    company.highlighted 
                      ? 'bg-pink-600 hover:bg-pink-700' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
            Compare More Options
          </Button>
        </motion.div>
      </div>
    </section>
  );
}