import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const mapMarkers = [
  { id: 1, x: 30, y: 40, name: "NeoBank", type: "Banking" },
  { id: 2, x: 60, y: 25, name: "PayFlow", type: "Payments" },
  { id: 3, x: 45, y: 60, name: "InvestPro", type: "Investments" },
  { id: 4, x: 75, y: 45, name: "SecureVault", type: "Security" },
  { id: 5, x: 20, y: 70, name: "CryptoWave", type: "Crypto" },
];

export function InteractiveMap() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Explore Your
            <br />
            <span className="text-pink-300">Financial District</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Interactive map showing fintech companies in your area
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8 overflow-hidden border border-white/20">
            <div className="relative h-96 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl overflow-hidden">
              {/* Map Background Pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>

              {/* Animated Map Markers */}
              {mapMarkers.map((marker, index) => (
                <motion.div
                  key={marker.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${marker.x}%`,
                    top: `${marker.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-lg">
                      <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-30"></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg px-3 py-2 whitespace-nowrap border border-white/20">
                        <p className="text-sm text-gray-900">{marker.name}</p>
                        <p className="text-xs text-gray-600">{marker.type}</p>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Current Location */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20 scale-150"></div>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm text-white/90">Fintech Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-white/90">Your Location</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}