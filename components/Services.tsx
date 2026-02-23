import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit3, Smartphone, Briefcase, Heart, Instagram } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Event Videography",
    description: "Full coverage of weddings, corporate gatherings, and church programs. We capture the atmosphere and the details.",
    icon: <Camera size={32} />
  },
  {
    title: "Mobile Cinematography",
    description: "High-end cinematic visuals shot entirely on mobile. Perfect for fast-paced environments and social media.",
    icon: <Smartphone size={32} />
  },
  {
    title: "Social Media Reels",
    description: "Short-form, engaging content designed to go viral on Instagram and TikTok. Trendy edits and catchy transitions.",
    icon: <Instagram size={32} />
  },
  {
    title: "Brand Storytelling",
    description: "Collaborations with brands to tell their story authentically. Product showcases, behind-the-scenes, and promos.",
    icon: <Briefcase size={32} />
  },
  {
    title: "Professional Editing",
    description: "Turning raw footage into polished gems. Color grading, sound design, and narrative flow adjustments.",
    icon: <Edit3 size={32} />
  },
  {
    title: "Lifestyle Content",
    description: "Personal branding content for influencers and creatives. Aesthetic visuals that match your personal vibe.",
    icon: <Heart size={32} />
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-brand-dark relative transition-colors duration-300 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From intimate weddings to large corporate events, we bring a creative touch to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-brand-black/50 p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand-accent/50 shadow-lg dark:shadow-none transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 inline-block p-4 bg-gray-100 dark:bg-brand-gray/30 rounded-xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;