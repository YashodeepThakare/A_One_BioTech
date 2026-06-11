"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5e4bf?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596547609652-9fc5d8d42e91?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585320806016-11f421e3f898?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466692476877-396414cefc0d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1416879598555-220b8f322306?q=80&w=800&auto=format&fit=crop",
];

const colors = ['#0f766e', '#14b8a6', '#042f2e', '#064e3b', '#34d399', '#ffffff'];

const titles = [
    "Advanced Tissue Culture", "Exotic Collection", "Mass Propagation",
    "Signature Series", "Specialty Cultivation", "Greenhouse Tech"
];

const descriptions = [
    "State-of-the-art facilities for sterile mass propagation and genetic preservation.",
    "Curated selection of rare and exotic plants from around the globe.",
    "Scaling green infrastructure through sustainable and efficient nursery practices.",
    "Our signature line of premium, disease-free ornamental plants.",
    "Expert cultivation techniques yielding award-winning orchid varieties.",
    "Modern climate-controlled environments for optimal plant growth."
];

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        // Round to 4 decimal places to prevent Next.js SSR vs Client hydration mismatches
        x: Number((centerX + (radius * Math.cos(angleInRadians))).toFixed(4)),
        y: Number((centerY + (radius * Math.sin(angleInRadians))).toFixed(4))
    };
};

const describeArc = (x, y, innerRadius, outerRadius, startAngle, endAngle) => {
    const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
        "M", startOuter.x, startOuter.y,
        "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
        "L", endInner.x, endInner.y,
        "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
        "Z"
    ].join(" ");
};

// Refined sizing and gaps for a lighter, more precise look
const ringsConfig = [
    { ring: 1, count: 6, innerR: 170, outerR: 240, gap: 6 },
    { ring: 2, count: 12, innerR: 255, outerR: 350, gap: 5 },
    { ring: 3, count: 18, innerR: 365, outerR: 490, gap: 4 },
];

const galleryData = {};
const featuredIds = [];

ringsConfig.forEach((config, ringIdx) => {
    for (let i = 0; i < config.count; i++) {
        const id = `${config.ring}-${i}`;
        const val = (ringIdx * 11 + i * 7) % 5;
        const isImage = val !== 0;

        const imageSrc = images[(ringIdx * 4 + i * 7) % images.length];
        const color = colors[(ringIdx * 13 + i * 19) % colors.length];

        const title = titles[(ringIdx * 3 + i) % titles.length];
        const desc = descriptions[(ringIdx * 2 + i) % descriptions.length];

        galleryData[id] = { id, isImage, imageSrc, color, title, desc, ringIdx, itemIdx: i };

        if (isImage && i % 3 === 0 && featuredIds.length < 8) {
            featuredIds.push(id);
        }
    }
});
if (featuredIds.length === 0) featuredIds.push("1-0");

// Custom hook for responsive breakpoints
function useBreakpoint() {
    const [bp, setBp] = useState('lg');
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setBp('sm');
            else if (w < 1024) setBp('md');
            else setBp('lg');
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return bp;
}

