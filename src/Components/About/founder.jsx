"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Founder = () => {
    return (
        <section className="w-full overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* ═══════════════════════════════════════════════════════ */}
            {/*  FOUNDER SECTION                                      */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div className="w-full bg-[#F7F7F8] overflow-hidden">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-stretch overflow-hidden">

                    {/* ── LEFT: Founder Photo ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[48%] relative overflow-hidden"
                    >
                        {/* Decorative leaf background (top-right corner) */}
                        <img
                            src="/About/founder_leaf_decor.png"
                            alt=""
                            className="absolute top-0 right-0 w-[140px] sm:w-[200px] lg:w-[320px] opacity-30 pointer-events-none z-0"
                        />
                        {/* Founder Photo */}
                        <div className="relative z-10 h-full">
                            <img
                                src="/About/Founder/FounderImgD_Jadhav.png"
                                alt="Mr. Dilip Jadhav – Founder & Managing Director of A-One Biotech"
                                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[480px] lg:max-h-[700px] object-cover object-top"
                            />
                            {/* Subtle gradient overlay at bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-[100px] lg:h-[120px] bg-gradient-to-t from-[#F7F7F8] to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Founder Bio ── */}
                    <div
                        className="w-full lg:w-[52%] flex flex-col justify-center px-6 pt-8 pb-4 sm:px-10 sm:pt-10 sm:pb-8 md:px-14 lg:px-16 lg:py-16 xl:px-20 overflow-hidden"
                    >
                        {/* Eyebrow / Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-4 sm:px-5 py-1.5 sm:py-2 border border-[#00A651]/30 rounded-full bg-[#00A651]/5 w-fit"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span className="text-[#00A651] font-semibold text-[0.85rem] tracking-[0.14em] uppercase">Meet Our Founder</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h2
                            initial={{ opacity: 0, x: 45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="font-['Playfair_Display'] text-[clamp(1.8rem,5vw,3.6rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em] mb-1 sm:mb-2"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            DILIP JADHAV
                        </motion.h2>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, x: 45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            className="text-[#2D5016] font-semibold text-[0.78rem] sm:text-[0.85rem] tracking-[0.18em] uppercase mb-4 sm:mb-6"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Founder & Managing Director
                        </motion.p>

                        {/* Bio Paragraphs */}
                        <div className="space-y-4 sm:space-y-5 text-[14px] sm:text-[14.5px] text-[#444] leading-[1.75]">
                            <motion.p
                                initial={{ opacity: 0, x: 45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                With a vision to transform the future of plant propagation in India, <strong className="text-[#111]">Mr. Dilip Jadhav</strong> founded <strong className="text-[#111]">A-One Biotech</strong> in <strong className="text-[#111]">2003</strong> with a commitment to scientific innovation, sustainable cultivation, and agricultural advancement.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: 45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            >
                                What began as a focused initiative in plant tissue culture has grown into one of the region's leading biotechnology and nursery enterprises. Under his leadership, A-One Biotech has continuously invested in research, infrastructure, and modern cultivation technologies to deliver high-quality, disease-free planting material for agriculture, horticulture, landscaping, and green infrastructure projects.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: 45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            >
                                Driven by a passion for nature and innovation, Mr. Jadhav has built an integrated ecosystem that bridges laboratory excellence with large-scale commercial cultivation. His dedication to quality, consistency, and environmental responsibility continues to shape the company's growth and long-term vision.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: 45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                            >
                                Today, his leadership inspires a team committed to advancing biotechnology while creating greener landscapes and sustainable agricultural solutions for future generations.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  VISION & MISSION SECTION                             */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div className="w-full flex flex-col lg:flex-row overflow-hidden">

                {/* ── LEFT: Our Mission ── */}
                <div className="w-full lg:w-1/2 bg-[#F7F7F8] relative overflow-hidden flex flex-col justify-center">
                    <div
                        className="relative z-10 px-6 pt-4 pb-12 sm:px-10 sm:pt-6 sm:pb-14 md:px-14 lg:px-16 xl:px-24 lg:pt-14 lg:pb-20 flex flex-col h-full justify-center"
                    >

                        {/* Mission Heading Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col mb-6 sm:mb-8"
                        >
                            <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-5">
                                <h3 className="font-['Playfair_Display'] text-[clamp(1.8rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em]">
                                    Our <span className="text-[#00A651]">Mission
                                        <svg className="inline-block w-[0.6em] h-[0.6em] ml-1 sm:ml-2 -translate-y-[0.05em] rotate-[15deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                                        </svg>
                                    </span>
                                </h3>

                                {/* Target icon (animated) */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 0.7, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="shrink-0 w-[45px] sm:w-[65px] lg:w-[75px]"
                                >
                                    <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" className="overflow-visible">
                                        <circle cx="28" cy="28" r="24" stroke="#2D5016" strokeWidth="1.5" fill="none" />
                                        <circle cx="28" cy="28" r="16" stroke="#2D5016" strokeWidth="1.5" fill="none" />
                                        <circle cx="28" cy="28" r="8" stroke="#2D5016" strokeWidth="1.5" fill="none" />
                                        <circle cx="28" cy="28" r="3" fill="#2D5016" />
                                        
                                        {/* Animated Arrow hitting the center */}
                                        <motion.g
                                            initial={{ x: 40, y: -40, opacity: 0 }}
                                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 0.4, 
                                                type: "spring", 
                                                stiffness: 220, 
                                                damping: 14 
                                            }}
                                        >
                                            <line x1="46" y1="10" x2="28" y2="28" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                                            <polyline points="28,20 28,28 36,28" stroke="#c0392b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                                            <line x1="42" y1="10" x2="46" y2="14" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                                            <line x1="39" y1="13" x2="43" y2="17" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                                        </motion.g>
                                    </svg>
                                </motion.div>
                            </div>
                            <div className="w-[40px] sm:w-[60px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm mb-2 sm:mb-4"></div>
                        </motion.div>

                        {/* Mission Items */}
                        <div className="space-y-4 sm:space-y-5">
                            {[
                                "Deliver genetically superior, disease-free, and high-performance planting material through advanced tissue culture technologies.",
                                "Promote sustainable cultivation practices that support environmental responsibility and long-term ecological balance.",
                                "Continuously invest in research, innovation, and infrastructure to improve plant quality and production efficiency.",
                                "Empower farmers, industries, institutions, and green infrastructure projects with reliable and scalable plant solutions.",
                                "Create lasting value through scientific excellence, integrity, and customer-centric partnerships."
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.08 }}
                                    className="flex items-start gap-3 sm:gap-4"
                                >
                                    <div className="shrink-0 mt-0.5">
                                        <CheckCircle2
                                            size={22}
                                            className="text-[#2D5016]"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <p className="text-[13px] sm:text-[14.5px] text-[#333] leading-[1.6]">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Our Vision ── */}
                <div className="w-full lg:w-1/2 bg-[#111827] text-white relative overflow-hidden flex flex-col justify-center">
                    {/* Background Image */}
                    <img 
                        src="/About/Founder/V_M_Img.png" 
                        alt="Vision Background" 
                        className="absolute inset-0 w-full h-full object-cover object-right z-0"
                    />
                    {/* Gradient overlay for perfect text readability while showing the image on the right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-0"></div>

                    <div
                        className="relative z-10 px-6 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-14 md:px-14 lg:px-16 xl:px-24 lg:pt-14 lg:pb-20 flex flex-col h-full justify-center"
                    >

                        {/* Vision Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col mb-6 sm:mb-8"
                        >
                            <h3 className="font-['Playfair_Display'] text-[clamp(1.8rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-white tracking-[-0.01em] mb-3 sm:mb-5">
                                Our <span className="text-[#00A651] drop-shadow-md">Vision
                                    <svg className="inline-block w-[0.6em] h-[0.6em] ml-1 sm:ml-2 -translate-y-[0.05em] rotate-[15deg] drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                                    </svg>
                                </span>
                            </h3>
                            <div className="w-[40px] sm:w-[60px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm mb-2 sm:mb-4"></div>
                        </motion.div>

                        {/* Vision Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[14px] sm:text-[15px] leading-[1.85] text-white/90 max-w-[380px]"
                        >
                            To become a globally recognized biotechnology and horticulture enterprise, pioneering innovative plant propagation technologies that contribute to sustainable agriculture, environmental conservation, and a greener future.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
