"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Phone, Mail } from "lucide-react";
const faqs = [
    {
        question:
            "What is Plant Tissue Culture, and why is it important for modern agriculture?",
        answer:
            "Plant Tissue Culture is an advanced biotechnology technique that enables the propagation of plants from small tissue samples under highly controlled laboratory conditions. This ensures genetic uniformity, superior plant health, and consistent growth performance."
    },
    {
        question:
            "How does A-One Biotech ensure the quality and consistency of its plants?",
        answer:
            "Every stage of production—from laboratory propagation to nursery acclimatization—is monitored through strict quality control protocols to ensure consistency, vigor, and genetic stability."
    },
    {
        question:
            "Are your tissue culture plants disease-free?",
        answer:
            "Plants are produced under sterile laboratory conditions and undergo rigorous quality inspections to minimize contamination risks and ensure healthy growth."
    },
    {
        question:
            "What production capacity does A-One Biotech offer?",
        answer:
            "Our facility can produce up to 6 million viable plants annually, enabling us to support projects ranging from commercial farms to large-scale green infrastructure developments."
    },
    {
        question:
            "What makes your Tissue Culture Laboratory different?",
        answer:
            "Our state-of-the-art 3000 sq. ft. laboratory features clean-room facilities, advanced propagation systems, and scientific process controls."
    },
    {
        question:
            "Why is nursery acclimatization important?",
        answer:
            "The acclimatization process strengthens young plants, improves resilience, and prepares them for successful establishment in natural growing environments."
    },
    {
        question:
            "Do you offer exotic and ornamental plant varieties?",
        answer:
            "Yes. Our collection includes premium exotic plants, ornamental species, and commercial plantation varieties suitable for landscaping and agricultural applications."
    },
    {
        question:
            "Can you fulfill large-scale customized orders?",
        answer:
            "Absolutely. We work with commercial growers, landscape architects, developers, and institutions to deliver customized bulk orders with consistent quality."
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15
        }
    }
};

