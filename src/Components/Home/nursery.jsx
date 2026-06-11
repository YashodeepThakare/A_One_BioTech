"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── animation variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── feature cards data ─────────────────────────────── */
const features = [
  {
    title: "Custom-Built\nClimate Control",
    desc: "Engineered to facilitate granular control over temperature and humidity, ensuring optimal hardening and uncompromised structural quality for every plant.",
    img: "/nursery/climate.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12c-2-2-4-2-4-2s-2 2-2 4 2 4 2 4c0-2 2-4 4-6Z" />
        <path d="M12 12c2-2 4-2 4-2s2 2 2 4-2 4-2 4c0-2-2-4-4-6Z" />
        <path d="M12 6c-1-1-2-1-2-1s-1 1-1 2 1 2 1 2c0-1 1-2 2-3Z" />
        <path d="M12 6c1-1 2-1 2-1s1 1 1 2-1 2-1 2c0-1-1-2-2-3Z" />
      </svg>
    ),
  },
  {
    title: "Strategic Geographic\nAdvantage",
    desc: "Located at Floriculture Park Ambi, Talegaon Dabhade MIDC. We leverage the region's naturally gifted climate to accelerate vigorous, year-round plant production.",
    img: "/nursery/geographic.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11 8 12 1-1 8-6.6 8-12a8 8 0 0 0-8-8Z" />
      </svg>
    ),
  },
  {
    title: "Quality &\nDiversity",
    desc: "Balancing ecological diversity with economic viability. We cultivate a heavily curated portfolio of premium flora engineered for high survivability.",
    img: "/nursery/diversity.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9c0-3 3-5 5-3s1 4-2 5M12 15c0 3-3 5-5 3s-1-4 2-5M15 12c3 0 5-3 3-5s-4-1-5 2M9 12c-3 0-5 3-3 5s4 1 5-2" />
      </svg>
    ),
  },
  {
    title: "High-Volume\nCultivation",
    desc: "Infrastructure designed to support the mass propagation of over 180+ distinct varieties of indoor and outdoor ornamental plants without sacrificing genetic uniformity.",
    img: "/nursery/highvolume.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20a2 2 0 0 1-2-2v-5" />
        <path d="M15 20a2 2 0 0 0 2-2v-3" />
        <path d="M8 2h8l2 7H6l2-7Z" />
        <path d="M12 9v11" />
        <path d="M7.5 13s2-2 4.5-2" />
        <path d="M16.5 15s-2-2-4.5-2" />
        <path d="M6 22h12" />
      </svg>
    ),
  },
];

