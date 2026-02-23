import React from "react";
import { motion } from "framer-motion";
import { MapPin, User, Video, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-brand-black text-brand-navy dark:text-white relative overflow-hidden transition-colors duration-300 scroll-mt-24"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-brand-navy dark:text-white">
                Behind the Lens
              </h2>
              <div className="h-1 w-20 bg-brand-accent mb-8"></div>

              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Hi, I'm <span className="text-brand-accent">Samuel Ayeni</span>
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                As the CEO & Director of <strong>Samystery Media</strong>, I
                specialize in high-quality mobile videography that breaks the
                barrier between professional production and mobile convenience.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Based in <strong>Lagos, Nigeria</strong>, I capture moments from
                weddings, corporate events, and lifestyle shoots, turning them
                into immersive visual stories. My goal is simple: to create
                lasting memories that feel as real as the moment they happened.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-brand-gray/30 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                  <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white">
                      Founder
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Creative Director & Lead Editor
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-brand-gray/30 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                  <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white">
                      Location
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lagos, Nigeria (Available for Travel)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Placeholder for Samuel's Photo - using a high quality Unsplash stock photo of a videographer for now */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <img
                  src="/Images/samuel.jpeg"
                  alt="Samuel Ayeni - Videographer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-brand-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Video className="text-brand-accent" size={24} />
                  <span className="font-bold text-brand-navy dark:text-white">
                    Mobile Specialist
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Redefining what's possible with mobile cinematography.
                </p>
              </div>
            </motion.div>
            {/* Decorative pattern dots */}
            <div className="absolute -top-10 -right-10 opacity-20 z-0">
              <svg width="100" height="100" fill="none">
                <defs>
                  <pattern
                    id="dot-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="2"
                      cy="2"
                      r="2"
                      className="text-brand-navy dark:text-white"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#dot-pattern)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
