'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, GripVertical } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
export default function SocialSidebar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <motion.div 
        drag
        dragMomentum={false}
        initial={{ y: -100, x: 0 }} // Initial offset handling if needed, or rely on CSS
        animate={{ y: 0, x: 0 }}
        className="fixed top-1/2 right-0 z-50 flex flex-col gap-3 p-3 bg-slate-900/50 backdrop-blur-md rounded-xl border-l border-t border-b border-white/10 shadow-lg cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none" }} // Important for dragging on touch devices
      >
        <div className="flex justify-center text-white/20 mb-1">
            <GripVertical size={16} />
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=61585746861628"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="p-1 md:p-2 rounded-full bg-[#1877F2] text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          onPointerDown={(e) => e.stopPropagation()} // Prevent drag when clicking link
        >
          <Facebook size={24} />
        </a>

        <a
          href="https://www.instagram.com/nlps_badigachh_high_school/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-1 md:p-2 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Instagram size={24} />
        </a>

        <a
          href="https://wa.me/917001181488?text=Hello%20Developer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-1 md:p-2 rounded-full bg-[#25D366] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <WhatsAppIcon size={24} />
        </a>
      </motion.div>
    </>
  );
}
