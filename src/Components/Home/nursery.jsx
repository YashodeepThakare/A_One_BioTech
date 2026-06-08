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
    { name: "Bird's Nest Fern", type: "Asplenium nidus", img: "/nursery/plant_1.png" },
    { name: "Boston Fern", type: "Nephrolepis exaltata", img: "/nursery/plant_2.png" },
    { name: "Chinese Money Plant", type: "Pilea peperomioides", img: "/nursery/plant_3.png" },
    { name: "Jade Plant", type: "Crassula ovata", img: "/nursery/plant_4.png" },
    { name: "Red Aglaonema", type: "Aglaonema Siam Aurora", img: "/nursery/plant_5.png" },
    { name: "Variegated Syngonium", type: "Syngonium podophyllum", img: "/nursery/plant_6.png" },
    { name: "Green Ground Cover", type: "Plantlets", img: "/nursery/plant_7.png" },
    { name: "Cryptanthus Bromeliad", type: "Plantlets", img: "/nursery/plant_8.png" },
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

export default function Nursery() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });
    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, { once: true, margin: "-40px" });
    const portfolioRef = useRef(null);
    const portfolioInView = useInView(portfolioRef, { once: true, margin: "-40px" });
    const [activeFeature, setActiveFeature] = useState(0);

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
          padding: 5rem 5rem 4rem;
        }

        /* ── HERO AREA ─────────────────────────────────── */
        .nursery-hero {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          align-items: flex-start;
          margin-bottom: 5rem;
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

        .nursery-banner-img-wrap {
          border-radius: 300px 16px 300px 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.10);
          position: relative;
        }
        .nursery-banner-img {
          width: 100%;
          display: block;
          aspect-ratio: 21/9;
          object-fit: cover;
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
        }
        .nursery-stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.3;
        }
        .nursery-stat-sub {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.75);
          font-style: italic;
          margin-top: 0.35rem;
          line-height: 1.35;
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
          margin-top: 2rem;
          margin-bottom: 0;
        }

        .nursery-timeline-left {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .nursery-curve-line {
          position: absolute;
          top: 68px; 
          bottom: 120px; 
          left: 36px;
          width: 90px;
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
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        .nursery-plant-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(45, 106, 30, 0.1);
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

        /* ─── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 1200px) {
          .nursery { padding: 4rem 3rem; }
          .nursery-features-timeline { gap: 2rem; }
        }

        @media (max-width: 900px) {
          .nursery-hero { grid-template-columns: 1fr; gap: 3rem; }
          .nursery-stat-badge { left: 50%; transform: translateX(-50%); bottom: -24px; width: max-content; }
          .nursery-banner-img { aspect-ratio: 16/9; }
          .nursery-timeline-item:nth-child(n) { margin-left: 0; }
          .nursery-curve-line { display: none; }
        }

        @media (max-width: 640px) {
          .nursery { padding: 3rem 1.5rem; }
          .nursery-portfolio-header { flex-direction: column; gap: 0.8rem; align-items: flex-start; }
          .nursery-portfolio-grid { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
          .nursery-heading { font-size: clamp(2rem, 8vw, 2.6rem); }
          .nursery-stat-badge { gap: 0.8rem; bottom: -30px; }
          .nursery-stat-val { font-size: 2.4rem; margin-bottom: 0.2rem; }
          .nursery-stat-label { font-size: 0.75rem; }
          .nursery-stat-sub { font-size: 0.85rem; margin-top: 0.2rem; }
          .nursery-stat-icon { width: 36px; height: 36px; }
          .nursery-stat-icon svg { width: 18px; height: 18px; }
          .nursery-decor-leaf { width: 160px; height: 160px; }
          .nursery-timeline-icon-wrap { width: 56px; height: 56px; }
          .nursery-timeline-icon-wrap svg { width: 24px; height: 24px; }
        }

        @media (max-width: 480px) {
          .nursery-portfolio-grid { grid-template-columns: 1fr; }
          .nursery-timeline-item { flex-direction: column; gap: 1rem; align-items: flex-start; }
          .nursery-banner-img-wrap { border-radius: 120px 16px 120px 16px; }
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
                                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                                    animate={featuresInView ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)" }}
                                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                                />
                                {features.map((feat, i) => (
                                    <motion.div
                                        key={feat.title}
                                        className="nursery-timeline-item"
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate={featuresInView ? "visible" : "hidden"}
                                        custom={(i + 1) * 1.5}
                                    >
                                        <div className="nursery-timeline-icon-wrap">
                                            {feat.icon}
                                        </div>
                                        <div className="nursery-timeline-content">
                                            <div className="nursery-timeline-number">0{i + 1}</div>
                                            <h3 className="nursery-timeline-title">{feat.title}</h3>
                                            <p className="nursery-timeline-desc">{feat.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: PLANT PORTFOLIO */}
                    <div className="nursery-hero-right">
                        <motion.div
                            className="nursery-portfolio-header"
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0}
                        >
                            <div className="nursery-portfolio-title">
                                <LeafIcon size={16} color="#2d6a1e" />
                                Featured Plant Portfolio
                            </div>
                        </motion.div>

                        <div className="nursery-portfolio-grid">
                            {plants.map((plant, i) => (
                                <motion.div
                                    key={plant.name}
                                    className="nursery-plant-card"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    custom={(i + 1) * 0.8}
                                >
                                    <div className="nursery-plant-img-wrap">
                                        <img
                                            className="nursery-plant-img"
                                            src={plant.img}
                                            alt={plant.name}
                                        />
                                    </div>
                                    <div className="nursery-plant-info">
                                        <div className="nursery-plant-name">{plant.name}</div>
                                        <div className="nursery-plant-type">{plant.type}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>



                {/* ── BOTTOM BANNER (moved from hero) ─── */}
                <motion.div
                    className="nursery-bottom-banner"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={1}
                >
                    <div className="nursery-banner-img-wrap">
                        <img
                            className="nursery-banner-img"
                            src="/nursery/hero.png"
                            alt="A-One Biotech Nursery - Commercial Greenhouse"
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
                                <div className="nursery-stat-val">180+</div>
                                <div className="nursery-stat-label">Varieties Cultivated</div>
                                <div className="nursery-stat-sub">Indoor & Outdoor<br />Ornamental Plants</div>
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
            </section>
        </>
    );
}
