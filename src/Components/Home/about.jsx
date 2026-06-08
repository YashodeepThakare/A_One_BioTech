"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── milestone data ─────────────────────────────────── */
const milestones = [
    {
        year: "2003",
        title: "The Beginning",
        desc: "Founded by Mr. Dilip Jadhav with a vision to revolutionize agriculture through tissue culture.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11Zm0 15a3 3 0 0 1-3-3c0-1.5 1-3 3-5.5 2 2.5 3 4 3 5.5a3 3 0 0 1-3 3Z" />
            </svg>
        ),
    },
    {
        year: "2005",
        title: "Pvt. Ltd. Company",
        desc: "Converted into a Private Limited Company and expanded operations on a larger scale.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v14h16V7L12 2ZM9 18H7v-2h2v2Zm0-4H7v-2h2v2Zm0-4H7V8h2v2Zm4 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2V8h2v2Zm4 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2V8h2v2Z" />
            </svg>
        ),
    },
    {
        year: "2010",
        title: "R&D Expansion",
        desc: "Invested in advanced research and developed expertise in tissue culture and plant biotechnology.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2v6h2l-1.5 3H16l-4 7v-5h-2l2-5H10L13 2ZM7 20h10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z" />
            </svg>
        ),
    },
    {
        year: "2015",
        title: "Mass Propagation",
        desc: "Scaled up production with state-of-the-art infrastructure to meet growing industry demands.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66S8 17 13 14.5V18l4-6c1.88-3 2-7 0-10-1 2-3 3-5 3 1-1 2-3 2-5-1 2-4 4-7 5 3-1 5 0 7 2 0-1-.5-2-1-3 1 1 2 2 2 4 0 1-1 2-2 2-.5 0-1-.5-1-1h2c0-1-.5-2-1-3l-1 2c-1 0-1 0-2-1 1 0 2 0 3-1Z" />
            </svg>
        ),
    },
    {
        year: "Today",
        title: "Trusted Partner",
        desc: "Delivering high-quality plants across India with trust and excellence.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z" />
            </svg>
        ),
    },
];

/* ── animation variants ─────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

const dotPop = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            delay: 0.3 + i * 0.15,
            ease: [0.34, 1.56, 0.64, 1], // springy overshoot
        },
    }),
};

const lineGrow = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.5 + i * 0.15,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

/* ── MilestoneCard ──────────────────────────────────── */
function MilestoneCard({ milestone, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} className="about-milestone-card">
            {/* animated dot */}
            <motion.div
                className="about-dot-wrap"
                variants={dotPop}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
            >
                <div className={`about-dot ${milestone.year === "Today" ? "about-dot--active" : ""}`}>
                    <span className="about-dot-icon">{milestone.icon}</span>
                </div>
            </motion.div>

            {/* year badge + card body slide up */}
            <motion.div
                className="about-card-content"
                variants={cardSlideUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
            >
                <div className={`about-year-badge ${milestone.year === "Today" ? "about-year-badge--active" : ""}`}>
                    {milestone.year}
                </div>
                <div className="about-card-body">
                    <h4 className="about-card-title">{milestone.title}</h4>
                    <p className="about-card-desc">{milestone.desc}</p>
                </div>
            </motion.div>
        </div>
    );
}

