import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CallToAction() {
  return (
    <section className="py-20 px-6 bg-black/20 backdrop-blur-sm text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Your Fintech World
              <br />
              <motion.span 
                className="text-pink-300"
                whileHover={{ scale: 1.05, color: "#f8b4cb" }}
                transition={{ duration: 0.3 }}
              >
                in One Tap
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Discover, compare, and connect with the best fintech companies 
              near you. Start your financial journey today.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-pink-600 text-white hover:bg-pink-700 rounded-full px-8 py-4 text-lg group shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  Find Companies Near You
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-4 text-lg backdrop-blur-sm hover:border-white/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                  </motion.div>
                  <motion.span
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore Map
                  </motion.span>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center gap-6 mt-8 text-white/80">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl text-white mb-1 font-bold"
                  whileHover={{ scale: 1.1, color: "#ec4899" }}
                  transition={{ duration: 0.2 }}
                >
                  500+
                </motion.div>
                <div className="text-sm">Companies</div>
              </motion.div>
              <motion.div 
                className="w-px h-12 bg-pink-400/50"
                whileHover={{ scaleY: 1.2, backgroundColor: "rgba(244, 114, 182, 0.8)" }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl text-white mb-1 font-bold"
                  whileHover={{ scale: 1.1, color: "#ec4899" }}
                  transition={{ duration: 0.2 }}
                >
                  50+
                </motion.div>
                <div className="text-sm">Cities</div>
              </motion.div>
              <motion.div 
                className="w-px h-12 bg-pink-400/50"
                whileHover={{ scaleY: 1.2, backgroundColor: "rgba(244, 114, 182, 0.8)" }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl text-white mb-1 font-bold"
                  whileHover={{ scale: 1.1, color: "#ec4899" }}
                  transition={{ duration: 0.2 }}
                >
                  4.9★
                </motion.div>
                <div className="text-sm">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
            whileHover={{ y: -8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-6 opacity-30"
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1533234944761-2f5337579079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NTgyNzYzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mobile banking app"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}