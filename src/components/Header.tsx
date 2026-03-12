"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notice Board', path: '/notices' },
    { name: 'Contact', path: '/contact' },
    { name: 'Developers', path: '/developers' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-gradient-to-r from-[#0b2545] to-[#13315c] text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/logo.png" alt="NLPS Badigachh Logo" className="h-10 w-10 overflow-hidden rounded-full bg-white object-contain p-1 shadow" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight">NLPS BADIGACHH</h1>
              <p className="text-xs text-amber-200 font-medium">HIGH SCHOOL</p>
            </div>
          </Link>

          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center space-x-1"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    href={link.path}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-amber-200 ${isActive ? 'text-amber-200' : 'text-white'}`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                    >
                      {link.name}
                    </motion.span>
                    {isActive ? (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-white/10 rounded-md z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : null}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#1c2c54] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden py-4 border-t border-[#1c2c54] overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-medium hover:bg-[#1c2c54] rounded-md transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
