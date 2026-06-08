"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── feature data ────────────────────────────────────── */
const features = [
    {
        title: "Advanced\nBiotech",
        desc: "Cutting-edge plant science",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
            </svg>
        ),
    },
    {
        title: "Quality\nAssured",
        desc: "Controlled environment",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Sustainable\nBy Design",
        desc: "Green solutions for a better future",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12" />
                <path d="M12 12C12 12 4 10 2 4" />
                <path d="M12 12C12 12 20 10 22 4" />
                <path d="M12 7C12 7 8 5 6 1" />
                <path d="M12 7C12 7 16 5 18 1" />
            </svg>
        ),
    },
    {
        title: "End-to-End\nExcellence",
        desc: "One ecosystem.\nComplete care.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
];

/* ── Mosaic segment images & clip paths ─────────────── */
/*
  5 pie-slice segments matching the reference design:
  D1 (350°) → edge ~(41%, 0%)    – top, slightly left
  D2 (65°)  → edge ~(100%, 27%)  – right, upper
  D3 (145°) → edge ~(85%, 100%)  – bottom, right-of-center
  D4 (220°) → edge ~(8%, 100%)   – bottom, left
  D5 (290°) → edge ~(0%, 32%)    – left, upper
*/
const segments = [
    {
        // Segment 1: top-left (Research / Microscope)
        img: "/hero-panel1.png",
        alt: "Research & Innovation",
        clip: "polygon(50% 50%, 0% 32%, 0% 0%, 41% 0%)",
        hoverClip: "polygon(100% 100%, -100% 100%, -100% -100%, 100% -100%)",
    },
    {
        // Segment 2: top-right (Tissue Culture Lab)
        img: "/hero-panel2.png",
        alt: "Tissue Culture Lab",
        clip: "polygon(50% 50%, 41% 0%, 100% 0%, 100% 27%)",
        hoverClip: "polygon(-100% 100%, -100% -100%, 200% -100%, 200% 100%)",
    },
    {
        // Segment 3: right (Greenhouse / Nursery)
        img: "/hero-panel3.png",
        alt: "Nursery Production",
        clip: "polygon(50% 50%, 100% 27%, 100% 100%, 85% 100%)",
        hoverClip: "polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)",
    },
    {
        // Segment 4: bottom (Plant Collections / Flowers)
        img: "/hero-panel4.png",
        alt: "Plant Collections",
        clip: "polygon(50% 50%, 85% 100%, 8% 100%, 8% 100%)",
        hoverClip: "polygon(50% -200%, 250% 200%, -150% 200%, -150% 200%)",
    },
    {
        // Segment 5: left (Green Infrastructure / Vertical Garden)
        img: "/hero-panel5.png",
        alt: "Green Infrastructure",
        clip: "polygon(50% 50%, 8% 100%, 0% 100%, 0% 32%)",
        hoverClip: "polygon(200% -100%, 200% 200%, -100% 200%, -100% -100%)",
    },
];

/* ── 5-stage pipeline data ───────────────────────────── */
const stages = [
    {
        id: "01",
        title: "RESEARCH",
        desc: "Continuous innovation and R&D to discover, develop and perfect superior plant varieties.",
        color: "red",
        image: "/hero-panel1.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
            </svg>
        ),
    },
    {
        id: "02",
        title: "TISSUE CULTURE LAB",
        desc: "Sterile, high-tech labs to multiply plant tissues and create true-to-type plantlets.",
        color: "green",
        image: "/hero-panel2.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31M14 2v7.31M8.5 2h7M7 21h10M9 15l1.5-1.5M13.5 16.5 15 15" />
                <path d="M8.34 9.34L3.89 17A2 2 0 0 0 5.62 20h12.76a2 2 0 0 0 1.73-3L15.66 9.34a2 2 0 0 1-.27-1V2" />
            </svg>
        ),
    },
    {
        id: "03",
        title: "NURSERY PRODUCTION",
        desc: "Hardening and large-scale propagation to produce healthy, uniform and robust plants.",
        color: "red",
        image: "/hero-panel3.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12" />
                <path d="M12 12C12 12 4 10 2 4" />
                <path d="M12 12C12 12 20 10 22 4" />
            </svg>
        ),
    },
    {
        id: "04",
        title: "PLANT COLLECTIONS",
        desc: "Wide range of indoor, outdoor, flowering, foliage and landscape plants for every need.",
        color: "green",
        image: "/hero-panel4.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
        ),
    },
    {
        id: "05",
        title: "CORONA GREENS",
        desc: "Design, develop and deliver green infrastructure and sustainable landscapes.",
        color: "red",
        image: "/hero-panel5.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
            </svg>
        ),
    },
];