export default function Gallery() {
    const [activeItemId, setActiveItemId] = useState(featuredIds[0]);
    const [isHovering, setIsHovering] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [imageError, setImageError] = useState(false);
    const bp = useBreakpoint();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setImageError(false);
    }, [activeItemId]);

    useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(() => {
            setActiveItemId(prev => {
                let currentIndex = featuredIds.indexOf(prev);
                if (currentIndex === -1) currentIndex = 0;
                const nextIndex = (currentIndex + 1) % featuredIds.length;
                return featuredIds[nextIndex];
            });
        }, 7000); // Slower, more elegant rotation
        return () => clearInterval(interval);
    }, [isHovering]);

    const activeItem = galleryData[activeItemId] || galleryData[featuredIds[0]];

    const renderRing = (config, index) => {
        const anglePerItem = 360 / config.count;

        return (
            <g key={`ring-${config.ring}`}>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 500 500"
                    to={`${index % 2 === 0 ? 360 : -360} 500 500`}
                    dur={`${180 + index * 40}s`}
                    repeatCount="indefinite"
                />
                {Array.from({ length: config.count }).map((_, i) => {
                    const startAngle = i * anglePerItem + config.gap / 2;
                    const endAngle = (i + 1) * anglePerItem - config.gap / 2;
                    const pathD = describeArc(500, 500, config.innerR, config.outerR, startAngle, endAngle);

                    const itemId = `${config.ring}-${i}`;
                    const itemData = galleryData[itemId];

                    const midAngle = (startAngle + endAngle) / 2;
                    const midRadius = (config.innerR + config.outerR) / 2;
                    const center = polarToCartesian(500, 500, midRadius, midAngle);

                    const sectorWidth = config.outerR - config.innerR;
                    const sectorArcLength = midRadius * ((endAngle - startAngle) * Math.PI / 180);
                    const imgSize = Math.max(sectorWidth, sectorArcLength) * 1.5;
                    const imgX = center.x - imgSize / 2;
                    const imgY = center.y - imgSize / 2;

                    const isActive = activeItemId === itemId;

                    return (
                        <g
                            key={itemId}
                            onMouseEnter={() => {
                                setActiveItemId(itemId);
                                setIsHovering(true);
                            }}
                            onMouseLeave={() => setIsHovering(false)}
                            // Smooth pop-out scale transform when active
                            style={{
                                cursor: 'pointer',
                                transformOrigin: "center",
                                transformBox: "fill-box",
                                transform: isActive ? 'scale(1.04)' : 'scale(1)',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            <clipPath id={`clip-${itemId}`}>
                                <path d={pathD} />
                            </clipPath>

                            {itemData.isImage ? (
                                <g clipPath={`url(#clip-${itemId})`}>
                                    {mounted && (
                                        <image
                                            href={itemData.imageSrc}
                                            x={imgX}
                                            y={imgY}
                                            width={imgSize}
                                            height={imgSize}
                                            preserveAspectRatio="xMidYMid slice"
                                        />
                                    )}
                                    {/* Overlay shadow for depth */}
                                    <path
                                        d={pathD}
                                        fill="#000000"
                                        fillOpacity={isActive ? 0 : 0.25}
                                        style={{ transition: 'fill-opacity 0.4s ease' }}
                                    />
                                    {/* Subtle border highlight on active */}
                                    <path
                                        d={pathD}
                                        fill="none"
                                        stroke="#34d399"
                                        strokeWidth={isActive ? 3 : 0}
                                        style={{ transition: 'stroke-width 0.3s ease' }}
                                    />
                                </g>
                            ) : (
                                <path
                                    d={pathD}
                                    fill={itemData.color}
                                    stroke={isActive ? "#10b981" : "none"}
                                    strokeWidth={isActive ? 4 : 0}
                                    style={{ transition: 'all 0.4s ease' }}
                                />
                            )}
                        </g>
                    );
                })}
            </g>
        );
    };

    // Responsive values
    const circleMaxW = bp === 'sm' ? '320px' : bp === 'md' ? '420px' : '520px';
    const cardHeight = bp === 'sm' ? '320px' : bp === 'md' ? '400px' : '460px';
    const sectionPadY = bp === 'sm' ? '36px' : '60px';
    const headingMb = bp === 'sm' ? '24px' : '40px';
    const cardPadding = bp === 'sm' ? '20px' : bp === 'md' ? '28px' : '40px';
    const cardRadius = bp === 'sm' ? '18px' : '28px';

    return (
        <section className="relative w-full bg-[#F7F7F8] overflow-hidden flex flex-col items-center -mt-[2px] z-10" id="gallery"
            style={{ paddingTop: sectionPadY, paddingBottom: sectionPadY, paddingLeft: bp === 'sm' ? '12px' : bp === 'md' ? '24px' : '40px', paddingRight: bp === 'sm' ? '12px' : bp === 'md' ? '24px' : '40px' }}
        >
            {/* Background Soft Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(16,185,129,0.06)_0%,transparent_55%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(20,184,166,0.05)_0%,transparent_45%)]"></div>
                <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#F7F7F8] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#F7F7F8] to-transparent"></div>
            </div>

            {/* 1. Heading Block */}
            <div className="relative z-20 w-full max-w-[850px] text-center flex flex-col items-center" style={{ marginBottom: headingMb }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <style>{`
              .gallery-eyebrow {
                font-size: 0.8rem;
                font-weight: 600;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                color: #00A651;
                padding: 0.4rem 1.5rem;
                border: 1px solid rgba(0, 166, 81, 0.3);
                border-radius: 50px;
                background: rgba(0, 166, 81, 0.06);
              }
              @media (max-width: 639px) {
                .gallery-eyebrow {
                  font-size: 0.7rem;
                  padding: 0.3rem 1rem;
                }
              }
            `}</style>
                    <div className="flex justify-center" style={{ marginBottom: bp === 'sm' ? '14px' : '20px' }}>
                        <div className="gallery-eyebrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span style={{ marginRight: '-0.15em' }}>GALLERY</span>
                        </div>
                    </div>
                    <h2 className="font-['Playfair_Display',serif] font-semibold text-[#111827]"
                        style={{ fontSize: bp === 'sm' ? '32px' : 'clamp(48px, 4vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '16px', maxWidth: '700px' }}
                    >
                        Visual <span className="text-[#00A651]">Showcase</span>
                        <svg className="inline-block w-[0.35em] h-[0.35em] align-middle ml-[0.15em]" style={{ transform: 'rotate(15deg) translateY(-0.06em)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                        </svg>
                    </h2>
                    <div className="flex justify-center" style={{ marginBottom: '16px' }}>
                        <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-[2px]" />
                    </div>
                    <p className="text-center text-[#4b5563]"
                        style={{ fontSize: bp === 'sm' ? '15px' : '18px', lineHeight: 1.7, maxWidth: '800px' }}
                    >
                        Explore our journey through innovation, biotechnology, premium plant collections,{bp !== 'sm' && <br />} modern infrastructure, and sustainable cultivation excellence.
                    </p>
                </motion.div>
            </div>

            {/* 2. Main Gallery Content */}
            <div className="relative z-10 w-full max-w-[1250px] items-center"
                style={{
                    display: 'grid',
                    gridTemplateColumns: bp === 'lg' ? '4.5fr 5.5fr' : '1fr',
                    gap: bp === 'sm' ? '28px' : bp === 'md' ? '36px' : '60px',
                }}
            >
                {/* Left: Rotating Circle */}
                <div className="w-full flex items-center justify-center">
                    <div className="w-full aspect-square relative group" style={{ maxWidth: circleMaxW }}>
                        <svg viewBox="0 0 1000 1000" className="w-full h-full overflow-visible">
                            {/* Concentric Rotating Rings */}
                            {ringsConfig.map((config, idx) => renderRing(config, idx))}

                            {/* Rotating dashed ring */}
                            <circle cx="500" cy="500" r="164" fill="none" stroke="rgba(110,231,183,0.6)" strokeWidth="1.5" strokeDasharray="10 10" className="opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <animateTransform attributeName="transform" type="rotate" from="0 500 500" to="360 500 500" dur="30s" repeatCount="indefinite" />
                            </circle>

                        </svg>

                        {/* Center Logo — uses real company logo */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                            <div className="w-[30%] aspect-square flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-full shadow-[0_0_50px_rgba(16,185,129,0.2)] border border-emerald-50 transform transition-transform duration-700 group-hover:scale-105 pointer-events-auto overflow-hidden">
                                <img
                                    src="/Logos/LogoBiotech.jpg"
                                    alt="A-One Biotech Logo"
                                    className="w-[85%] h-[85%] object-contain"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Featured Image Showcase */}
                <div className="w-full flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItemId}
                            initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
                            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                            exit={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <div className="relative w-full overflow-hidden group border border-black/5 bg-neutral-900"
                                style={{
                                    height: cardHeight,
                                    borderRadius: cardRadius,
                                    boxShadow: '0 25px 60px -12px rgba(0,0,0,0.15), 0 0 30px rgba(16,185,129,0.08), 0 4px 6px -2px rgba(0,0,0,0.05)'
                                }}
                            >
                                {activeItem.isImage && !imageError ? (
                                    <img
                                        src={activeItem.imageSrc}
                                        referrerPolicy="no-referrer"
                                        onError={() => setImageError(true)}
                                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-teal-950 to-neutral-950 flex items-center justify-center relative">
                                        {activeItem.color && (
                                            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: activeItem.color }} />
                                        )}
                                        <img src="/Logos/LogoBiotech.jpg" alt="A-One Biotech" className="w-24 h-24 object-contain opacity-20" />
                                    </div>
                                )}

                                {/* Premium overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end"
                                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.15) 60%, transparent 100%)', padding: cardPadding }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="max-w-[85%]"
                                    >
                                        <div className="flex items-center gap-2" style={{ marginBottom: bp === 'sm' ? '8px' : '16px' }}>
                                            <span className="inline-block rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-200 border border-emerald-400/30 font-bold tracking-[0.15em] uppercase shadow-lg"
                                                style={{ fontSize: bp === 'sm' ? '0.6rem' : '0.7rem', padding: bp === 'sm' ? '0.25rem 0.75rem' : '0.5rem 1rem' }}
                                            >
                                                {activeItem.isImage ? "Showcase" : "Feature"}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-white tracking-tight drop-shadow-md leading-[1.08]"
                                            style={{ fontSize: bp === 'sm' ? '20px' : 'clamp(28px, 3vw, 44px)', marginBottom: bp === 'sm' ? '8px' : '12px' }}
                                        >
                                            {activeItem.title}
                                        </h3>

                                        <p className="text-emerald-50/90 font-light drop-shadow-sm"
                                            style={{ fontSize: bp === 'sm' ? '13px' : '16px', lineHeight: 1.65, maxWidth: '480px' }}
                                        >
                                            {activeItem.desc}
                                        </p>


                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
