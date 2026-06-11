"use client";
import React from 'react';
import { ArrowRight, Leaf, Sprout, Trees, PencilRuler, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DotGrid = () => (
    <div className="grid grid-cols-5 gap-2 md:gap-3 opacity-40">
        {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#608c54]"></div>
        ))}
    </div>
);

const LeavesBg = () => (
    <svg viewBox="0 0 300 300" className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] text-[#608c54] opacity-15" fill="none" stroke="currentColor" strokeWidth="0.75">
        <path d="M300 300 C 200 300, 100 200, 50 100 C 100 100, 200 150, 300 300 Z" />
        <path d="M300 300 C 280 200, 250 100, 200 50 C 220 100, 250 150, 300 300 Z" />
        <path d="M300 300 C 200 220, 150 160, 50 100" />
        <path d="M220 230 C 180 210, 150 150, 120 120" />
        <path d="M260 260 C 200 260, 150 200, 100 150" />
        <path d="M300 300 C 280 220, 250 160, 200 50" />
        <path d="M280 260 C 250 210, 220 150, 180 100" />
    </svg>
);

const ServiceItem = ({ title, icon }) => (
    <div className="flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-gray-300 shadow-sm bg-white hover:border-[#00A651] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer w-full">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00A651]/10 flex items-center justify-center text-[#00A651] group-hover:bg-[#00A651] group-hover:text-white transition-colors duration-300 flex-shrink-0">
            {React.cloneElement(icon, { className: "w-6 h-6 md:w-7 md:h-7 transition-colors duration-300" })}
        </div>
        <span className="text-sm md:text-base font-bold text-gray-900 tracking-wide leading-snug whitespace-pre-line group-hover:text-[#00A651] transition-colors duration-300 text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
            {title}
        </span>
    </div>
);

const LogoTree = ({ className }) => (
    <svg viewBox="0 0 120 120" className={className}>
        <path d="M60 90 Q55 70 40 60 Q50 65 58 75 Q60 50 50 35 Q60 55 62 75 Q70 65 80 60 Q65 70 60 90 Z" fill="#1a2b25" />
        <path d="M25 95 Q60 85 95 95 Q60 90 25 95 Z" fill="#608c54" />
        <g fill="#608c54">
            <circle cx="60" cy="15" r="4" />
            <circle cx="60" cy="28" r="5" fill="#1a2b25" />
            <path d="M60 22 Q65 15 60 10 Q55 15 60 22 Z" />
            <circle cx="42" cy="22" r="3" />
            <circle cx="32" cy="35" r="3.5" />
            <circle cx="25" cy="50" r="3" />
            <circle cx="48" cy="40" r="4" fill="#1a2b25" />
            <path d="M48 25 Q50 15 42 15 Q42 25 48 25 Z" transform="rotate(-30 45 20)" />
            <path d="M38 38 Q40 28 32 28 Q32 38 38 38 Z" transform="rotate(-45 35 33)" />
            <circle cx="78" cy="22" r="3" />
            <circle cx="88" cy="35" r="3.5" />
            <circle cx="95" cy="50" r="3" />
            <circle cx="72" cy="40" r="4" fill="#1a2b25" />
            <path d="M72 25 Q70 15 78 15 Q78 25 72 25 Z" transform="rotate(30 75 20)" />
            <path d="M82 38 Q80 28 88 28 Q88 38 82 38 Z" transform="rotate(45 85 33)" />
            <path d="M50 15 Q52 10 45 8 Q45 15 50 15 Z" />
            <path d="M70 15 Q68 10 75 8 Q75 15 70 15 Z" />
            <path d="M30 22 Q35 15 25 12 Q25 20 30 22 Z" />
            <path d="M90 22 Q85 15 95 12 Q95 20 90 22 Z" />
            <path d="M18 40 Q25 35 15 32 Q15 40 18 40 Z" />
            <path d="M102 40 Q95 35 105 32 Q105 40 102 40 Z" />
            <path d="M20 60 Q28 55 18 52 Q18 60 20 60 Z" />
            <path d="M100 60 Q92 55 102 52 Q102 60 100 60 Z" />
        </g>
    </svg>
);

const CoronaSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#F7F7F8] pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 font-sans">

            {/* Top Right Dots */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
                className="absolute top-16 right-12 lg:right-[10%] hidden md:block"
            >
                <DotGrid />
            </motion.div>

            {/* Main Container */}
            <div className="w-full max-w-[1250px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative z-10">

                {/* Left Content (Image/Shape Component) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[640px] flex items-center justify-center"
                >

                    {/* Custom Shape Background - Flipped to point right */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                        <svg viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md scale-x-[-1]" preserveAspectRatio="none">
                            <motion.path
                                initial={{ pathLength: 0, fillOpacity: 0 }}
                                whileInView={{ pathLength: 1, fillOpacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                d="M140 20 H560 Q590 20 590 50 V650 Q590 680 560 680 H140 Q110 680 90 650 L10 370 Q0 350 10 330 L90 50 Q110 20 140 20 Z"
                                fill="#f8fbf8"
                                stroke="#608c54"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </div>

                    {/* Dots top left of the shape */}
                    <div className="absolute top-12 left-10 z-0 hidden md:block">
                        <DotGrid />
                    </div>

                    {/* Leaves overlay - bottom left */}
                    <div className="absolute bottom-2 left-2 z-0 pointer-events-none overflow-hidden rounded-bl-3xl scale-x-[-1]">
                        <LeavesBg />
                    </div>

                    {/* Inner Content Positioned Properly Inside Shape */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center px-6 py-8 md:px-12 md:mr-8 w-full max-w-[420px]"
                    >
                        <LogoTree className="w-32 h-32 md:w-44 md:h-44 mb-4 md:mb-6 drop-shadow-sm" />
                        <h2 className="text-4xl md:text-[52px] font-serif text-[#1a2b25] leading-none" style={{ fontFamily: "'Playfair Display', ui-serif, Georgia, serif", marginBottom: '0.2rem' }}>CORONA</h2>
                        <h3 className="text-2xl md:text-[34px] font-serif text-[#608c54] tracking-[0.22em] leading-none" style={{ fontFamily: "'Playfair Display', ui-serif, Georgia, serif", marginBottom: '1.2rem' }}>GREENS</h3>

                        <p className="text-[#4a5550] text-[15px] md:text-[17px] font-medium leading-relaxed" style={{ marginBottom: '1.8rem' }}>
                            Building greener tomorrows<br />with <span className="text-[#608c54] font-bold">innovation and care.</span>
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group cursor-pointer inline-block"
                        >
                            <div className="absolute inset-0 rounded-full border border-[#00A651] translate-y-1 translate-x-1 group-hover:translate-y-1.5 group-hover:translate-x-1.5 transition-transform duration-300"></div>
                            <button className="relative flex items-center justify-center gap-3 bg-[#132a1e] group-hover:bg-[#1a3828] transition-colors text-white px-6 py-0 rounded-full font-bold tracking-widest text-[12px] md:text-[13px] w-full sm:w-auto min-w-[240px] md:min-w-[260px] h-[50px] md:h-[56px] shadow-sm uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                                EXPLORE CORONA GREENS
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Dots bottom right of the shape */}
                    <div className="absolute bottom-4 -right-4 z-20 hidden md:block opacity-50">
                        <DotGrid />
                    </div>
                </motion.div>

                {/* Right Content (Text Area) */}
                <div className="w-full lg:w-1/2 flex flex-col items-start pt-1 lg:pt-0 pl-0 lg:pl-4 relative">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Eyebrow */}
                        <div style={{
                            fontSize: '.85rem',
                            fontWeight: 600,
                            letterSpacing: '.14em',
                            textTransform: 'uppercase',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '.6rem',
                            marginBottom: '0.8rem',
                            color: '#00A651',
                            padding: '.5rem 1.4rem',
                            border: '1px solid rgba(0, 166, 81, .3)',
                            borderRadius: '50px',
                            background: 'rgba(0, 166, 81, .06)',
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            ASSOCIATE COMPANY
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            color: '#111827',
                            letterSpacing: '-.01em',
                            margin: '0 0 1rem',
                        }}
                    >
                        Corona{" "}
                        <span style={{ color: '#00A651', display: 'inline-block' }}>
                            Greens
                            <svg style={{ display: 'inline-block', width: '.55em', height: '.55em', verticalAlign: 'middle', marginLeft: '.18em', transform: 'rotate(15deg) translateY(-.06em)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        style={{
                            width: '68px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #F51521, #00A651)',
                            marginBottom: '1.2rem',
                            borderRadius: '2px',
                            transformOrigin: 'left'
                        }}
                    />

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            color: '#111827',
                            letterSpacing: '.04em',
                            marginBottom: '1.2rem',
                        }}
                    >
                        TRANSFORMING SPACES.<br />
                        <span style={{ color: '#00A651' }}>ENRICHING LIVES.</span>
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1.05rem',
                            lineHeight: 1.72,
                            color: '#4b5563',
                            marginBottom: '1.5rem',
                            maxWidth: '480px'
                        }}
                    >
                        From vertical gardens and landscaping to urban green infrastructure, we create sustainable environments that inspire and enhance every space. Our expert team blends aesthetic vision with ecological responsibility to craft spaces that thrive naturally. By integrating advanced sustainable practices, we aim to reduce environmental footprints while maximizing beauty and functionality.
                    </motion.p>

                    {/* Icons Grid Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="w-full max-w-[600px] mt-2"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {[
                                { title: "VERTICAL GARDENS", icon: <Sprout /> },
                                { title: "LANDSCAPING", icon: <Trees /> },
                                { title: "LANDSCAPE DESIGN", icon: <PencilRuler /> },
                                { title: "URBAN LANDSCAPES", icon: <Building2 /> }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                                >
                                    <ServiceItem title={item.title} icon={item.icon} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default CoronaSection;