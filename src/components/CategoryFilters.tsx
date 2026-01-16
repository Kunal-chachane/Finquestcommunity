import { useState } from 'react';
import { Building, CreditCard, TrendingUp, Shield, Bitcoin, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const categories = [
  { id: 'banking', name: 'Banking', icon: Building, count: 12 },
  { id: 'payments', name: 'Payments', icon: CreditCard, count: 8 },
  { id: 'investments', name: 'Investments', icon: TrendingUp, count: 15 },
  { id: 'insurance', name: 'Insurance', icon: Shield, count: 6 },
  { id: 'crypto', name: 'Crypto', icon: Bitcoin, count: 9 },
  { id: 'loans', name: 'Loans', icon: DollarSign, count: 7 },
];

export function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState('banking');

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
            Browse by
            <br />
            <motion.span 
              className="text-pink-300"
              whileHover={{ scale: 1.05, color: "#f8b4cb" }}
              transition={{ duration: 0.3 }}
            >
              Category
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/90 max-w-2xl mx-auto drop-shadow-md"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Find the perfect fintech solution for your specific needs
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 min-w-fit transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-pink-600 hover:bg-pink-700 text-white border-pink-500 shadow-lg' 
                    : 'bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className="w-4 h-4" />
                </motion.div>
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.name}
                </motion.span>
                <motion.span 
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-pink-500/20 text-pink-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.count}
                </motion.span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-white/15 border border-white/20 hover:border-white/30 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(236, 72, 153, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Building className="w-6 h-6 text-pink-300" />
                  </motion.div>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-lg text-white font-semibold"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Company Name
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-white/70"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    0.5 km away
                  </motion.p>
                </div>
              </div>
              <motion.p 
                className="text-white/80 text-sm mb-4"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Brief description of the fintech company and their main services.
              </motion.p>
              <div className="flex items-center justify-between">
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="text-yellow-400"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    ★
                  </motion.span>
                  <span className="text-sm text-white/90">4.8</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="sm" variant="ghost" className="text-pink-300 hover:text-pink-200 hover:bg-pink-500/20">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}