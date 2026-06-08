"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Signature() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section className="signature" ref={sectionRef}>
            <style>{`
                .signature {
                    background: #F7F5F0;
                    padding: 4rem 0;
                    font-family: 'Inter', sans-serif;
                    overflow: hidden;
                }
                
                /* Main centered wrapper */
                .sig-container {
                    max-width: 1350px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    flex-direction: column;
                }

                /* Card: Subtle rounded left, massive rounded right */
                .sig-card {
                    width: 100%;
                    height: 580px;
                    border-radius: 20px 350px 350px 20px;
                    position: relative;
                    display: flex;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
                    background: #F7F5F0;
                }
                
                /* Plant image fills the card as the base layer */
                .sig-plant-bg {
                    position: absolute;
                    inset: 0;
                    background: url('/exotic-plant.png') center/cover no-repeat;
                    z-index: 0;
                }
                
                /* Dark green overlay on the left with a single straight diagonal cut */
                .sig-dark-overlay {
                    position: absolute;
                    inset: 0;
                    background: #09120D;
                    /* Straight cut: from 36% at top to 55% at bottom */
                    clip-path: polygon(0 0, 36% 0, 55% 100%, 0 100%);
                    z-index: 1;
                }
                
                /* Golden line perfectly tracking the diagonal cut */
                .sig-line {
                    position: absolute;
                    inset: 0;
                    width: 100%; height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }
                
                /* Content area bounded to the left */
                .sig-content {
                    position: absolute;
                    top: 0; left: 0; bottom: 0;
                    width: 45%;
                    padding: 4rem 2rem 4rem 4rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 10;
                }
                
                /* Subtle leaf watermarks on dark background */
                .sig-leaf-bg {
                    position: absolute;
                    bottom: -30px;
                    left: -20px;
                    width: 380px;
                    opacity: 0.04;
                    pointer-events: none;
                }

                .sig-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    color: #C5A87B;
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.15em;
                    margin-bottom: 1.5rem;
                }
                
                .sig-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(3rem, 4.5vw, 5rem);
                    line-height: 1.05;
                    color: #FFFFFF;
                    margin-bottom: 1.8rem;
                    font-weight: 400;
                    position: relative;
                }
                .sig-heading .green {
                    color: #82A069;
                }
                
                /* Decorative leaf flourish next to 'Starts Here' */
                .sig-decor-branch {
                    position: absolute;
                    width: 40px; height: 40px;
                    bottom: 5px;
                    margin-left: 15px;
                    opacity: 0.9;
                }

                .sig-divider {
                    width: 35px;
                    height: 1px;
                    background: #C5A87B;
                    margin-bottom: 2rem;
                }
                
                .sig-desc {
                    color: #A3AFA8;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    max-width: 360px;
                    margin-bottom: 3rem;
                }
                
                .sig-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 1.2rem;
                    padding: 0.9rem 2.2rem;
                    border: 1px solid #C5A87B;
                    border-radius: 50px;
                    color: #C5A87B;
                    background: transparent;
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.12em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    align-self: flex-start;
                }
                .sig-btn:hover {
                    background: #C5A87B;
                    color: #09120D;
                }
                .sig-btn svg {
                    transition: transform 0.3s;
                }
                .sig-btn:hover svg {
                    transform: translateX(6px);
                }
                
                /* Circular Badge exactly centered on the slanted line at 60% height */
                /* line goes 36 to 55. at y=60%, x = 36 + (55-36)*0.6 = 47.4% */
                .sig-badge {
                    position: absolute;
                    top: 60%;
                    left: 47.4%;
                    transform: translate(-50%, -50%);
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    border: 1px solid #C5A87B;
                    background: #09120D;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 15;
                    text-align: center;
                }
                .sig-badge span {
                    color: #FFFFFF;
                    font-size: 0.55rem;
                    letter-spacing: 0.2em;
                    line-height: 1.8;
                    margin-top: 0.3rem;
                }
                .sig-badge-line {
                    width: 20px;
                    height: 1px;
                    background: #C5A87B;
                    margin-top: 0.8rem;
                }

                /* Features section placed BELOW card, shifted to the RIGHT half */
                .sig-features-wrapper {
                    width: 100%;
                    margin-top: 3.5rem;
                    display: flex;
                    justify-content: flex-end; /* Pushes features to the right */
                    padding-right: 4%;
                }
                
                .sig-features-container {
                    display: flex;
                    align-items: stretch;
                    gap: 3rem;
                }

                .sig-features-decor {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8rem;
                    padding-right: 1.5rem;
                }
                .sig-feat-vert-line {
                    width: 1px;
                    flex-grow: 1;
                    min-height: 30px;
                    background: #C5A87B;
                    opacity: 0.5;
                }

                .sig-feature-divider {
                    width: 1px;
                    background: #DCD6C8;
                    margin: 0.5rem 0;
                }

                .sig-feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.2rem;
                    max-width: 260px;
                }
                .sig-feature-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #EBE7DD;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    color: #3C4A40;
                }
                .sig-feature-text h4 {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #1A201A;
                    margin-bottom: 0.4rem;
                    letter-spacing: 0.05em;
                }
                .sig-feature-text p {
                    font-size: 0.75rem;
                    color: #6D7A71;
                    line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .sig-card { border-radius: 20px 200px 200px 20px; }
                    .sig-content { padding-left: 2rem; width: 55%; }
                    .sig-dark-overlay { clip-path: polygon(0 0, 45% 0, 65% 100%, 0 100%); }
                    .sig-line line { x1: 45; x2: 65; }
                    .sig-badge { left: 57%; }
                    .sig-features-wrapper { justify-content: center; padding-right: 0; }
                    .sig-feature-item { max-width: 220px; }
                }

                @media (max-width: 768px) {
                    .signature { padding: 3rem 0; }
                    .sig-card { border-radius: 20px; height: auto; min-height: 600px; }
                    .sig-dark-overlay { clip-path: none; opacity: 0.85; }
                    .sig-line { display: none; }
                    .sig-content { width: 100%; padding: 3rem 2rem; }
                    .sig-badge { display: none; }
                    .sig-features-wrapper { justify-content: flex-start; padding: 0 1rem; }
                    .sig-features-container { flex-direction: column; gap: 2rem; width: 100%; }
                    .sig-feature-divider { display: none; }
                    .sig-features-decor { display: none; }
                    .sig-feature-item { max-width: none; width: 100%; }
                }
            `}</style>

            <div className="sig-container">
                <motion.div 
                    className="sig-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* The Plant image base */}
                    <div className="sig-plant-bg" />

                    {/* Dark green overlay with the clean diagonal cut */}
                    <div className="sig-dark-overlay" />

                    {/* Golden line tracking the exact diagonal cut */}
                    <svg className="sig-line" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line x1="36" y1="0" x2="55" y2="100" stroke="#C5A87B" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* Circular Badge exactly centered on the slanted line */}
                    <motion.div 
                        className="sig-badge"
                        initial={{ scale: 0, opacity: 0, rotate: -20 }}
                        animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -20 }}
                        transition={{ delay: 0.6, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C5A87B" strokeWidth="1.2">
                            <path d="M8 16s1-4 4-5c2-1 4-1 4-1s-1 2-2 3c-1 1-3 2-4 3z" />
                            <path d="M12 22v-6" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        <span>RARE.<br/>EXOTIC.<br/>EXCEPTIONAL.</span>
                        <div className="sig-badge-line"></div>
                    </motion.div>

                    {/* Text Content Area */}
                    <div className="sig-content">
                        {/* Background leaf watermark */}
                        <svg className="sig-leaf-bg" viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="0.5">
                            <path d="M10,90 C10,40 50,10 90,10 C90,60 50,90 10,90 Z M10,90 C30,70 50,50 90,10" />
                        </svg>

                        <motion.div 
                            className="sig-eyebrow"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 16s1-4 4-5c2-1 4-1 4-1s-1 2-2 3c-1 1-3 2-4 3z" />
                                <path d="M12 22v-6" />
                            </svg>
                            EXOTIC PLANT COLLECTION
                        </motion.div>

                        <motion.h2 
                            className="sig-heading"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Signature<br/>
                            Living<br/>
                            <span className="green">Starts Here</span>
                            {/* Decorative golden flourish */}
                            <svg className="sig-decor-branch" viewBox="0 0 24 24" fill="none" stroke="#C5A87B" strokeWidth="1">
                                <path d="M3 21S7 14 12 12c2.5-1 5-1 9-2" />
                                <path d="M12 12s-1-4 3-6c2.5-1.5 6-1 6-1s-1 3.5-3 5c-1.5 1-4 2-6 2z" />
                                <path d="M8 16s0-3 2-4c1.5-1 4-1 4-1s-1 2.5-2 3c-1 1-3 2-4 2z" />
                            </svg>
                        </motion.h2>

                        <motion.div 
                            className="sig-divider"
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            style={{ transformOrigin: "left" }}
                        />

                        <motion.p 
                            className="sig-desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Discover a curated collection of rare and exotic plant species. Handpicked for their beauty, uniqueness and timeless appeal.
                        </motion.p>

                        <motion.button 
                            className="sig-btn"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            EXPLORE COLLECTION
                            <svg viewBox="0 0 40 24" width="30" height="18" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M0 12h38M32 6l6 6-6 6" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Bottom Features Row - Shifted to the RIGHT to match original layout */}
                <motion.div 
                    className="sig-features-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <div className="sig-features-container">
                        <div className="sig-features-decor">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C5A87B" strokeWidth="1.2">
                                <path d="M8 16s1-4 4-5c2-1 4-1 4-1s-1 2-2 3c-1 1-3 2-4 3z" />
                                <path d="M12 22v-6" />
                            </svg>
                            <div className="sig-feat-vert-line"></div>
                        </div>

                        <div className="sig-feature-item">
                            <div className="sig-feature-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <div className="sig-feature-text">
                                <h4>HANDPICKED</h4>
                                <p>Carefully selected exotic species from around the world.</p>
                            </div>
                        </div>

                        <div className="sig-feature-divider"></div>

                        <div className="sig-feature-item">
                            <div className="sig-feature-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22v-9" />
                                    <path d="M8 22h8" />
                                    <path d="M12 13C12 13 7 9 7 5C7 3 9 2 12 2C15 2 17 3 17 5C17 9 12 13 12 13Z" />
                                </svg>
                            </div>
                            <div className="sig-feature-text">
                                <h4>PREMIUM QUALITY</h4>
                                <p>Grown with precision and care to ensure exceptional quality.</p>
                            </div>
                        </div>

                        <div className="sig-feature-divider"></div>

                        <div className="sig-feature-item">
                            <div className="sig-feature-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                    <path d="M12 22V12" />
                                </svg>
                            </div>
                            <div className="sig-feature-text">
                                <h4>BUILT TO THRIVE</h4>
                                <p>Adapted and nurtured for best survivability in any space.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
