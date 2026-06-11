"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const features = [
    {
        num: "01",
        title: "HANDPICKED SPECIES",
        tag: "RARE",
        desc: "Each specimen is selected by leading botanists for exceptional aesthetic character, variegated leaf patterns, and architectural form.",
        meta: {
            origin: "Global Tropicals",
            growth: "Slow to Medium",
            rarity: "Collector Gold"
        }
    },
    {
        num: "02",
        title: "PREMIUM CULTIVATION",
        tag: "PURE",
        desc: "Grown in our state-of-the-art tissue culture laboratories, ensuring pathogen-free plants with optimized genetic health.",
        meta: {
            tech: "In-Vitro Culture",
            medium: "Sterile Agar",
            health: "Pathogen-Free"
        }
    },
    {
        num: "03",
        title: "BUILT TO THRIVE",
        tag: "GROW",
        desc: "Acclimatized under precise environment controls to adapt instantly to urban spaces, requiring minimal care and maintaining longevity.",
        meta: {
            acclim: "Multi-Stage",
            resil: "High Adaptive",
            care: "Low Maintenance"
        }
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Signature() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="signature" id="signature" ref={sectionRef}>
            <style>{`
                .signature {
                    position: relative;
                    width: 100%;
                    background: #F7F7F8;
                    font-family: 'Inter', sans-serif;
                    padding: 1rem 7rem 2rem 7rem;
                    overflow: hidden;
                }
                
                .sig-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0;
                    position: relative;
                    z-index: 2;
                }

                .sig-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3rem;
                    align-items: center;
                }

                /* Eyebrow and heading styled like other sections */
                .sig-eyebrow {
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

                .sig-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.4rem, 3.5vw, 3.6rem);
                    font-weight: 600;
                    line-height: 1.1;
                    color: #111827;
                    letter-spacing: -.01em;
                    margin: 0 0 1rem;
                }

                .sig-heading .green {
                    color: #00A651;
                }
                
                .sig-heading .leaf-inline {
                    display: inline-block;
                    width: 0.55em;
                    height: 0.55em;
                    vertical-align: middle;
                    margin-left: 0.18em;
                    transform: rotate(15deg) translateY(-0.06em);
                }

                .sig-divider {
                    width: 68px; height: 3px;
                    background: linear-gradient(90deg, #F51521, #00A651);
                    margin-bottom: 1.8rem;
                    border-radius: 2px;
                }

                .sig-lead-wrapper {
                    position: relative;
                    margin-bottom: 2rem;
                }

                .sig-lead {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: #4b5563;
                    max-width: 540px;
                }

                /* Floating stats */
                .sig-stats {
                    display: flex;
                    gap: 3rem;
                    margin-bottom: 2.5rem;
                }

                .sig-stat-card {
                    display: flex;
                    flex-direction: column;
                }

                .sig-stat-val {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #00A651;
                    line-height: 1.1;
                }

                .sig-stat-val span {
                    color: #F51521;
                }

                .sig-stat-lbl {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    color: #6b7280;
                    margin-top: 0.3rem;
                    text-transform: uppercase;
                }

                /* Explore Button */
                .sig-btn-wrapper {
                    display: inline-block;
                }

                .sig-btn-new {
                    display: inline-flex;
                    align-items: center;
                    gap: 1.2rem;
                    background: transparent;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    font-family: 'Inter', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    color: #111827;
                    transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    outline: none;
                }

                .btn-arrow-circle {
                    position: relative;
                    width: 52px;
                    height: 52px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .circle-svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transform: rotate(-90deg);
                }

                .circle-svg circle {
                    stroke-dasharray: 283;
                    stroke-dashoffset: 283;
                    transition: stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.4s;
                }

                .arrow-svg {
                    width: 18px;
                    height: 18px;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .sig-btn-new:hover {
                    color: #00A651;
                }

                .sig-btn-new:hover .btn-arrow-circle {
                    transform: scale(1.05);
                }

                .sig-btn-new:hover .circle-svg circle {
                    stroke-dashoffset: 0;
                }

                .sig-btn-new:hover .arrow-svg {
                    transform: translateX(4px);
                }

                /* Interactive list styling */
                .sig-list {
                    display: flex;
                    flex-direction: column;
                }

                .sig-list-item {
                    position: relative;
                    padding: 1.8rem 0 1.8rem 1.8rem;
                    border-bottom: 1px solid #E5E1D5;
                    cursor: pointer;
                    transition: border-color 0.4s, background-color 0.4s;
                }

                .sig-list-item:hover {
                    border-color: #00A651;
                }

                /* Vertical active indicator */
                .sig-list-indicator {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: #E5E1D5;
                }

                .sig-list-indicator-fill {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 0;
                    background: #00A651;
                    transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .sig-list-item.active .sig-list-indicator-fill {
                    height: 100%;
                }

                .sig-list-header {
                    display: flex;
                    align-items: center;
                    gap: 1.8rem;
                }

                .sig-list-num {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.35rem;
                    font-weight: 500;
                    color: #00A651;
                    opacity: 0.6;
                    transition: opacity 0.4s, transform 0.4s;
                }

                .sig-list-item.active .sig-list-num {
                    opacity: 1;
                    transform: scale(1.15);
                }

                .sig-list-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    color: #4b5563;
                    transition: color 0.4s, transform 0.4s;
                }

                .sig-list-item.active .sig-list-title {
                    color: #111827;
                    transform: translateX(8px);
                }

                .sig-list-desc {
                    overflow: hidden;
                    color: #4b5563;
                    font-size: 0.88rem;
                    line-height: 1.7;
                    padding-left: 3.2rem;
                    max-width: 440px;
                }

                .sig-meta-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    margin-top: 1.2rem;
                    padding-top: 1.2rem;
                    border-top: 1px dashed #E5E1D5;
                }

                .sig-meta-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }

                .sig-meta-label {
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    color: #8C9990;
                    text-transform: uppercase;
                }

                .sig-meta-value {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #111827;
                }

                /* Background Watermark and leaf SVG */
                .sig-watermark {
                    position: absolute;
                    bottom: 2%;
                    right: 4%;
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(8rem, 14vw, 15rem);
                    font-weight: 700;
                    color: #EAEAEB;
                }

                /* Responsive queries */
                @media (max-width: 1200px) {
                    .signature {
                        padding: 1rem 4rem 2rem 4rem;
                    }
                    .sig-grid {
                        gap: 2rem;
                    }
                }

                @media (max-width: 1024px) {
                    .sig-grid {
                        gap: 3rem;
                        grid-template-columns: 1fr;
                    }
                    .sig-lead-wrapper {
                        margin-bottom: 1.8rem;
                        max-width: 100%;
                    }
                    .sig-lead {
                        max-width: 100%;
                    }
                    .sig-stats {
                        margin-bottom: 2rem;
                    }
                }

                @media (max-width: 900px) {
                    .signature {
                        padding: 1rem 3rem 2rem 3rem;
                    }
                }

                @media (max-width: 768px) {
                    .signature {
                        padding: 1rem 1.5rem 2rem 1.5rem;
                    }
                    .sig-heading {
                        font-size: clamp(2rem, 8vw, 2.6rem);
                    }
                    .sig-lead-wrapper {
                        margin-bottom: 1.5rem;
                    }
                    .sig-stats {
                        gap: 2rem;
                        margin-bottom: 1.5rem;
                        flex-wrap: wrap;
                    }
                    .sig-stat-val {
                        font-size: 2rem;
                    }
                    .sig-list-item {
                        padding: 1.5rem 0 1.5rem 1.2rem;
                    }
                    .sig-list-desc {
                        padding-left: 0;
                        margin-top: 0.8rem;
                    }
                    .sig-meta-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .signature {
                        padding: 1rem 1rem 2rem 1rem;
                    }
                    .sig-stats {
                        flex-direction: column;
                        gap: 1.5rem;
                    }
                    .sig-heading {
                        font-size: clamp(1.8rem, 9vw, 2.2rem);
                    }
                }
            `}</style>

            <div className="sig-container">
                <div className="sig-grid">
                    {/* Left Column: Heading copy & CTA */}
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            className="sig-eyebrow"
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0}
                        >
                            <svg className="sig-eyebrow-leaf" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span>SIGNATURE COLLECTION</span>
                        </motion.div>

                        <motion.h2
                            className="sig-heading"
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={1}
                        >
                            Signature Living<br />
                            <span className="green">Starts Here</span>
                            <svg className="leaf-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                        </motion.h2>

                        <motion.div
                            className="sig-divider"
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: "left" }}
                        />

                        <div className="sig-lead-wrapper">
                            <motion.p
                                className="sig-lead"
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={2}
                            >
                                Elevate your space with our premium, tissue-cultured exotic plant species. Developed inside sterile labs to ensure optimized growth, pathogen immunity, and biophilic luxury.
                            </motion.p>
                        </div>

                        {/* Floating Biotech Counters */}
                        <div className="sig-stats">
                            <motion.div
                                className="sig-stat-card"
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={3}
                            >
                                <span className="sig-stat-val">99.8<span>%</span></span>
                                <span className="sig-stat-lbl">Lab Survival Rate</span>
                            </motion.div>

                            <motion.div
                                className="sig-stat-card"
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={4}
                            >
                                <span className="sig-stat-val">180<span>+</span></span>
                                <span className="sig-stat-lbl">Exotic Cultivars</span>
                            </motion.div>
                        </div>

                        <motion.div
                            className="sig-btn-wrapper"
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={5}
                        >
                            <button className="sig-btn-new">
                                <span className="btn-text">EXPLORE COLLECTION</span>
                                <span className="btn-arrow-circle">
                                    <svg viewBox="0 0 100 100" className="circle-svg">
                                        <circle cx="50" cy="50" r="45" stroke="#00A651" strokeWidth="1.5" fill="transparent" />
                                    </svg>
                                    <svg viewBox="0 0 24 24" className="arrow-svg" fill="none" stroke="#00A651" strokeWidth="1.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive feature accordion list */}
                    <div className="sig-list">
                        {features.map((feat, idx) => {
                            const isActive = activeFeature === idx;
                            return (
                                <div
                                    key={feat.num}
                                    className={`sig-list-item ${isActive ? "active" : ""}`}
                                    onMouseEnter={() => setActiveFeature(idx)}
                                    onClick={() => setActiveFeature(idx)}
                                >
                                    {/* Left active line indicator */}
                                    <div className="sig-list-indicator">
                                        <div className="sig-list-indicator-fill" />
                                    </div>

                                    <div className="sig-list-header">
                                        <span className="sig-list-num">{feat.num}</span>
                                        <span className="sig-list-title">{feat.title}</span>
                                    </div>
                                    <motion.div
                                        className="sig-list-desc"
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={isActive ? { height: "auto", opacity: 1, marginTop: 16 } : { height: 0, opacity: 0, marginTop: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <p>{feat.desc}</p>

                                        {/* Catalog Metadata details */}
                                        <div className="sig-meta-grid">
                                            {Object.entries(feat.meta).map(([key, val]) => (
                                                <div key={key} className="sig-meta-item">
                                                    <span className="sig-meta-label">{key}</span>
                                                    <span className="sig-meta-value">{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
