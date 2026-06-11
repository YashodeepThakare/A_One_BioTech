"use client";
import React from 'react';
import { Award, Trophy, Medal, Building2, Leaf, Star, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="relative w-full bg-[#F7F7F8]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Top Leaves Decor */}
      <motion.img 
        initial={{ opacity: 0, scaleX: -0.8, scaleY: 0.8, rotate: 5 }}
        whileInView={{ opacity: 0.9, scaleX: -1, scaleY: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        src="/About/Achivement/leafImg.png" 
        alt="3D Leaves Decoration"
        className="absolute top-0 left-0 w-[250px] md:w-[400px] lg:w-[550px] object-contain z-10 pointer-events-none drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] -translate-x-[30%] -translate-y-[10%]"
      />
      <motion.img 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        src="/assets/leaf-bg.png" 
        className="absolute top-1/3 left-0 w-[300px] md:w-[500px] pointer-events-none transform -translate-x-1/2 z-10" 
        alt="" 
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-20 pt-4 md:pt-6">
        
        {/* Top Headings and Text */}
        <div className="flex w-full max-w-[1100px] mx-auto relative z-20 pl-4 sm:pl-8 md:pl-[100px] lg:pl-[150px]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start w-full"
          >
            {/* Eyebrow / Badge */}
            <motion.div 
              variants={fadeUp} 
              className="inline-flex items-center gap-2 mb-4 px-4 sm:px-5 py-1.5 sm:py-2 border border-[#00A651]/30 rounded-full bg-[#00A651]/5 w-fit"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
              </svg>
              <span className="text-[#00A651] font-semibold text-[0.85rem] tracking-[0.14em] uppercase">ACHIEVEMENTS</span>
            </motion.div>
            
            {/* Heading and Underline */}
            <motion.div variants={fadeUp} className="flex flex-col mb-4 sm:mb-6">
              <h2 className="font-['Playfair_Display'] text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em] mb-3 sm:mb-4">
                Recognition <br className="hidden sm:block" />
                <span className="text-[#00A651]">That Inspires.</span>
              </h2>
              <div className="w-[40px] sm:w-[60px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm"></div>
            </motion.div>
            
            {/* Description */}
            <motion.div variants={fadeUp} className="flex">
              <p className="text-[#444] leading-[1.75] text-[14px] sm:text-[15px] max-w-2xl text-left">
                A-One Biotech has been acknowledged with several Awards & Appreciations for its contributions in the field of Protective Plant Tissue Culture and Vertical Gardening for <strong className="text-[#111]">more than 10 years.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Trophies Image Display */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-end mt-0 md:-mt-4 lg:-mt-8 relative z-20 pointer-events-none"
        >
          <motion.img 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            src="/About/Achivement/awards-removebg-preview (1).png" 
            alt="Awards and Appreciations" 
            className="w-full max-w-[1100px] max-h-[300px] md:max-h-[450px] h-auto object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] lg:pr-12"
          />
        </motion.div>
      </div>

      {/* Bottom Section: Dark Green Wave & Icons */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full bg-[#183021] z-10 pt-[120px] md:pt-[180px] lg:pt-[250px] pb-16 px-4 sm:px-6 lg:px-12 rounded-tl-[100px] md:rounded-tl-[160px] lg:rounded-tl-[240px] -mt-32 md:-mt-48 lg:-mt-64 shadow-2xl"
      >
        <div className="max-w-[1500px] mx-auto">
          
          {/* AWARDS & HONOURS Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 pl-6 lg:pl-16"
          >
            <h3 className="text-[#A88556] tracking-[0.1em] uppercase text-[13px] font-semibold mb-2">
              AWARDS & HONOURS
            </h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="h-px bg-[#A88556]"
            />
          </motion.div>

          {/* Timeline / Icons Container */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-2 px-2 lg:px-10"
          >
            {/* Dashed Line connecting icons (desktop only) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-px border-t border-dashed border-[#A88556]/50 z-0"
            />

            {[
              { icon: <Award/>, title: "Award of Excellence", sub: "National Landscape Fair 2015" },
              { icon: <Trophy/>, title: "Recognition by", sub: "Fertilizer Association of India" },
              { icon: <Medal/>, title: "Excellence in", sub: "Horticulture Development" },
              { icon: <Building2/>, title: "Excellence in Agriculture", sub: "Biotechnology & Horticulture - ASSOCHAM" },
              { icon: <Leaf/>, title: "Proud Exhibitor", sub: "HortiPro India" },
              { icon: <Star/>, title: "Indian Flower Plantation", sub: "& Nursery Excellence Awards" },
              { icon: <Flower2/>, title: "Karnataka Horticultural", sub: "Society Recognition" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="flex flex-col items-center text-center relative z-10 flex-1 px-1 group"
              >
                {/* Dotted Border Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-full border border-dashed border-[#A88556] flex items-center justify-center mb-5 bg-[#183021] text-[#A88556] cursor-pointer"
                >
                  {React.cloneElement(item.icon, { className: "w-6 h-6 group-hover:text-white transition-colors duration-300", strokeWidth: 1.5 })}
                </motion.div>
                
                <p className="text-[12.5px] font-semibold text-white mb-1.5 leading-tight">{item.title}</p>
                <p className="text-[11px] text-gray-400 leading-tight max-w-[140px] mx-auto">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
};

export default Achievements;
