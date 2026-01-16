import { Search, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 bg-black/20 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Discover Fintech
          <br />
          <motion.span 
            className="text-pink-300"
            whileHover={{ scale: 1.05, color: "#f8b4cb" }}
            transition={{ duration: 0.3 }}
          >
            with FinQuest
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          whileHover={{ y: -2 }}
        >
          Your gateway to discovering innovative financial technologies and companies.
          Find the perfect fintech solutions tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-md mx-auto mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <MapPin />
            </motion.div>
            <Input
              type="text"
              placeholder="Enter your location"
              className="pl-12 pr-12 py-4 rounded-full border-pink-200/30 bg-white/90 backdrop-blur-md shadow-lg focus:shadow-xl transition-shadow text-gray-900 placeholder:text-gray-500"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-pink-600 hover:bg-pink-700 text-white"
              >
                <Search className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Start Exploring
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 relative"
        whileHover={{ y: -5 }}
      >
        <div className="relative max-w-lg mx-auto">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-500 rounded-3xl transform rotate-3 opacity-30"
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div 
            className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-2 border border-white/20"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)", backdropBlur: "lg" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663153206192-6d0e4c9570dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8MTc1ODI3NjMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fintech mobile app interface"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}