/* ── About Component ────────────────────────────────── */
export default function About() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });
    const timelineRef = useRef(null);
    const timelineInView = useInView(timelineRef, { once: true, margin: "-40px" });

    return (
        <>
            <style>{`
        /* ─── ABOUT SECTION ──────────────────────────────── */
        .about {
          position: relative;
          width: 100%;
          background: #F7F7F8;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 3rem 7rem;
        }

        /* ambient glows — red + green from logo */
        .about-glow-1 {
          position: absolute;
          top: -10%; right: -8%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(245, 21, 33, .04) 0%, transparent 55%);
          pointer-events: none; z-index: 0;
        }
        .about-glow-2 {
          position: absolute;
          bottom: -15%; left: -10%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 166, 81, .05) 0%, transparent 55%);
          pointer-events: none; z-index: 0;
        }

        /* ── decorative leaf top-left ── */
        .about-decor-tl {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(-25%);
          width: 35vw;
          max-width: 400px;
          height: auto;
          pointer-events: none;
          z-index: 0;
        }

        /* ── TOP SECTION: intro ───────────────────────────── */
        .about-top {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .about-left {
          padding-left: 6rem;
        }

        .about-eyebrow {
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
        .about-eyebrow .dot { color: #F51521; font-size: 1rem; }

        .about-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 3.5vw, 3.6rem);
          font-weight: 600;
          line-height: 1.1;
          color: #111827;
          letter-spacing: -.01em;
          margin: 0 0 1.8rem;
        }
        .about-heading .green { color: #00A651; }
        .about-heading .leaf-icon {
          display: inline-block;
          width: .55em; height: .55em;
          vertical-align: middle;
          margin-left: .18em;
          transform: rotate(15deg) translateY(-.06em);
        }

        .about-divider {
          width: 68px; height: 3px;
          background: linear-gradient(90deg, #F51521, #00A651);
          margin-bottom: 1.8rem;
          border-radius: 2px;
        }

        .about-desc {
          font-size: .95rem;
          line-height: 1.72;
          color: #4b5563;
          max-width: 580px;
          text-align: justify;
        }

        .about-founder-row {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .about-founder {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .about-founder-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 2px solid #F51521;
          display: flex; align-items: center; justify-content: center;
          background: rgba(245, 21, 33, .05);
          color: #F51521;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          flex-shrink: 0;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .about-founder-avatar:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(245, 21, 33, .15);
        }
        .about-founder-name {
          color: #111827;
          font-weight: 600;
          font-size: .92rem;
          margin-bottom: .15rem;
        }
        .about-founder-role {
          color: #6b7280;
          font-size: .76rem;
        }

        .about-readmore {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .6rem 1.2rem;
          background: #00A651;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: .85rem;
          font-weight: 500;
          cursor: pointer;
          transition: background .3s, transform .3s;
        }
        .about-readmore:hover {
          background: #008740;
        }
        .about-readmore svg {
          width: 14px;
          height: 14px;
          transition: transform .3s;
        }
        .about-readmore:hover svg {
          transform: translateX(3px);
        }

        /* ── RIGHT: visual card ──────────────────────────── */
        .about-right { position: relative; }

        .about-visual-card {
          position: relative;
          border: 1px solid rgba(192, 192, 192, .4);
          border-radius: 16px;
          padding: 1.8rem;
          max-width: 500px;
          margin-left: auto;
          overflow: hidden;
          transition: box-shadow .4s ease;
        }
        .about-visual-card:hover {
          box-shadow: 0 8px 40px rgba(245, 21, 33, .06), 0 4px 20px rgba(0, 166, 81, .06);
        }

        .about-visual-card::before {
          content: '';
          position: absolute;
          top: -20px; left: -20px; right: -20px; bottom: -20px;
          background-image: url('/bgImgOfCardAbout.png');
          background-size: cover;
          background-position: center;
          filter: blur(3px);
          z-index: 0;
          pointer-events: none;
        }

        .about-visual-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.15); /* Light overall tint */
          z-index: 0;
          pointer-events: none;
        }

        .about-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.6rem;
          position: relative;
          z-index: 1;
        }

        .about-feature {
          padding: 1.2rem;
          /* True glassmorphism background */
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
          transition: all .35s cubic-bezier(.22, 1, .36, 1);
          cursor: default;
        }
        .about-feature:hover {
          border-color: rgba(245, 21, 33, .2);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(245, 21, 33, .08);
        }

        .about-feature-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(245, 21, 33, .06);
          border: 1px solid rgba(245, 21, 33, .12);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
          color: #F51521;
          transition: transform .3s ease, background .3s ease;
        }
        .about-feature:hover .about-feature-icon {
          transform: scale(1.1) rotate(-5deg);
          background: rgba(245, 21, 33, .12);
        }
        .about-feature-icon svg { width: 20px; height: 20px; }

        .about-feature-title {
          color: #000000;
          font-size: .9rem;
          font-weight: 700;
          margin-bottom: .4rem;
        }
        .about-feature-desc {
          color: #111827;
          font-size: .78rem;
          font-weight: 500;
          line-height: 1.55;
        }

        /* ── BOTTOM: timeline ────────────────────────────── */
        .about-timeline-section {
          position: relative;
          z-index: 10;
        }

        .about-timeline-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .about-timeline-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.4vw, 2.2rem);
          font-weight: 600;
          color: #111827;
        }

        /* horizontal timeline */
        .about-timeline {
          display: flex;
          align-items: flex-start;
          position: relative;
          gap: 0;
        }

        /* the running baseline — animated via motion div */
        .about-timeline-line {
          position: absolute;
          top: 26px;
          left: 26px;
          right: 26px;
          height: 3px;
          background: linear-gradient(90deg, #F51521, #00A651, #8BD8B0, #00A651, #F51521);
          transform-origin: left center;
          border-radius: 2px;
          z-index: 1;
        }
        .about-timeline-line::after {
          content: '';
          position: absolute;
          inset: -3px 0;
          background: linear-gradient(90deg, rgba(245,21,33,.15), rgba(0,166,81,.2), rgba(139,216,176,.2), rgba(0,166,81,.2), rgba(245,21,33,.15));
          border-radius: 6px;
          filter: blur(4px);
          z-index: -1;
        }

        .about-milestone-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          text-align: center;
          padding: 0 .6rem;
          z-index: 3;
        }

        .about-dot-wrap {
          position: relative;
          z-index: 5;
          margin-bottom: 0.8rem;
        }

        .about-dot {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #f0f0f2;
          border: 2px solid rgba(192, 192, 192, .5);
          display: flex; align-items: center; justify-content: center;
          transition: all .4s cubic-bezier(.22, 1, .36, 1);
          position: relative;
          cursor: pointer;
        }
        .about-dot::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1.5px solid rgba(192, 192, 192, .25);
          transition: all .3s ease;
        }
        .about-dot:hover {
          transform: scale(1.12);
          border-color: #F51521;
          box-shadow: 0 0 20px rgba(245, 21, 33, .15);
        }
        .about-dot:hover::after {
          border-color: rgba(245, 21, 33, .2);
          inset: -8px;
        }

        .about-dot--active {
          border-color: #F51521;
          background: #fef0f0;
          box-shadow: 0 0 24px rgba(245, 21, 33, .15);
        }
        .about-dot--active::after {
          border-color: rgba(245, 21, 33, .2);
          animation: aboutPulse 2.5s ease-in-out infinite;
        }

        .about-dot-icon {
          display: flex;
          align-items: center; justify-content: center;
          color: #F51521;
          transition: transform .3s ease;
        }
        .about-dot:hover .about-dot-icon {
          transform: scale(1.15);
        }
        .about-dot-icon svg { width: 22px; height: 22px; }

        @keyframes aboutPulse {
          0%, 100% { transform: scale(1); opacity: .5; }
          50% { transform: scale(1.5); opacity: 0; }
        }

        .about-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-year-badge {
          font-size: .82rem;
          font-weight: 700;
          color: #4b5563;
          margin-bottom: .6rem;
          padding: .3rem .9rem;
          background: linear-gradient(145deg, #f5f5f5, #eaeaec);
          border: 1px solid rgba(192, 192, 192, .35);
          border-radius: 50px;
          transition: all .3s ease;
        }
        .about-milestone-card:hover .about-year-badge {
          border-color: rgba(245, 21, 33, .3);
          color: #F51521;
          background: rgba(245, 21, 33, .04);
        }
        .about-year-badge--active {
          background: rgba(245, 21, 33, .08);
          border-color: rgba(245, 21, 33, .3);
          color: #F51521;
        }

        .about-card-body { max-width: 200px; }

        .about-card-title {
          color: #111827;
          font-size: .82rem;
          font-weight: 600;
          margin-bottom: .35rem;
          transition: color .3s ease;
        }
        .about-milestone-card:hover .about-card-title {
          color: #F51521;
        }
        .about-card-desc {
          color: #6b7280;
          font-size: .72rem;
          line-height: 1.55;
        }

        /* ── RESPONSIVE ──────────────────────────────────── */
        @media (max-width: 1100px) {
          .about { padding: 4rem 3rem; }
          .about-top { grid-template-columns: 1fr; gap: 3.5rem; }
          .about-left { 
            padding-left: 0; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            text-align: center; 
          }
          .about-desc { text-align: justify; max-width: 650px; }
          .about-divider { margin-left: auto; margin-right: auto; transform-origin: center !important; }
          .about-founder-row { 
            flex-direction: column; 
            gap: 1.5rem; 
            justify-content: center; 
            align-items: center;
            margin-top: 2rem; 
          }
          .about-founder { justify-content: center; }
          .about-visual-card { max-width: 100%; margin: 0 auto; }
          .about-decor-tl { width: 30vw; max-width: 150px; transform: translateX(0); opacity: 1; }
          .about-timeline { flex-wrap: wrap; justify-content: center; gap: 2rem; }
          .about-timeline-line { display: none; }
          .about-milestone-card { flex: 0 0 calc(33.33% - 1.5rem); }
        }

        @media (max-width: 900px) {
          .about-milestone-card { flex: 0 0 calc(50% - 1.5rem); }
        }

        @media (max-width: 640px) {
          .about { padding: 3.5rem 1.5rem; }
          .about-heading { font-size: clamp(2rem, 8vw, 2.4rem); margin-bottom: 1.2rem; }
          .about-feature-grid { grid-template-columns: 1fr; gap: 1rem; }
          .about-visual-card { padding: 1.5rem; border-radius: 12px; }
          .about-founder-row { flex-direction: column; align-items: center; gap: 1.2rem; }
          .about-readmore { align-self: center; margin-top: 0.5rem; }
          .about-milestone-card { flex: 0 0 100%; }
          .about-decor-tl { width: 35vw; max-width: 120px; transform: translateX(0); opacity: 1; }
        }
      `}</style>


            <section className="about" id="about" ref={sectionRef}>
                <div className="about-glow-1" />
                <div className="about-glow-2" />
                <img src="/sideImgOfeco.png" alt="" className="about-decor-tl" />

                {/* ── TOP: intro + features ─── */}
                <div className="about-top">
                    {/* LEFT: copy */}
                    <motion.div
                        className="about-left"
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={0}
                    >
                        <div className="about-eyebrow">
                            <svg className="about-eyebrow-leaf" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span>ABOUT</span>
                        </div>

                        <h2 className="about-heading">
                            Growing Innovation
                            <svg className="leaf-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <br />Through{" "}
                            <span className="green">Biotechnology</span>
                        </h2>

                        <motion.div
                            className="about-divider"
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: "left" }}
                        />

                        <p className="about-desc">
                            Founded in 2003 by Mr. Dilip Jadhav, A-One Biotech began with a
                            vision to transform agriculture through advanced plant tissue
                            culture and research-driven propagation.
                        </p>
                        <p className="about-desc" style={{ marginTop: "1rem" }}>
                            Over two decades, we have evolved into a trusted partner for
                            farmers, industries, landscape consultants and corporate green
                            infrastructure projects.
                        </p>
                        <p className="about-desc" style={{ marginTop: "1rem" }}>
                            Backed by continuous R&D, modern infrastructure and a passionate
                            team, we are committed to delivering high-quality, genetically
                            consistent plants that build a greener tomorrow.
                        </p>

                        <motion.div
                            className="about-founder-row"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="about-founder">
                                <div className="about-founder-avatar">DJ</div>
                                <div className="about-founder-info">
                                    <div className="about-founder-name">Mr. Dilip Jadhav</div>
                                    <div className="about-founder-role">
                                        Founder & Managing Director
                                    </div>
                                </div>
                            </div>
                            
                            <button className="about-readmore">
                                Read More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: feature cards */}
                    <motion.div
                        className="about-right"
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={1}
                    >
                        <div className="about-visual-card">
                            <div className="about-feature-grid">
                                {[
                                    {
                                        title: "Advanced R&D",
                                        desc: "Continuous research in tissue culture and plant biotechnology.",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                                                <path d="M8.5 2h7" />
                                                <path d="M7 16h10" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Modern Infrastructure",
                                        desc: "State-of-the-art facilities for mass propagation at scale.",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 21h18" />
                                                <path d="M5 21V7l7-4 7 4v14" />
                                                <path d="M9 21v-4h6v4" />
                                                <path d="M9 10h1" /><path d="M14 10h1" />
                                                <path d="M9 14h1" /><path d="M14 14h1" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Genetic Consistency",
                                        desc: "High-quality, genetically uniform plants for every client.",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 15c6.667-6 13.333 0 20-6" />
                                                <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
                                                <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
                                                <path d="M17 6l-2.5-2.5" /><path d="M14 8l-2.5-2.5" />
                                                <path d="M7 18l2.5 2.5" /><path d="M10 16l2.5 2.5" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Trusted Partner",
                                        desc: "Serving farmers, industries, and corporate green projects across India.",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L14.39 7.91a.5.5 0 0 0 .382.275l5.074.66a.5.5 0 0 1 .279.86l-3.714 3.508a.5.5 0 0 0-.146.447l.91 5.022a.5.5 0 0 1-.73.53l-4.488-2.39a.5.5 0 0 0-.474 0l-4.488 2.39a.5.5 0 0 1-.73-.53l.91-5.022a.5.5 0 0 0-.146-.447L3.315 9.705a.5.5 0 0 1 .279-.86l5.074-.66a.5.5 0 0 0 .382-.275l1.952-4.644Z" />
                                            </svg>
                                        ),
                                    },
                                ].map((feat, i) => (
                                    <motion.div
                                        key={feat.title}
                                        className="about-feature"
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        custom={i + 2}
                                    >
                                        <div className="about-feature-icon">{feat.icon}</div>
                                        <div className="about-feature-title">{feat.title}</div>
                                        <div className="about-feature-desc">{feat.desc}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── BOTTOM: timeline ─── */}
                <div className="about-timeline-section" ref={timelineRef}>
                    <motion.div
                        className="about-timeline-header"
                        variants={fadeUp}
                        initial="hidden"
                        animate={timelineInView ? "visible" : "hidden"}
                        custom={0}
                    >
                        <h3 className="about-timeline-title">
                            Two Decades of Growth & Innovation
                        </h3>
                    </motion.div>

                    <div className="about-timeline">
                        {/* animated baseline */}
                        <motion.div
                            className="about-timeline-line"
                            variants={lineGrow}
                            initial="hidden"
                            animate={timelineInView ? "visible" : "hidden"}
                        />

                        {milestones.map((m, i) => (
                            <MilestoneCard
                                key={m.year}
                                milestone={m}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}