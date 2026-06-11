"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/#home" },
  { name: "ABOUT", href: "/about" },
  { name: "BIOTECHLAB", href: "/#biotechlab" },
  { name: "NURSERY", href: "/#nursery" },
  { name: "GALLERY", href: "/#gallery" },
  { name: "TEAM", href: "/#team" },
  { name: "FAQS", href: "/#faqs" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust cross-page hash scroll handler
  useEffect(() => {
    if (pathname === '/') {
      const pendingHash = sessionStorage.getItem('pendingHashScroll');
      if (pendingHash) {
        // Clear it immediately so it doesn't trigger again on refresh
        sessionStorage.removeItem('pendingHashScroll');
        
        // Wait for components and images to lay out properly
        setTimeout(() => {
          if (pendingHash === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const element = document.getElementById(pendingHash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 600); // 600ms is a safe delay for Framer Motion and Next.js to finish rendering
      }
    }
  }, [pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetHref = href.startsWith('#') ? `/${href}` : href;
    const [path, hash] = targetHref.split('#');

    // 1. Same page, just scrolling
    if (pathname === path && hash) {
      if (hash === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      window.history.pushState(null, '', targetHref);
      return;
    }

    // 2. Cross page, going to a hash
    if (pathname !== path && hash) {
      sessionStorage.setItem('pendingHashScroll', hash);
      router.push(path); // Navigate to the base path first, the useEffect will handle the scroll
      return;
    }

    // 3. Normal navigation (e.g. going to /about)
    if (pathname !== targetHref) {
      router.push(targetHref);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-white py-1.5 shadow-sm"
            : isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-1.5"
            : "bg-transparent pt-4 pb-1.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105" onClick={(e) => handleNavClick(e, '/#home')}>
              <Link href="/#home" onClick={(e) => e.preventDefault()}>
                <img src="/Logos/LogoBiotech.jpg" alt="A-One Biotech" style={{ width: "90px", height: "auto", display: "block", maxWidth: "100%" }} className="object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative group text-[15px] font-medium transition-colors hover:text-[#00A651] ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A651] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className={`inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-medium rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                  isScrolled 
                  ? "bg-[#00A651] text-white hover:bg-[#008c44] shadow-md shadow-[#00A651]/20 hover:shadow-[#00A651]/40" 
                  : "bg-[#008c44] text-white hover:bg-[#006832] shadow-md shadow-[#008c44]/30 hover:shadow-[#008c44]/50"
                }`}
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'} focus:outline-none`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-30 md:hidden h-screen w-screen"
              style={{ top: '100px' }} // Start below the navbar
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl z-40 md:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="mt-4 w-full flex items-center justify-center px-5 py-3 text-base font-medium rounded-xl bg-[#00A651] text-white shadow-md shadow-[#00A651]/20 active:scale-95 transition-transform"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
