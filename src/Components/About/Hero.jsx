"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroData = [
  {
    id: 1,
    image: '/About/Hero/img1.png',
    mobileImage: '/About/Hero/mb_img1.png',
    title: 'A-One BioTech',
    subtitle: 'A pioneering biotechnology company dedicated to advancing modern agriculture through innovative Plant Tissue Culture techniques, sustainable cultivation practices, and world-class research facilities.',
    mobilePosition: 'center',
    desktopPosition: 'center',
  },
  {
    id: 2,
    image: '/About/Hero/img2.png',
    title: 'Excellence in Plant Tissue Culture',
    subtitle: 'Our state-of-the-art laboratory specializes in producing genetically uniform, disease-free, and high-quality plants, ensuring superior growth, consistency, and productivity for growers across diverse agricultural sectors.',
    mobilePosition: 'center',
    desktopPosition: 'center',
  },
  {
    id: 3,
    image: '/About/Hero/img3.png',
    title: 'People, Innovation & Growth',
    subtitle: 'Driven by experienced scientists, skilled technicians, and dedicated professionals, we combine scientific expertise with innovation to deliver reliable and sustainable plant propagation solutions.',
    mobilePosition: 'center',
    desktopPosition: 'center',
  },
  {
    id: 4,
    image: '/About/Hero/img4.png',
    title: 'Building a Sustainable Future',
    subtitle: 'With an annual production capacity of millions of healthy plants, we are committed to supporting farmers, strengthening ecosystems, and creating a greener future through responsible biotechnology.',
    mobilePosition: 'center',
    desktopPosition: 'center',
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 7000); // Increased time slightly to let animations play out
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-gray-950">
      {/* Background Images with slow zoom effect */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* Mobile Image */}
          <div
            className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat md:hidden"
            style={{ 
              backgroundImage: `url(${heroData[currentIndex].mobileImage || heroData[currentIndex].image})`,
              backgroundPosition: heroData[currentIndex].mobilePosition
            }}
          />
          {/* Desktop Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat hidden md:block"
            style={{ 
              backgroundImage: `url(${heroData[currentIndex].image})`,
              backgroundPosition: heroData[currentIndex].desktopPosition
            }}
          />
          {/* Enhanced Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Blur Elements - More complex animations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, 80, -40, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-500/30 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0], 
            y: [0, -80, 60, 0],
            scale: [1, 1.5, 0.9, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-600/20 rounded-full blur-[100px] md:blur-[150px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -80, 0], 
            y: [0, -100, 50, 0],
            opacity: [0, 0.15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-teal-400/10 rounded-full blur-[120px] md:blur-[200px]"
        />
      </div>

      {/* Bottom Left Image Name/Caption */}
      <div className="absolute bottom-20 left-12 md:bottom-36 md:left-20 z-20 overflow-hidden max-w-[90%] md:max-w-[50%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-start"
          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-light text-white tracking-widest uppercase drop-shadow-md text-left">
              {heroData[currentIndex].title}
            </h3>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-green-500 mt-2 mb-3" 
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light text-left drop-shadow-md max-w-md">
              {heroData[currentIndex].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
