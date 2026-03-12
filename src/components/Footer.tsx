"use client";

import { MapPin, Phone, Mail, Facebook, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) return null;
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-white border-b-2 border-blue-400 w-fit pb-1">NLPS Badigachh High School</h3>
            <p className="text-blue-100 leading-relaxed mb-6 font-medium">
              Empowering rural education since 2006. Affiliated to WBCHSE, providing quality education from Class V to XII.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Youtube].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  href="#" 
                  whileHover={{ scale: 1.1, translateY: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-700/50 p-3 rounded-2xl hover:bg-blue-600 transition-colors shadow-lg border border-blue-600/50"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-white border-b-2 border-blue-400 w-fit pb-1">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: "About Us", link: "/about" },
                { name: "Academics", link: "/academics" },
                { name: "Admissions", link: "/admissions" },
                { name: "Faculty", link: "/faculty" },
                { name: "Notice Board", link: "/notices" },
                { name: "Developers", link: "/developers" }
              ].map((item) => (
                <li key={item.link}>
                  <Link href={item.link} className="text-blue-100 hover:text-white transition-all flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-white border-b-2 border-blue-400 w-fit pb-1">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-blue-700/30 rounded-xl group-hover:bg-blue-600/50 transition-colors">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Majhiali - XIV, Chopra<br />
                  Uttar Dinajpur, West Bengal<br />
                  PIN: 733207
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-700/30 rounded-xl group-hover:bg-blue-600/50 transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-blue-100 font-medium">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-700/30 rounded-xl group-hover:bg-blue-600/50 transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-blue-100 font-medium">nlpsbadigachh@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-blue-700/50 mt-16 pt-8 text-center"
        >
          <p className="text-blue-200 text-sm font-medium">
            &copy; {new Date().getFullYear()} NLPS Badigachh High School. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