export default function PremiumFAQ() {
    const [active, setActive] = useState(null);

    return (
        <section id="faqs" className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#F7F7F8]">
            {/* Subtle Background Image on Side */}
            <div 
                className="absolute top-0 right-0 h-full w-[35%]" 
                style={{
                    backgroundImage: "url('/Background_Images/green-leaves-white-background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                    opacity: 0.4,
                    pointerEvents: 'none',
                    zIndex: 0,
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)',
                    maskImage: 'linear-gradient(to right, transparent, black 80%)'
                }}
            ></div>
            <style>{`
                .faq-eyebrow {
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
                .leaf-inline {
                    display: inline-block;
                    width: 0.55em;
                    height: 0.55em;
                    vertical-align: middle;
                    margin-left: 0.18em;
                    transform: rotate(15deg) translateY(-0.06em);
                }
                .faq-ribbon {
                    clip-path: polygon(16px 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 16px 100%, 0% 50%);
                }
                .faq-number-block {
                    clip-path: polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%);
                }
                @media (max-width: 639px) {
                    .faq-eyebrow {
                        font-size: 0.7rem;
                        padding: 0.3rem 1rem;
                    }
                }
            `}</style>

            <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[1100px] mx-auto text-center flex flex-col items-center mb-12 lg:mb-16"
                >
                    <div className="flex justify-center" style={{ marginBottom: '24px' }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="faq-eyebrow cursor-default"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span style={{ marginRight: '-0.15em' }}>FAQ</span>
                        </motion.div>
                    </div>

                    <h2 className="font-semibold text-[#111827] text-center text-[clamp(2.4rem,3.5vw,3.6rem)] leading-[1.1] tracking-[-0.01em] w-full max-w-[900px] mx-auto flex flex-col items-center justify-center" style={{ fontFamily: "'Playfair Display', serif", marginBottom: '16px' }}>
                        <span>Answers to Your</span>
                        <span className="text-[#00A651] relative inline-flex items-center justify-center mt-2">
                            Questions
                            <motion.svg
                                animate={{ rotate: [15, 25, 15] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="leaf-inline absolute"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ right: '-0.8em', top: '50%', marginTop: '-0.275em' }}
                            >
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </motion.svg>
                        </span>
                    </h2>

                    <div className="flex justify-center" style={{ marginBottom: '16px' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-[2px]"
                        />
                    </div>

                    <p className="text-center text-[#4b5563] text-[18px] sm:text-[22px] leading-[1.8] w-full px-4">
                        Discover how A-One Biotech combines advanced tissue culture, scientific innovation,<br className="hidden md:block" />
                        and large-scale production expertise to deliver premium-quality plants.
                    </p>
                </motion.div>

                {/* 2 Column Layout */}
                <div className="mt-12 lg:mt-16 grid lg:grid-cols-[380px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">

                    {/* Left Column - Help Card Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="relative lg:sticky lg:top-24 min-h-[280px] lg:min-h-[380px] group drop-shadow-[0_20px_25px_rgba(20,83,45,0.15)] z-10"
                    >
                        <div
                            className="bg-[#1a3525] rounded-[24px] rounded-br-none p-5 sm:p-6 lg:p-8 flex flex-col justify-between text-white relative overflow-hidden h-full"
                            style={{
                                maskImage: 'linear-gradient(to top left, transparent 45px, black 46px)',
                                WebkitMaskImage: 'linear-gradient(to top left, transparent 45px, black 46px)'
                            }}
                        >
                            {/* Concentric circles background with pulse animation */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 -left-[30%] -translate-y-1/2 w-[160%] aspect-square pointer-events-none"
                            >
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.2]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.4]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.6]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.8]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[1.0]" />
                            </motion.div>

                            <div className="relative z-10 flex-1 flex flex-col min-h-0">
                                <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.1] mb-4 lg:mb-5 font-medium text-white mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    We're Here<br />
                                    <span className="italic font-light text-[#dceade]">to Help You</span>
                                </h2>
                                <div className="w-10 lg:w-12 h-[1px] bg-green-200/30 mb-5 lg:mb-6 transition-all duration-500 group-hover:w-16 lg:group-hover:w-20 group-hover:bg-green-200/50" />
                                <p className="text-[#a5c2b0] text-[13px] sm:text-[14px] leading-[1.6] max-w-[260px] group-hover:text-green-100 transition-colors duration-500 mb-6 lg:mb-8">
                                    Have a question or need <br className="hidden sm:block" />
                                    personal assistance? <br className="hidden sm:block" />
                                    Our team is ready to support <br className="hidden sm:block" />
                                    you at every step.
                                </p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center gap-5 p-5 rounded-2xl bg-[#224430]/40 border border-green-200/10 backdrop-blur-sm relative overflow-hidden group/badge mt-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 -translate-x-full group-hover/badge:translate-x-full duration-1000 transition-transform ease-in-out" />
                                    <div className="w-12 h-12 rounded-full bg-[#1a3525] border border-green-200/20 flex items-center justify-center shrink-0 shadow-lg shadow-black/20">
                                        <svg className="w-6 h-6 text-[#dceade]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[14px] font-semibold text-white tracking-wide mb-1">Quality Guaranteed</h4>
                                        <p className="text-[12px] text-[#a5c2b0] leading-relaxed">Rigorously tested in our advanced laboratories.</p>
                                    </div>
                                </motion.div>

                                {/* Decorative Logo below Quality Guaranteed */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="h-20 lg:h-auto lg:flex-1 min-h-0 w-full flex items-center justify-center mt-4 mb-2 lg:my-4 opacity-90 transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none"
                                >
                                    <img src="/Logos/faqs_logo.png" alt="FAQ Graphic" className="w-auto lg:w-full h-full object-contain filter drop-shadow-md scale-100 lg:scale-[1.4] lg:translate-y-6" />
                                </motion.div>
                            </div>

                            <a href="/contact" className="contact-link-group flex items-center text-[11px] font-bold tracking-[0.15em] text-[#dceade] uppercase mt-4 lg:mt-8 relative z-10 w-max cursor-pointer">
                                <span className="border-b border-green-200/30 pb-1 transition-all duration-300">CONTACT OUR EXPERTS</span>
                                <motion.span
                                    whileHover={{ x: 5, backgroundColor: "#dceade", color: "#1a3525" }}
                                    className="ml-4 w-8 h-8 rounded-full border border-green-200/30 flex items-center justify-center transition-colors duration-300 bg-transparent text-[#dceade]"
                                >
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </motion.span>
                            </a>

                        </div>
                    </motion.div>

                    {/* Right Column - FAQs */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col gap-3"
                    >
                        {faqs.map((faq, index) => {
                            const isOpen = active === index;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative mb-2 group"
                                >
                                    {/* Top Row */}
                                    <div
                                        className={`w-full min-h-[64px] md:min-h-[72px] relative faq-ribbon z-10 flex items-center cursor-pointer transition-all duration-400 ease-out ${isOpen ? 'bg-[#eef3ef] shadow-sm' : 'bg-white hover:bg-[#f8faf9] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]'}`}
                                        onClick={() => setActive(isOpen ? null : index)}
                                    >
                                        <div className={`absolute left-0 top-0 bottom-0 w-[64px] md:w-[76px] flex items-center justify-center font-medium text-lg md:text-xl transition-colors duration-400 ease-out ${isOpen ? 'bg-[#1a3525] text-white faq-number-block' : 'border-r border-gray-100 text-[#1a3525] group-hover:text-green-700'}`}>
                                            <span className="pl-3 md:pl-4">{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                        <div className={`flex-1 pl-[80px] md:pl-[100px] pr-12 md:pr-16 py-4 text-[13px] md:text-[15px] leading-snug transition-all duration-400 ease-out transform ${isOpen ? 'text-[#111827] font-bold' : 'text-[#4b5563] font-medium group-hover:translate-x-1 group-hover:text-[#111827]'}`}>
                                            {faq.question}
                                        </div>
                                        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 flex items-center justify-center">
                                            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-400 ease-out transform ${isOpen ? 'bg-[#1a3525] text-white scale-110' : 'bg-[#eef3ef] text-[#1a3525] group-hover:bg-[#e2e9e4] group-hover:rotate-90'}`}>
                                                <motion.div
                                                    initial={false}
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                                                >
                                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Answer Container */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, y: -10 }}
                                                animate={{ height: "auto", opacity: 1, y: 0 }}
                                                exit={{ height: 0, opacity: 0, y: -10 }}
                                                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                                                className="overflow-hidden relative z-0"
                                            >
                                                <div className="mx-[16px] bg-[#eef3ef] rounded-b-[16px] pt-4 md:pt-5 pb-6 px-0 -mt-2 border border-t-0 border-[#e6ebe7]/50 shadow-sm">
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1, duration: 0.4 }}
                                                        className="text-[#4b5563] text-[13px] md:text-[14px] leading-relaxed pl-[48px] md:pl-[60px] pr-6 md:pr-12"
                                                    >
                                                        {faq.answer}
                                                    </motion.p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}