/* ── plant portfolio data ───────────────────────────── */
const plants = [
  {
    name: "Syngonium White Butterfly",
    type: "Elegant foliage plant",
    img: "/nursery/PlantImg1.png",
    desc: "Elegant foliage plant with soft creamy-green arrowhead leaves. Perfect for indoor décor, low-maintenance landscaping, and air-purifying environments.",
    features: [
      "Attractive variegated foliage",
      "Easy to grow and maintain",
      "Ideal for homes and offices"
    ]
  },
  {
    name: "Green Ground Cover",
    type: "Plantlets",
    img: "/nursery/PlantImg7.png",
    desc: "Hardy, spreading plants perfect for covering bare soil in terrariums, dish gardens, or outdoor shaded areas.",
    features: [
      "Rapid spreading growth",
      "Helps retain soil moisture",
      "Creates a lush carpet effect"
    ]
  },
  {
    name: "Syngonium Variegated",
    type: "Syngonium podophyllum",
    img: "/nursery/PlantImg3.png",
    desc: "A striking foliage plant featuring creamy-white centers and rich green margins. Perfect for adding elegance to indoor spaces and landscape designs.",
    features: [
      "Attractive variegated leaves",
      "Low-maintenance growth",
      "Ideal for indoor décor 🌿"
    ]
  },
  {
    name: "Aglaonema Red",
    type: "Aglaonema Siam Aurora",
    img: "/nursery/PlantImg4.png",
    desc: "A stunning ornamental plant with vibrant red and green foliage that brings color and elegance to any space.",
    features: [
      "Striking red-green leaves",
      "Low-light tolerant",
      "Easy-care indoor plant 🌿✨"
    ]
  },
  {
    name: "Elephant Bush",
    type: "Portulacaria afra",
    img: "/nursery/PlantImg5.png",
    desc: "A compact succulent with thick, rounded leaves that stores water efficiently. Perfect for indoor displays, bonsai, and low-maintenance landscapes.",
    features: [
      "Drought-tolerant succulent",
      "Easy to grow and maintain",
      "Ideal for pots and bonsai 🌿"
    ]
  },
  {
    name: "Baby Rubber Plant",
    type: "Peperomia obtusifolia",
    img: "/nursery/PlantImg6.png",
    desc: "A compact ornamental plant with thick, glossy green leaves. Perfect for desks, homes, and modern indoor spaces.",
    features: [
      "Glossy evergreen foliage",
      "Low-maintenance indoor plant",
      "Compact and air-purifying 🌿✨"
    ]
  },
  {
    name: "Syngonium White Butterfly",
    type: "Tissue-cultured plant",
    img: "/nursery/PlantImg2.png",
    desc: "Young tissue-cultured plants with attractive arrowhead-shaped leaves. Ideal for indoor décor, landscaping, and commercial nursery production.",
    features: [
      "Fast-growing foliage plant",
      "Easy to maintain",
      "Perfect for indoor & landscape use"
    ]
  },
  {
    name: "Cryptanthus",
    type: "Cryptanthus spp.",
    img: "/nursery/PlantImg8.png",
    desc: "A unique bromeliad with star-shaped foliage and striking bronze-green tones. Perfect for indoor displays, terrariums, and decorative landscapes.",
    features: [
      "Distinctive star-shaped rosette",
      "Compact ornamental foliage",
      "Ideal for indoor décor and terrariums 🌿✨"
    ]
  },
];

