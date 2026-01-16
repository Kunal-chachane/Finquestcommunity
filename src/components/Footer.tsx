import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import finquestLogo from 'figma:asset/b8bc997d321d8d01ff9d0f759cdc2fd6c8a5a8cb.png';

const quickLinks = ["About", "Categories", "Explore", "Contact"];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" }
];

export function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-sm border-t border-white/10 relative overflow-hidden">
      {/* Subtle gradient overlay to match background aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Left: Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img 
              src={finquestLogo} 
              alt="FinQuest Logo" 
              className="w-8 h-8 object-contain rounded-lg"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="text-xl font-bold text-white drop-shadow-lg"
              whileHover={{ x: 3, color: "#ec4899" }}
              transition={{ duration: 0.2 }}
            >
              FinQuest
            </motion.span>
          </motion.div>

          {/* Center: Quick Links */}
          <div className="flex items-center gap-8">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, color: "#ec4899" }}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium drop-shadow-md"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 10, 
                  color: "#ec4899",
                  backgroundColor: "rgba(236, 72, 153, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-lg backdrop-blur-sm"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Row - Copyright and Attribution */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-white/60 text-sm drop-shadow-md"
            whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
            transition={{ duration: 0.2 }}
          >
            © 2025 All rights reserved
          </motion.p>
          <motion.p 
            className="text-white/50 text-xs"
            whileHover={{ color: "rgba(255, 255, 255, 0.7)", scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Created by <motion.span 
              className="text-pink-300 font-medium"
              whileHover={{ color: "#f8b4cb", scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Kunal
            </motion.span> and <motion.span 
              className="text-pink-300 font-medium"
              whileHover={{ color: "#f8b4cb", scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Gaurav
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}