/* ── animation variants ─────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardPop = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

/* ── Ecosystem Component ───────────────────────────── */
export default function Ecosystem() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-60px" });
    const pipelineRef = useRef(null);
    const pipelineInView = useInView(pipelineRef, { once: true, margin: "-40px" });

    return (
        <section className="eco" id="ecosystem" ref={sectionRef}>
            <style>{`
        /* ─── ECOSYSTEM SECTION ────────────────────────── */
        .eco {
          position: relative;
          width: 100%;
          background: #F7F7F8;
          font-family: 'Inter', sans-serif;
          padding: 1rem 7rem 3rem 7rem;
          overflow: hidden;
        }

        /* ── decorative leaf top-right ── */
        .eco-decor-tr {
          position: absolute;
          top: 0;
          right: 0;
          transform: translateX(20%);
          width: 35vw;
          max-width: 400px;
          height: auto;
          pointer-events: none;
          z-index: 0;
        }

        /* ── MAIN 2-COLUMN GRID ────────────────────────── */
        .eco-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── LEFT COLUMN ───────────────────────────────── */
        .eco-left {
          padding-right: 0;
          align-self: start;
          padding-top: 1rem;
        }

        /* Eyebrow */
        .eco-eyebrow {
          font-size: .85rem;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: 0.8rem;
          color: #00A651;
          padding: .5rem 1.4rem;
          border: 1px solid rgba(0, 166, 81, .3);
          border-radius: 50px;
          background: rgba(0, 166, 81, .06);
        }

        /* Heading */
        .eco-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 3.5vw, 3.6rem);
          font-weight: 600;
          line-height: 1.1;
          color: #111827;
          letter-spacing: -.01em;
          margin: 0 0 1rem;
        }
        .eco-heading .green { color: #00A651; }
        .eco-heading .leaf-icon {
          display: inline-block;
          width: .55em; height: .55em;
          vertical-align: middle;
          margin-left: .18em;
          transform: rotate(15deg) translateY(-.06em);
        }

        .eco-divider {
          width: 68px; height: 3px;
          background: linear-gradient(90deg, #F51521, #00A651);
          margin-bottom: 1.2rem;
          border-radius: 2px;
        }

        /* Description */
        .eco-desc {
          font-size: 1.05rem;
          line-height: 1.72;
          color: #4b5563;
          margin-bottom: 1.5rem;
          max-width: 480px;
        }

        /* ── FEATURE ROW ───────────────────────────────── */
        .eco-feats {
          display: flex;
          gap: 1.8rem;
        }

        .eco-feat {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .eco-feat-icon {
          width: 32px;
          height: 32px;
          color: #00A651;
          margin-bottom: 0.4rem;
        }

        .eco-feat-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #111827;
          white-space: pre-line;
          line-height: 1.3;
        }

        .eco-feat-desc {
          font-size: 0.8rem;
          color: #6b7280;
          line-height: 1.45;
          white-space: pre-line;
        }

        .eco-right {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          order: -1; /* Pull circle to the left column */
          margin-top: 3.5rem; /* Visually push the circle down a bit more */
          margin-left: -3rem; /* Push further to the left */
        }

        .eco-mosaic {
          position: relative;
          width: 100%;
          max-width: 520px;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
        }

        /* Outer circle container */
        .eco-circle {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          clip-path: circle(50% at 50% 50%);
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.04);
        }

        /* Each pie-slice segment */
        .eco-seg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          overflow: hidden;
          clip-path: var(--clip);
          transition: clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1), z-index 0s 0.8s;
          z-index: 1;
        }
        .eco-seg:hover {
          z-index: 7;
          clip-path: var(--hover-clip);
          transition: clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1), z-index 0s;
        }
        
        /* Hide dividers and logo when a segment is hovered */
        .eco-seg:hover ~ .eco-dividers {
          opacity: 0;
          pointer-events: none;
        }
        
        .eco-circle:has(.eco-seg:hover) ~ .eco-logo {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.9);
        }
        .eco-seg img {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .eco-seg:hover img {
          transform: scale(1.06);
        }

        /* Divider lines overlay */
        .eco-dividers {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 6;
          transition: opacity 0.5s ease;
        }

        /* Center logo circle */
        .eco-logo {
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
          margin: auto;
          width: 36%;
          height: 36%;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow:
            0 6px 30px rgba(0, 0, 0, 0.06),
            0 0 0 4px rgba(240, 240, 240, 0.8);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, width, height, opacity;
          backface-visibility: hidden;
        }
        .eco-logo:hover {
          width: 100%;
          height: 100%;
          box-shadow:
            0 10px 40px rgba(0, 0, 0, 0.1),
            0 0 0 4px rgba(0, 166, 81, 0.15);
        }
        .eco-logo img {
          width: 82%;
          height: 82%;
          max-width: 250px; /* Prevents image from becoming grotesquely huge */
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        /* ─── 5-STAGE PIPELINE ──────────────────────────── */
        .eco-pipeline {
          margin-top: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .eco-pipeline-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          align-items: stretch;
          position: relative;
        }

        /* Each stage card */
        .eco-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: 0 0.4rem;
        }

        .eco-stage-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.8rem 1rem 1.4rem;
          text-align: center;
          position: relative;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .eco-stage-card--red {
          border: 1.5px solid rgba(245, 21, 33, 0.15);
        }
        .eco-stage-card--green {
          border: 1.5px solid rgba(0, 166, 81, 0.15);
        }
        .eco-stage-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        /* Number badge */
        .eco-stage-num {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 800;
          color: #fff;
          z-index: 5;
          border: 3px solid #fff;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
        }
        .eco-stage-num--red { background: #F51521; }
        .eco-stage-num--green { background: #00A651; }

        /* Stage icon */
        .eco-stage-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.8rem;
          transition: transform 0.3s ease;
        }
        .eco-stage-icon--red {
          background: rgba(245, 21, 33, 0.06);
          border: 1.5px solid rgba(245, 21, 33, 0.15);
          color: #F51521;
        }
        .eco-stage-icon--green {
          background: rgba(0, 166, 81, 0.06);
          border: 1.5px solid rgba(0, 166, 81, 0.15);
          color: #00A651;
        }
        .eco-stage-card:hover .eco-stage-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .eco-stage-icon svg {
          width: 22px;
          height: 22px;
        }

        /* Stage title */
        .eco-stage-title {
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .eco-stage-title--red { color: #F51521; }
        .eco-stage-title--green { color: #00A651; }

        /* Stage image */
        .eco-stage-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 0.8rem;
          transition: transform 0.4s ease;
        }
        .eco-stage-card:hover .eco-stage-img {
          transform: scale(1.03);
        }

        /* Stage description */
        .eco-stage-desc {
          font-size: 0.88rem;
          color: #6b7280;
          line-height: 1.55;
          flex-grow: 1;
        }

        /* Arrow connector between cards */
        .eco-stage-arrow {
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 22px;
          height: 22px;
          background: #e8e8e8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 8;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .eco-stage:hover .eco-stage-arrow {
          background: #00A651;
          box-shadow: 0 4px 12px rgba(0, 166, 81, 0.25);
        }
        .eco-stage-arrow svg {
          width: 12px;
          height: 12px;
          color: #888;
          transition: color 0.3s ease;
        }
        .eco-stage:hover .eco-stage-arrow svg {
          color: #fff;
        }

        /* ─── RESPONSIVE ───────────────────────────────── */
        @media (max-width: 1100px) {
          .eco { padding: 3.5rem 3rem; }
          .eco-layout { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .eco-right { margin-left: -1rem; margin-top: 0; }
          .eco-feats { flex-wrap: wrap; gap: 1.2rem; }
          .eco-feat { flex: 0 0 calc(50% - 0.6rem); }
          .eco-pipeline-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem 1rem;
          }
          .eco-stage-arrow { display: none; }
        }

        @media (max-width: 900px) {
          .eco-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .eco-right {
            order: 0;
            margin-left: 0;
            margin-top: 0;
            justify-content: center;
          }
          .eco-left {
            padding-top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .eco-desc { text-align: center; }
          .eco-divider { transform-origin: center !important; }
          .eco-feat { align-items: center; text-align: center; }
          .eco-mosaic { max-width: 420px; margin: 0 auto; }
        }

        @media (max-width: 640px) {
          .eco { padding: 3rem 1.5rem; }
          .eco-feats { gap: 1rem; width: 100%; }
          .eco-feat { flex: 0 0 calc(50% - 0.5rem); }
          .eco-mosaic { max-width: 320px; }
          .eco-pipeline-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .eco { padding: 2.5rem 1rem; }
          .eco-feats { flex-direction: column; gap: 1.5rem; }
          .eco-feat { flex: 0 0 100%; }
          .eco-mosaic { max-width: 100%; }
          .eco-pipeline-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

            {/* Decorative leaf corner */}
            <img src="/sideImgOfeco.png" alt="" className="eco-decor-tr" />

            <div className="eco-layout">
                {/* ── LEFT: Text Content ── */}
                <motion.div
                    className="eco-left"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={0}
                >
                    {/* Eyebrow */}
                    <div className="eco-eyebrow">
                        <svg className="eco-eyebrow-leaf" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                        </svg>
                        <span>BUSINESS ECOSYSTEM</span>
                    </div>

                    {/* Heading */}
                    <motion.h2
                        className="eco-heading"
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={1}
                    >
                        From Research to<br />
                        <span className="green" style={{ whiteSpace: "nowrap" }}>
                            Green Infrastructure
                            <svg className="leaf-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.div
                        className="eco-divider"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: "left" }}
                    />

                    {/* Description */}
                    <motion.p
                        className="eco-desc"
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={2}
                    >
                        A-One Biotech follows a tightly integrated ecosystem
                        that ensures quality, consistency and sustainability
                        at every step — from research to real-world greening.
                    </motion.p>

                    {/* Feature row */}
                    <motion.div
                        className="eco-feats"
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={3}
                    >
                        {features.map((f, i) => (
                            <div className="eco-feat" key={i}>
                                <div className="eco-feat-icon">{f.icon}</div>
                                <div className="eco-feat-title">{f.title}</div>
                                <div className="eco-feat-desc">{f.desc}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── RIGHT: Circular Mosaic ── */}
                <motion.div
                    className="eco-right"
                    variants={scaleIn}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <div className="eco-mosaic">
                        <div className="eco-circle">
                            {/* 5 pie-slice image segments */}
                            {segments.map((seg, i) => (
                                <div
                                    key={i}
                                    className="eco-seg"
                                    style={{
                                        "--clip": seg.clip,
                                        "--hover-clip": seg.hoverClip
                                    }}
                                >
                                    <img src={seg.img} alt={seg.alt} />
                                </div>
                            ))}

                            {/* White divider lines radiating from center */}
                            <svg className="eco-dividers" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                                {/* D1: center → (41, 0) */}
                                <line x1="50" y1="50" x2="41" y2="0" stroke="#fff" strokeWidth="0.6" />
                                {/* D2: center → (100, 27) */}
                                <line x1="50" y1="50" x2="100" y2="27" stroke="#fff" strokeWidth="0.6" />
                                {/* D3: center → (85, 100) */}
                                <line x1="50" y1="50" x2="85" y2="100" stroke="#fff" strokeWidth="0.6" />
                                {/* D4: center → (8, 100) */}
                                <line x1="50" y1="50" x2="8" y2="100" stroke="#fff" strokeWidth="0.6" />
                                {/* D5: center → (0, 32) */}
                                <line x1="50" y1="50" x2="0" y2="32" stroke="#fff" strokeWidth="0.6" />
                            </svg>
                        </div>

                        {/* Center logo */}
                        <div className="eco-logo">
                            <img src="/Logos/LogoBiotech.jpg" alt="A-One Biotech" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── 5-STAGE PIPELINE ── */}
            <div className="eco-pipeline" ref={pipelineRef}>
                <div className="eco-pipeline-grid">
                    {stages.map((stage, index) => {
                        const isRed = stage.color === "red";
                        return (
                            <motion.div
                                className="eco-stage"
                                key={stage.id}
                                variants={cardPop}
                                initial="hidden"
                                animate={pipelineInView ? "visible" : "hidden"}
                                custom={index}
                            >
                                <div className={`eco-stage-card eco-stage-card--${stage.color}`}>
                                    {/* Number badge */}
                                    <div className={`eco-stage-num ${isRed ? "eco-stage-num--red" : "eco-stage-num--green"}`}>
                                        {stage.id}
                                    </div>

                                    {/* Icon */}
                                    <div className={`eco-stage-icon ${isRed ? "eco-stage-icon--red" : "eco-stage-icon--green"}`}>
                                        {stage.icon}
                                    </div>

                                    {/* Title */}
                                    <div className={`eco-stage-title ${isRed ? "eco-stage-title--red" : "eco-stage-title--green"}`}>
                                        {stage.title}
                                    </div>

                                    {/* Image */}
                                    <img src={stage.image} alt={stage.title} className="eco-stage-img" />

                                    {/* Description */}
                                    <p className="eco-stage-desc">{stage.desc}</p>
                                </div>

                                {/* Arrow connector */}
                                {index < stages.length - 1 && (
                                    <div className="eco-stage-arrow">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
