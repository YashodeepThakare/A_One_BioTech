"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";

// Premium Animated Counter Component
const AnimatedCounter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { triggerOnce: true, margin: "-50px" });
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          setCurrentValue(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef}>{currentValue}+</span>;
};

export default function BioTechLab() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    triggerOnce: true,
    margin: "-50px",
  });

  // Array of 8 images
  const images = [
    "/BioTechLab/img1.png",
    "/BioTechLab/img2.png",
    "/BioTechLab/img3.png",
    "/BioTechLab/img4.png",
    "/BioTechLab/img5.png",
    "/BioTechLab/img6.png",
    "/BioTechLab/img7.png",
    "/BioTechLab/img8.png",
  ];

  // Track the currently active image
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Premium automatic slideshow transition
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants for the Bento Box items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Text Reveal Variants
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const textLineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  return (
    <section className="biolab-section" ref={sectionRef}>
      {/* Top Split Content */}
      <div className="biolab-top">

        {/* Left Text Content */}
        <motion.div
          className="biolab-left"
          variants={textContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >


          <motion.div variants={textLineVariants} className="biolab-eyebrow">
            <svg className="biolab-eyebrow-leaf" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
            </svg>
            <span>BIOTECH LAB</span>
          </motion.div>

          <h2 className="biolab-title">
            <div style={{ overflow: "hidden", paddingBottom: "5px" }}>
              <motion.div variants={textLineVariants} className="biolab-title-line1">
                Where Precision Meets <span style={{ color: "#00a651" }}>Plant Science</span>
                <svg className="leaf-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                </svg>
              </motion.div>
            </div>
          </h2>

          <motion.div variants={textLineVariants} className="biolab-desc" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem", lineHeight: "1.5" }}>
            <p style={{ margin: 0 }}>Our expertise in <strong>Plant Tissue Culture Techniques</strong> helps us grow genetically altered plants with similar specifications in required quality and quantities.</p>
            <p style={{ margin: 0 }}>At A-One Biotech, our state-of-the-art <strong>3,000 sq. ft. Plant Tissue Culture Laboratory</strong> serves as the foundation of our biotechnology operations. Designed with advanced clean-room facilities and controlled growing environments, the laboratory ensures the highest standards of sterility, quality, and consistency throughout the propagation process.</p>
            <p style={{ margin: 0 }}>Using modern tissue culture techniques, we develop disease-free, genetically uniform, and high-performance plantlets from carefully selected mother plants. Every stage—from culture initiation and multiplication to rooting and acclimatization—is monitored under strict quality protocols to maintain genetic integrity and plant health.</p>
            <p style={{ margin: 0 }}>Our world-class infrastructure, combined with scientific expertise and research-driven methodologies, enables us to produce <strong>up to 6 million viable plants annually</strong>, meeting the growing demands of agriculture, horticulture, landscaping, and green infrastructure projects.</p>
            <p style={{ margin: 0 }}>Focused on innovation, precision, and sustainability, the A-One Biotech Laboratory continues to drive the development of superior plant varieties while contributing to a greener and more sustainable future.</p>
          </motion.div>


        </motion.div>

        {/* Right Honeycomb Grid Content */}
        <div className="biolab-right">
          <div className="honeycomb">

            {/* Row 1: 3 Hexagons */}
            <div className="hex-row">
              {images.slice(0, 3).map((src, i) => (
                <motion.div 
                  key={src} 
                  className="hex" 
                  initial={{ opacity: 0, scale: 0 }} 
                  animate={inView ? { opacity: 1, scale: 1 } : {}} 
                  transition={{ delay: 0.1 * i, type: 'spring' }}
                >
                  <div className="hex-inner">
                    <img src={src} alt="Lab Infrastructure" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 2 Hexagons */}
            <div className="hex-row">
              {images.slice(3, 5).map((src, i) => (
                <motion.div 
                  key={src} 
                  className="hex" 
                  initial={{ opacity: 0, scale: 0 }} 
                  animate={inView ? { opacity: 1, scale: 1 } : {}} 
                  transition={{ delay: 0.3 + 0.1 * i, type: 'spring' }}
                >
                  <div className="hex-inner">
                    <img src={src} alt="Lab Infrastructure" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: 3 Hexagons */}
            <div className="hex-row">
              {images.slice(5, 8).map((src, i) => (
                <motion.div 
                  key={src} 
                  className="hex" 
                  initial={{ opacity: 0, scale: 0 }} 
                  animate={inView ? { opacity: 1, scale: 1 } : {}} 
                  transition={{ delay: 0.5 + 0.1 * i, type: 'spring' }}
                >
                  <div className="hex-inner">
                    <img src={src} alt="Lab Infrastructure" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Stats Row */}
      <motion.div
        className="biolab-stats-wrapper"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={statsContainerVariants}
      >
        <div className="biolab-stats">
          {/* Stat 1 */}
          <motion.div className="biolab-stat-card" variants={statCardVariants}>
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18h8"/>
                <path d="M3 22h18"/>
                <path d="M14 22a7 7 0 1 0 0-14h-1"/>
                <path d="M9 14h2"/>
                <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
                <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
              </svg>
            </div>
            <div className="stat-text">
              <div className="stat-value"><AnimatedCounter from={0} to={3000} duration={2} /></div>
              <div className="stat-label">Sq. Ft.<br />Laboratory</div>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div className="biolab-stat-card" variants={statCardVariants}>
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20h10"/>
                <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>
              </svg>
            </div>
            <div className="stat-text">
              <div className="stat-value"><AnimatedCounter from={0} to={6} duration={2} />M</div>
              <div className="stat-label">Plants<br />Annually</div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div className="biolab-stat-card" variants={statCardVariants}>
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="stat-text">
              <div className="stat-value">Clean Room</div>
              <div className="stat-label">Facilities</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .biolab-section {
          padding: 3rem 7rem; 
          background: #F7F7F8;
          overflow: hidden;
        }

        .biolab-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── LEFT TEXT SECTION ── */
        .biolab-left {
          padding-left: 0;
          margin-left: -3rem; /* Shift slightly to the left */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
        }

        .biolab-eyebrow {
          font-size: .85rem;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: 1.2rem;
          color: #00A651;
          padding: .5rem 1.4rem;
          border: 1px solid rgba(0, 166, 81, .3);
          border-radius: 50px;
          background: rgba(0, 166, 81, .06);
        }

        .biolab-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 3.5vw, 3.6rem);
          line-height: 1.1;
          color: #111827;
          font-weight: 600;
          margin-bottom: 1.8rem;
          letter-spacing: -.01em;
        }

        .biolab-title .leaf-icon {
          display: inline-block;
          width: .55em; height: .55em;
          vertical-align: middle;
          margin-left: .18em;
          transform: rotate(15deg) translateY(-.06em);
        }

        .biolab-desc {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 650px;
        }

        }

        /* ── RIGHT HONEYCOMB GRID ── */
        .biolab-right {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 8rem; /* Pushed layout even further down */
        }

        .honeycomb {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .hex-row {
          display: flex;
          justify-content: center;
          gap: 12px; 
        }

        .hex-row + .hex-row {
          margin-top: -43px; /* Gap(12) - Overlap(220*0.25=55) = -43px */
        }

        .hex {
          width: 190px; 
          height: 220px; /* Perfect regular hexagon ratio */
          position: relative;
          cursor: pointer;
          filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1));
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hex:hover {
          transform: scale(1.18) translateY(-8px);
          z-index: 10;
          filter: drop-shadow(0px 20px 30px rgba(0,166,81,0.35));
        }

        .hex-inner {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          background: #eaeaea;
        }

        .hex-inner img {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .hex:hover .hex-inner img {
          transform: scale(1.1);
        }

        /* ── BOTTOM STATS ROW ── */
        .biolab-stats-wrapper {
          padding: 0;
          margin-top: 1rem; /* Reduced to bring stats closer to top content */
          position: relative;
        }
        
        .biolab-stats {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 0.5rem;
        }

        .biolab-stat-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          padding: 1.2rem 1rem;
          border-radius: 1.2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.8rem;
          width: 190px;
          border: 1px solid rgba(255, 255, 255, 1);
          border-bottom: 4px solid #00a651;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .biolab-stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 166, 81, 0.15);
          border-bottom: 4px solid #00793a;
        }

        /* Subtle glowing background effect on hover */
        .biolab-stat-card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(0,166,81,0.15) 0%, rgba(0,166,81,0) 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }
        .biolab-stat-card:hover::before {
          opacity: 1;
        }

        .stat-icon-wrapper, .stat-text {
          position: relative;
          z-index: 1;
        }

        .stat-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #e6f6ee;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 166, 81, 0.1);
        }
        .stat-icon-wrapper svg {
          width: 22px;
          height: 22px;
        }

        .stat-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #00a651 0%, #00793a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          line-height: 1.4;
          text-align: center;
        }

        @media (max-width: 1400px) {
           .hex { width: 170px; height: 196px; }
           .hex-row + .hex-row { margin-top: -37px; }
        }

        @media (max-width: 1200px) {
          .biolab-section { padding: 3rem 2.5rem; }
          .biolab-top { display: flex; flex-direction: column; gap: 2rem; }
          .biolab-left { margin-left: 0; max-width: 100%; align-items: flex-start; text-align: left; }
          .biolab-desc { text-align: left; margin: 0; }
          .biolab-title-line1, .biolab-title-line2 { text-align: left; display: block; }
          .biolab-stats { justify-content: center; gap: 3rem; padding-right: 0; }
          .biolab-right { margin-top: 1rem; }
          .hex { width: 150px; height: 173px; }
          .hex-row + .hex-row { margin-top: -31px; }
        }

        @media (max-width: 992px) {
          .biolab-top { gap: 2rem; }
          .biolab-left { padding: 0; align-items: center; text-align: center; }
          .biolab-desc { margin: 0 0 1.5rem 0; text-align: left; width: 100%; }
          .biolab-title { text-align: center; width: 100%; }
          .biolab-title-line1, .biolab-title-line2 { display: block; text-align: center; }
          .biolab-right { width: 100%; margin-top: 1rem; justify-content: center; }
          .hex { width: 160px; height: 184px; }
          .hex-row + .hex-row { margin-top: -34px; }
        }

        @media (max-width: 768px) {
          .biolab-section { padding: 2.5rem 1.5rem; }
          .biolab-stats { flex-direction: column; align-items: center; gap: 1.5rem; }
          .hex { width: 130px; height: 150px; }
          .hex-row + .hex-row { margin-top: -27px; }
          .hex-row { gap: 10px; }
        }
        
        @media (max-width: 480px) {
          .biolab-section { padding: 2rem 1rem; }
          .biolab-title { font-size: 2.2rem; }
          .hex { width: 110px; height: 127px; }
          .hex-row + .hex-row { margin-top: -24px; }
          .hex-row { gap: 8px; }
        }
      `}} />
    </section>
  );
}