/* ── Leaf icon component ────────────────────────────── */
const LeafIcon = ({ size = 18, color = "#2d6a1e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z"
      fill={color}
      opacity=".9"
    />
  </svg>
);

/* ── Plant Card component (Flippable) ───────────────── */
const PlantCard = ({ plant, custom, inView, fadeUp }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`nursery-plant-card ${isFlipped ? 'flipped' : ''}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="nursery-plant-card-inner">
        {/* FRONT */}
        <div className="nursery-plant-card-front">
          <div className="nursery-plant-img-wrap">
            <img
              className="nursery-plant-img"
              src={plant.img}
              alt={plant.name}
            />
          </div>
          <div className="nursery-plant-info">
            <div className="nursery-plant-text">
              <div className="nursery-plant-name">{plant.name}</div>
              <div className="nursery-plant-type">{plant.type}</div>
            </div>
            <div className="nursery-plant-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        {/* BACK */}
        <div className="nursery-plant-card-back">
          <div className="nursery-plant-back-title">{plant.name}</div>
          <div className="nursery-plant-back-desc">{plant.desc}</div>
          <ul className="nursery-plant-back-features">
            {plant.features?.map((feature, idx) => (
              <li key={idx}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default function Nursery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-40px" });
  const [activeFeature, setActiveFeature] = useState(0);

  const renderBanner = (className) => (
    <motion.div
      className={`nursery-bottom-banner ${className}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={1}
    >
      <div className="nursery-banner-img-wrap">
        <img
          className="nursery-banner-img cinematic-pan"
          src="/nursery/hero_cinematic.png"
          alt="A-One Biotech Nursery - Cinematic View"
        />
        <div className="nursery-banner-img-overlay" />

        {/* 180+ stat badge — inside the image */}
        <motion.div
          className="nursery-stat-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="nursery-stat-icon">
            <LeafIcon size={20} color="#fff" />
          </div>
          <div>
            <motion.div
              className="nursery-stat-val"
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              180+
            </motion.div>
            <motion.div
              className="nursery-stat-label"
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              Varieties Cultivated
            </motion.div>
            <motion.div
              className="nursery-stat-sub"
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Indoor & Outdoor<br />Ornamental Plants
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative leaf illustration */}
      <svg className="nursery-decor-leaf" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 180C20 180 40 80 120 40C120 40 160 20 180 10C180 10 170 90 140 130C140 130 120 160 20 180Z" fill="#2d6a1e" />
        <path d="M20 180C60 140 100 110 180 10" fill="none" stroke="#2d6a1e" strokeWidth="1.5" />
        <path d="M60 160C70 130 90 105 130 70" fill="none" stroke="#2d6a1e" strokeWidth="0.8" />
        <path d="M40 170C55 145 75 120 110 90" fill="none" stroke="#2d6a1e" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );

  return (
    <>
      <style>{`
        /* ─── NURSERY SECTION ───────────────────────────── */
        .nursery {
          position: relative;
          width: 100%;
          background: #F7F7F8;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          padding: 3.5rem 5rem 2.5rem;
        }

        /* ── HERO AREA ─────────────────────────────────── */
        .nursery-hero {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          align-items: flex-start;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
        }

        .nursery-hero-left-column {
          display: flex;
          flex-direction: column;
        }

        .nursery-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 0.5rem;
        }

        .nursery-eyebrow {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
          color: #00A651;
          padding: 0.5rem 1.4rem;
          border: 1px solid rgba(0, 166, 81, 0.3);
          border-radius: 50px;
          background: rgba(0, 166, 81, 0.06);
        }

        .nursery-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 3vw, 3.2rem);
          font-weight: 600;
          line-height: 1.1;
          color: #111827;
          letter-spacing: -0.01em;
          margin: 0 0 1.8rem;
        }
        .nursery-heading .green {
          color: #00A651;
        }
        .nursery-heading .leaf-inline {
          display: inline-block;
          width: 0.55em;
          height: 0.55em;
          vertical-align: middle;
          margin-left: 0.18em;
          transform: rotate(15deg) translateY(-0.06em);
        }

        .nursery-divider {
          width: 68px; height: 3px;
          background: linear-gradient(90deg, #F51521, #00A651);
          margin-bottom: 1.2rem;
          border-radius: 2px;
        }

        .nursery-desc {
          font-size: 0.88rem;
          line-height: 1.72;
          color: #4b5563;
          max-width: 600px;
          margin-bottom: 2rem;
        }

        /* ── BOTTOM BANNER (moved hero image) ──────────── */
        .nursery-bottom-banner {
          position: relative;
          margin-top: 4rem;
        }
        .mobile-banner { display: none; }
        .desktop-banner { display: block; }

        .nursery-banner-img-wrap {
          width: 100%;
          border-radius: 300px 16px 300px 16px;
          overflow: hidden;
          position: relative;
        }
        .nursery-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          aspect-ratio: 21/9;
        }
        .cinematic-pan {
          transform-origin: center;
          animation: kenBurnsPan 25s ease-in-out infinite alternate;
        }
        @keyframes kenBurnsPan {
          0% { transform: scale(1.05) translate(0%, 0%); }
          50% { transform: scale(1.12) translate(-2%, 2%); }
          100% { transform: scale(1.05) translate(2%, -1%); }
        }
        .nursery-banner-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 10%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.75) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ── STAT BADGE (inside the curved area) ────────── */
        .nursery-stat-badge {
          position: absolute;
          bottom: 60px;
          left: 80px;
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          z-index: 5;
        }
        .nursery-stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.2rem;
          color: #fff;
        }
        .nursery-stat-icon svg {
          width: 24px;
          height: 24px;
        }
        .nursery-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 0.4rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .nursery-stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.3;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .nursery-stat-sub {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.75);
          font-style: italic;
          margin-top: 0.35rem;
          line-height: 1.35;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        /* decorative leaf behind the stat */
        .nursery-decor-leaf {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 260px;
          height: 260px;
          opacity: 0.06;
          pointer-events: none;
          z-index: 3;
          transform: scaleX(-1);
        }

        /* ── CURVED TIMELINE FEATURES ────────────────── */
        .nursery-features-timeline {
          margin-top: 1rem;
          margin-bottom: 0;
        }

        .nursery-timeline-left {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .nursery-curve-line {
          position: absolute;
          top: 36px; 
          bottom: 36px; 
          left: 36px;
          width: 80px;
          border: 1.5px solid rgba(45, 106, 30, 0.3);
          border-right: none;
          border-radius: 300px 0 0 300px;
          z-index: 0;
        }

        .nursery-timeline-item {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .nursery-timeline-item:nth-child(2) { margin-left: 80px; }
        .nursery-timeline-item:nth-child(3) { margin-left: 0px; }
        .nursery-timeline-item:nth-child(4) { margin-left: 0px; }
        .nursery-timeline-item:nth-child(5) { margin-left: 80px; }

        .nursery-timeline-icon-wrap {
          width: 72px;
          height: 72px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          flex-shrink: 0;
          color: #2d6a1e;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: default;
        }
        .nursery-timeline-item:hover .nursery-timeline-icon-wrap {
          background: #2d6a1e;
          color: #fff;
          transform: scale(1.08) translateY(-4px) !important;
          box-shadow: 0 16px 40px rgba(45, 106, 30, 0.2);
        }

        .nursery-timeline-icon-wrap svg {
          width: 32px;
          height: 32px;
          stroke-width: 1.5;
        }

        .nursery-timeline-content {
          padding-top: 0.5rem;
        }

        .nursery-timeline-number {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2d6a1e;
          margin-bottom: 0.3rem;
        }

        .nursery-timeline-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.8rem;
          line-height: 1.3;
          white-space: pre-line;
        }

        .nursery-timeline-desc {
          font-size: 0.9rem;
          color: #4b5563;
          line-height: 1.6;
          max-width: 320px;
          margin: 0;
        }



        /* ─── PLANT PORTFOLIO ───────────────────────────── */
        .nursery-portfolio-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .nursery-portfolio-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #111827;
        }

        .nursery-portfolio-tagline {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.78rem;
          font-style: italic;
          color: #6b7280;
        }
        .nursery-portfolio-tagline::after {
          content: '';
          width: 50px;
          height: 1px;
          background: #9ca3af;
        }

        .nursery-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
        }

        .nursery-plant-card {
          perspective: 1000px;
          background: transparent;
          cursor: pointer;
          border-radius: 14px;
        }
        @keyframes modernFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .nursery-plant-card {
          animation: modernFloat 6s ease-in-out infinite;
        }
        .nursery-portfolio-grid .nursery-plant-card:nth-child(2n) {
          animation-delay: 1.5s;
        }
        .nursery-portfolio-grid .nursery-plant-card:nth-child(3n) {
          animation-delay: 3s;
        }
        .nursery-plant-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
          transform-style: preserve-3d;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .nursery-plant-card:hover .nursery-plant-card-inner {
          box-shadow: 0 12px 36px rgba(45, 106, 30, 0.12);
        }
        .nursery-plant-card.flipped .nursery-plant-card-inner {
          transform: rotateY(180deg);
        }
        .nursery-plant-card-front, .nursery-plant-card-back {
          backface-visibility: hidden;
          border-radius: 14px;
          background: #fff;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .nursery-plant-card-back {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          transform: rotateY(180deg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .nursery-plant-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #f0f4f0;
        }
        .nursery-plant-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .nursery-plant-card:hover .nursery-plant-img {
          transform: scale(1.08);
        }

        .nursery-plant-info {
          padding: 0.9rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nursery-plant-text {
          flex: 1;
        }
        .nursery-plant-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.2rem;
        }
        .nursery-plant-type {
          font-size: 0.7rem;
          color: #9ca3af;
          font-style: italic;
        }
        .nursery-plant-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(45, 106, 30, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2d6a1e;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
          margin-left: 0.5rem;
          position: relative;
          z-index: 1;
        }
        .nursery-plant-arrow::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #2d6a1e;
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: -1;
        }
        .nursery-plant-card:hover .nursery-plant-arrow {
          color: #fff;
          transform: translateX(4px);
        }
        .nursery-plant-card:hover .nursery-plant-arrow::after {
          opacity: 1;
          transform: scale(1);
        }
        .nursery-plant-arrow svg {
          width: 14px;
          height: 14px;
        }

        /* Back side details */
        .nursery-plant-back-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.6rem;
          line-height: 1.3;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nursery-plant-card.flipped .nursery-plant-back-title {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.2s;
        }
        .nursery-plant-back-desc {
          font-size: 0.85rem;
          color: #1f2937;
          line-height: 1.5;
          margin-bottom: 1rem;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nursery-plant-card.flipped .nursery-plant-back-desc {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.3s;
        }
        .nursery-plant-back-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nursery-plant-back-features li {
          font-size: 0.8rem;
          color: #1f2937;
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nursery-plant-card.flipped .nursery-plant-back-features li {
          transform: translateY(0);
          opacity: 1;
        }
        .nursery-plant-card.flipped .nursery-plant-back-features li:nth-child(1) { transition-delay: 0.4s; }
        .nursery-plant-card.flipped .nursery-plant-back-features li:nth-child(2) { transition-delay: 0.5s; }
        .nursery-plant-card.flipped .nursery-plant-back-features li:nth-child(3) { transition-delay: 0.6s; }
        .nursery-plant-back-features li svg {
          width: 15px;
          height: 15px;
          color: #00A651;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ─── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 1200px) {
          .nursery { padding: 4rem 3rem; }
          .nursery-features-timeline { gap: 2rem; }
        }

        @media (max-width: 1024px) {
          .nursery-hero { grid-template-columns: 1fr; gap: 3rem; }
          .nursery-portfolio-grid { grid-template-columns: repeat(3, 1fr); }
          .nursery-timeline-item:nth-child(n) { margin-left: 0; }
          .nursery-curve-line { display: none; }
          .nursery-timeline-left { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem 2rem; margin-top: 2rem; }
          .nursery-timeline-desc { max-width: 100%; }
          .nursery-stat-badge { left: 40px; bottom: 30px; }
        }

        @media (max-width: 900px) {
          .nursery-banner-img { aspect-ratio: 16/9; }
          .nursery-portfolio-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .nursery-timeline-left { grid-template-columns: 1fr; gap: 2.5rem; position: relative; }
          .nursery-curve-line {
            display: block;
            border: none;
            background: rgba(45, 106, 30, 0.25);
            width: 2px;
            border-radius: 0;
            top: 36px;
            bottom: 36px;
            left: 36px;
            z-index: 0;
          }
          .nursery-stat-badge { gap: 1rem; bottom: 20px; left: 30px; }
          .mobile-banner { display: block; margin-top: 2rem; margin-bottom: 2rem; }
          .desktop-banner { display: none; }
        }

        @media (max-width: 640px) {
          .nursery { padding: 3rem 1.5rem; }
          .nursery-portfolio-grid { gap: 0.8rem; }
          .nursery-heading { font-size: clamp(2rem, 8vw, 2.6rem); }
          .nursery-stat-badge { gap: 0.8rem; bottom: 20px; left: 24px; }
          .nursery-stat-val { font-size: 2.2rem; }
          .nursery-stat-label { font-size: 0.75rem; }
          .nursery-stat-sub { font-size: 0.8rem; }
          .nursery-stat-icon { width: 36px; height: 36px; }
          .nursery-stat-icon svg { width: 16px; height: 16px; }
          .nursery-decor-leaf { width: 120px; height: 120px; }
          .nursery-timeline-icon-wrap { width: 56px; height: 56px; }
          .nursery-timeline-icon-wrap svg { width: 24px; height: 24px; }
          .nursery-timeline-item { gap: 1.2rem; }
          .nursery-curve-line {
            left: 28px;
            top: 28px;
            bottom: 28px;
          }
        }

        @media (max-width: 480px) {
          .nursery { padding: 2.5rem 1rem; }
          .nursery-portfolio-grid { grid-template-columns: 1fr; }
          .nursery-timeline-item { gap: 1rem; }
          .nursery-timeline-icon-wrap { width: 48px; height: 48px; }
          .nursery-timeline-icon-wrap svg { width: 20px; height: 20px; }
          .nursery-curve-line {
            left: 24px;
            top: 24px;
            bottom: 24px;
          }
          .nursery-banner-img-wrap { border-radius: 60px 16px 60px 16px; }
          .nursery-banner-img { aspect-ratio: 4/3; }
          .nursery-stat-badge { bottom: 15px; gap: 0.6rem; left: 16px; }
          .nursery-stat-val { font-size: 1.8rem; }
          .nursery-stat-label { font-size: 0.7rem; }
          .nursery-stat-sub { font-size: 0.75rem; }
          .nursery-stat-icon { width: 30px; height: 30px; }
          .nursery-stat-icon svg { width: 14px; height: 14px; }
          .nursery-heading { font-size: 2rem; }
          .nursery-desc { font-size: 0.85rem; }
        }
      `}</style>

      <section className="nursery" id="nursery" ref={sectionRef}>

        {/* ── HERO AREA ─────────────────────────────────── */}
        <div className="nursery-hero">
          {/* LEFT COLUMN: Text + Timeline */}
          <div className="nursery-hero-left-column">
            <motion.div
              className="nursery-hero-left"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              <div className="nursery-eyebrow">
                <LeafIcon size={16} color="#00A651" />
                <span>OUR NURSERY EXCELLENCE</span>
              </div>

              <h2 className="nursery-heading">
                Growing Stronger Every Day.{" "}
                Preparing healthy, resilient plants for the{" "}
                <span className="green">real world</span>
                <svg className="leaf-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                </svg>
              </h2>

              <motion.div
                className="nursery-divider"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
              />

              {renderBanner('mobile-banner')}

              <p className="nursery-desc">
                The A-One Biotech nursery is the critical proving ground where science
                meets the soil. Situated in the naturally gifted climate of Floriculture Park Ambi,
                this advanced facility is engineered specifically for the hardening and large-scale
                propagation of tissue-cultured plantlets. By integrating custom-built climate
                control systems with precision horticulture, we expertly transform delicate
                in-vitro cultures into robust, weather-resilient plants. Our expansive infrastructure
                supports the high-volume cultivation of over 180+ distinct varieties of premium
                indoor and outdoor ornamental flora. We prioritize both ecological diversity and
                economic viability, ensuring that every plant maintains strict genetic uniformity,
                uncompromised structural quality, and high survivability, making them perfectly
                acclimated and ready for global deployment.
              </p>
            </motion.div>

            {/* ── CURVED TIMELINE FEATURES ─── */}
            <div className="nursery-features-timeline" ref={featuresRef}>
              <div className="nursery-timeline-left">
                <motion.div
                  className="nursery-curve-line"
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={featuresInView ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(0% 0% 100% 0%)" }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
                {features.map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    className="nursery-timeline-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <motion.div
                      className="nursery-timeline-icon-wrap"
                      variants={{
                        hidden: { scale: 0, rotate: -60, opacity: 0 },
                        visible: {
                          scale: 1,
                          rotate: 0,
                          opacity: 1,
                          transition: { type: "spring", stiffness: 260, damping: 18, delay: i * 0.12 + 0.1 }
                        }
                      }}
                    >
                      {feat.icon}
                    </motion.div>
                    <motion.div
                      className="nursery-timeline-content"
                      variants={{
                        hidden: { opacity: 0, x: 20, y: 10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: { duration: 0.6, delay: i * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }
                        }
                      }}
                    >
                      <div className="nursery-timeline-number">0{i + 1}</div>
                      <h3 className="nursery-timeline-title">{feat.title}</h3>
                      <p className="nursery-timeline-desc">{feat.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: PLANT PORTFOLIO */}
          <div className="nursery-hero-right">


            <div className="nursery-portfolio-grid">
              {plants.map((plant, i) => (
                <PlantCard
                  key={plant.img}
                  plant={plant}
                  custom={(i + 1) * 0.8}
                  inView={inView}
                  fadeUp={fadeUp}
                />
              ))}
            </div>
          </div>
        </div>



        {/* ── BOTTOM BANNER (moved from hero) ─── */}
        {renderBanner('desktop-banner')}
      </section>
    </>
  );
}
