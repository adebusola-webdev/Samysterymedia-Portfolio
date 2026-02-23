import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-navy scroll-mt-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-black/30"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-50"
        >
          {/* Placeholder: Camera lens/filmmaking vibe. Replace with your own highlight reel for best results. */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-camera-lens-zooming-in-close-up-1626-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-accent font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-6">
            Mobile Videography | Editor | Content Creator
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6 leading-none">
            SAMYSTERY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              MEDIA
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Capturing moments, creating memories. The premier mobile storytelling brand in <span className="text-white font-medium">Lagos, Nigeria</span>.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-brand-accent hover:bg-brand-blue text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-brand-accent/20"
            >
              <Play size={20} fill="currentColor" />
              Watch Portfolio
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300"
            >
              Book a Session
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 z-20 flex justify-center pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2 pointer-events-auto">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;