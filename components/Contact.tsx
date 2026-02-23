import React from 'react';
import { Phone, Mail, Instagram, MapPin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-brand-dark pt-24 pb-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* CTA Section */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-navy dark:text-white mb-8 leading-tight">
              Let's Create <br />
              <span className="text-brand-accent">Something Epic.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-md">
              Ready to elevate your brand or capture your special day? Reach out to Samystery Media today.
            </p>
            
            <a 
              href="mailto:iamsamuelayeni@gmail.com"
              className="inline-flex items-center gap-2 text-2xl font-bold text-brand-navy dark:text-white hover:text-brand-accent transition-colors border-b-2 border-brand-navy/20 dark:border-white/20 hover:border-brand-accent pb-1"
            >
              Start a Project <ArrowUpRight size={24} />
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-accent mb-2">
                <Phone size={20} />
                <span className="font-bold text-brand-navy dark:text-white">Call / WhatsApp</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                    <a href="tel:+2347010348873" className="hover:text-brand-navy dark:hover:text-white transition-colors">+234 701 034 8873</a>
                </li>
                <li>
                    <a href="tel:+2349163625627" className="hover:text-brand-navy dark:hover:text-white transition-colors">+234 916 362 5627</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-accent mb-2">
                <Mail size={20} />
                <span className="font-bold text-brand-navy dark:text-white">Email</span>
              </div>
              <a href="mailto:iamsamuelayeni@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-navy dark:hover:text-white transition-colors block break-words">
                iamsamuelayeni@gmail.com
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-accent mb-2">
                <Instagram size={20} />
                <span className="font-bold text-brand-navy dark:text-white">Socials</span>
              </div>
              <a 
                href="https://instagram.com/samysterymedia" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-brand-navy dark:hover:text-white transition-colors"
              >
                @samysterymedia
              </a>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-3 text-brand-accent mb-2">
                <MapPin size={20} />
                <span className="font-bold text-brand-navy dark:text-white">Location</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Samystery Media. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="uppercase tracking-widest text-xs">Designed for Creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;