"use client";

import React from 'react';
import { Scan, Factory, Thermometer, Warehouse, FlaskConical, Flower2, Leaf, TreeDeciduous, Sprout, Map, Sun, Waypoints, Dna, CloudSun, Trees, Tent, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="w-full text-gray-800 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

            {/* SECTION 01 */}
            <div className="relative w-full bg-[#F7F7F8] px-4 py-6 sm:px-6 sm:py-8 md:px-16 lg:py-10 lg:px-28 overflow-hidden">
                {/* Background Decor Left */}
                <img
                    src="/Background_Images/bgImg4.png"
                    alt="Background Shape Left"
                    className="absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[320px] pointer-events-none z-0 hidden sm:block"
                />

                {/* Content Row 1 */}
                <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-16 max-w-[1100px] mx-auto">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col lg:w-1/2 max-w-[500px] pl-0 sm:pl-4 md:pl-8 lg:pl-12"
                    >

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-4 sm:px-5 py-1.5 sm:py-2 border border-[#00A651]/30 rounded-full bg-[#00A651]/5 w-fit">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span className="text-[#00A651] font-semibold text-[0.85rem] tracking-[0.14em] uppercase">About Us</span>
                        </div>

                        <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em] mb-4 sm:mb-6">
                            Rooted in Science, <br className="hidden sm:block" />
                            <span className="text-[#00A651]">Growing a Greener <span className="whitespace-nowrap">Future
                                <svg className="inline-block w-[0.6em] h-[0.6em] ml-1 sm:ml-2 -translate-y-[0.05em] rotate-[15deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                                </svg>
                            </span></span>
                        </h2>

                        <div className="w-[50px] sm:w-[68px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm mb-5 sm:mb-7"></div>

                        <div className="flex items-start">
                            <p className="text-gray-700 leading-relaxed text-[13.5px] sm:text-[15px]">
                                At A-One Biotech, science is at the heart of every plant we grow and every solution we deliver. We combine advanced biotechnology with sustainable practices to create plants that build a healthier, greener tomorrow.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        className="flex flex-col relative pt-2 sm:pt-4 lg:pt-0 lg:w-1/2 max-w-[500px]"
                    >
                        {/* 01 watermark / subtle indicator */}
                        <div className="flex items-center mb-5 sm:mb-8">
                            <span className="text-[#00A651] font-medium text-base sm:text-lg mr-3 sm:mr-4">01</span>
                            <div className="h-[1px] bg-[#e3dbc9] w-8 sm:w-12"></div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-['Playfair_Display'] text-[#1a1a1a] leading-[1.2] mb-5 sm:mb-8">
                            Engineering Growth <br className="hidden md:block" /> Through Science & Innovation
                        </h3>

                        <div className="space-y-4 sm:space-y-6 text-[13.5px] sm:text-[15px] text-gray-600 leading-relaxed">
                            <p>
                                A-One Biotech is a leading biotechnology company dedicated to transforming plant propagation through advanced tissue culture and large-scale nursery operations. Combining scientific precision with sustainable cultivation practices, we deliver high-quality plant solutions that support agriculture, landscaping, horticulture, and green infrastructure development.
                            </p>

                            <p>
                                Our integrated production ecosystem enables the seamless transition of plants from laboratory propagation to acclimatization, hardening, and commercial cultivation. Every stage is carefully managed to ensure exceptional plant health, uniformity, and long-term performance.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* SECTION 02 */}
            <div className="w-full bg-[#F7F7F8] flex flex-col lg:flex-row px-4 sm:px-6 md:px-16 lg:px-28">

                {/* Left Side (02) */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[35%] py-6 sm:py-8 lg:py-10 lg:pr-16 flex flex-col border-b lg:border-b-0 lg:border-r border-[#e8e1d5]"
                >
                    <div className="flex items-center mb-4 sm:mb-5">
                        <span className="text-[#00A651] font-medium text-base sm:text-lg mr-3 sm:mr-4">02</span>
                        <div className="h-[1px] bg-[#e3dbc9] w-8 sm:w-12"></div>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-[clamp(1.8rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em] mb-4 sm:mb-6">
                        Infrastructure <br className="hidden sm:block" />
                        <span className="text-[#00A651]">Built for <span className="whitespace-nowrap">Scale
                            <svg className="inline-block w-[0.6em] h-[0.6em] ml-1 sm:ml-2 -translate-y-[0.05em] rotate-[15deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                        </span></span>
                    </h3>
                    <div className="w-[50px] sm:w-[68px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm mb-5 sm:mb-7"></div>
                    <p className="text-gray-600 leading-relaxed text-[13.5px] sm:text-[15px] max-w-[340px]">
                        Spread across a vast operational campus, our facilities are designed to support large-scale plant production while maintaining the highest standards of quality and consistency.
                    </p>
                </motion.div>

                {/* Right Side Grid */}
                <div className="w-full lg:w-[65%] py-6 sm:py-8 lg:py-10 lg:pl-16 flex flex-col justify-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-start">

                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex flex-col items-center sm:items-start relative border-b border-[#e8e1d5] pb-8 sm:pb-10 sm:border-r sm:pr-8 md:pr-12 lg:pr-16 w-full"
                        >
                            <div className="flex flex-col items-center sm:flex-row sm:items-start">
                                <div className="text-[#00A651] mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0">
                                    <Map size={38} strokeWidth={1} />
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] text-[#1a1a1a] leading-none">42</span>
                                    <span className="text-[#00A651] font-['Playfair_Display'] text-lg sm:text-xl italic mt-2 sm:mt-3">Acres</span>
                                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-3 sm:mt-4 max-w-[200px] leading-relaxed text-center sm:text-left">
                                        of integrated biotechnology and nursery infrastructure
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center sm:items-start relative border-b border-[#e8e1d5] py-8 sm:py-10 sm:py-0 sm:pb-10 sm:pl-8 md:pl-12 lg:pl-16 w-full">
                            {/* Background Decor for 76,000 */}
                            <img
                                src="/Background_Images/botanical_decor_1.png"
                                alt="Botanical Decor"
                                className="absolute top-4 md:top-8 lg:top-12 -right-16 sm:-right-24 md:-right-40 lg:-right-[160px] w-[120px] sm:w-[180px] md:w-[280px] lg:w-[380px] pointer-events-none z-0 mix-blend-multiply opacity-100 brightness-[0.75] contrast-[2.2] saturate-[1.6] scale-y-[-1] rotate-[110deg] translate-x-16 hidden sm:block"
                            />
                            <img
                                src="/Background_Images/botanical_decor_1.png"
                                alt="Botanical Decor"
                                className="absolute top-4 md:top-8 lg:top-12 -right-16 sm:-right-24 md:-right-40 lg:-right-[160px] w-[120px] sm:w-[180px] md:w-[280px] lg:w-[380px] pointer-events-none z-0 mix-blend-multiply opacity-90 brightness-[0.75] contrast-[2.2] saturate-[1.6] scale-y-[-1] rotate-[110deg] translate-x-16 hidden sm:block"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                                className="flex flex-col items-center sm:flex-row sm:items-start relative z-10"
                            >
                                <div className="text-[#00A651] mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0">
                                    <FlaskConical size={38} strokeWidth={1} />
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] text-[#1a1a1a] leading-none">76,000</span>
                                    <span className="text-[#00A651] font-['Playfair_Display'] text-lg sm:text-xl italic mt-2 sm:mt-3">Sq. M.</span>
                                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-3 sm:mt-4 max-w-[200px] leading-relaxed text-center sm:text-left">
                                        dedicated production and propagation area
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className="flex flex-col items-center sm:items-start relative border-b border-[#e8e1d5] sm:border-b-0 py-8 sm:py-0 sm:pt-10 sm:border-r sm:pr-8 md:pr-12 lg:pr-16 w-full"
                        >
                            <div className="flex flex-col items-center sm:flex-row sm:items-start">
                                <div className="text-[#00A651] mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0">
                                    <Thermometer size={38} strokeWidth={1} />
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] text-[#1a1a1a] leading-none">6,000</span>
                                    <span className="text-[#00A651] font-['Playfair_Display'] text-lg sm:text-xl italic mt-2 sm:mt-3">Sq. M.</span>
                                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-3 sm:mt-4 max-w-[220px] leading-relaxed text-center sm:text-left">
                                        environment-controlled hardening and acclimatization facilities
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stat 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                            className="flex flex-col items-center sm:items-start relative pt-8 sm:pt-10 sm:pl-8 md:pl-12 lg:pl-16 w-full"
                        >
                            <div className="flex flex-col items-center sm:flex-row sm:items-start">
                                <div className="text-[#00A651] mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0">
                                    <Tent size={38} strokeWidth={1} />
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] text-[#1a1a1a] leading-none">63,000</span>
                                    <span className="text-[#00A651] font-['Playfair_Display'] text-lg sm:text-xl italic mt-2 sm:mt-3">Sq. M.</span>
                                    <p className="text-[12px] sm:text-[13px] text-gray-500 mt-3 sm:mt-4 max-w-[230px] leading-relaxed text-center sm:text-left">
                                        display and nursery area equipped with polyhouses and shade-net systems
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>



                </div>
            </div>

            {/* SECTION 03 & 04 (Split) */}
            <div className="w-full flex flex-col lg:flex-row">

                {/* Left Dark (03) */}
                <div className="relative w-full lg:w-[40%] bg-[#1e2022] text-white p-6 sm:p-10 md:p-16 lg:py-10 lg:px-20 xl:lg:px-28 lg:pr-20 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full relative z-20"
                    >
                        {/* Background Decor Section 3 */}
                        <img
                            src="/Background_Images/imgBg7.png"
                            alt="Background Shape"
                            className="absolute top-0 -translate-y-[10%] -right-12 sm:-right-20 md:-right-40 lg:-right-[220px] h-[250px] sm:h-[350px] md:h-[500px] lg:h-[750px] w-auto pointer-events-none z-0 opacity-0 sm:opacity-100 contrast-125 brightness-75"
                        />

                        <div className="relative z-20">
                            <div className="flex items-center mb-5 sm:mb-8">
                                <span className="text-[#00A651] font-medium text-base sm:text-lg mr-3 sm:mr-4">03</span>
                                <div className="h-[1px] bg-[#00A651]/30 w-8 sm:w-12"></div>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-12 tracking-wide">
                                Our Core Capabilities
                            </h3>
                        </div>

                        <div className="flex flex-col space-y-7 sm:space-y-10 relative ml-1 sm:ml-2">
                            {/* Vertical Line */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                style={{ originY: 0 }}
                                className="absolute left-[19px] top-6 bottom-8 w-[1px] bg-[#00A651]/30"
                            ></motion.div>

                            {/* Item 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex items-start relative z-10"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00A651]/60 flex items-center justify-center bg-[#1e2022] text-[#00A651] mr-4 sm:mr-6 shrink-0">
                                    <Factory size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                    <span className="text-[13px] font-semibold tracking-wider uppercase mb-1.5">Mass Production</span>
                                    <span className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">Capacity to produce 6 million<br className="hidden sm:block" /> tissue culture plants annually</span>
                                </div>
                            </motion.div>

                            {/* Item 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-start relative z-10"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00A651]/60 flex items-center justify-center bg-[#1e2022] text-[#00A651] mr-4 sm:mr-6 shrink-0">
                                    <Dna size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                    <span className="text-[13px] font-semibold tracking-wider uppercase mb-1.5">Genetic Fidelity</span>
                                    <span className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">Rigorous testing ensures true-to-type,<br className="hidden sm:block" /> disease-free planting material</span>
                                </div>
                            </motion.div>

                            {/* Item 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-start relative z-10"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00A651]/60 flex items-center justify-center bg-[#1e2022] text-[#00A651] mr-4 sm:mr-6 shrink-0">
                                    <CloudSun size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                    <span className="text-[13px] font-semibold tracking-wider uppercase mb-1.5">Advanced Acclimatization</span>
                                    <span className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">Climate-controlled hardening<br className="hidden sm:block" /> for maximum field survival rates</span>
                                </div>
                            </motion.div>

                            {/* Item 4 */}
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-start relative z-10"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00A651]/60 flex items-center justify-center bg-[#1e2022] text-[#00A651] mr-4 sm:mr-6 shrink-0">
                                    <Microscope size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                    <span className="text-[13px] font-semibold tracking-wider uppercase mb-1.5">Research & Innovation</span>
                                    <span className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">Continuous R&D to develop<br className="hidden sm:block" /> superior, resilient plant varieties</span>
                                </div>
                            </motion.div>

                            {/* Item 5 */}
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-start relative z-10"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00A651]/60 flex items-center justify-center bg-[#1e2022] text-[#00A651] mr-4 sm:mr-6 shrink-0">
                                    <Leaf size={18} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                    <span className="text-[13px] font-semibold tracking-wider uppercase mb-1.5">Sustainable Practices</span>
                                    <span className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">Eco-friendly cultivation supporting<br className="hidden sm:block" /> green infrastructure projects</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Light (04) */}
                <div className="w-full lg:w-[60%] bg-[#F7F7F8] px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 lg:px-24 lg:py-10 flex flex-col justify-center relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        className="w-full h-full flex flex-col justify-center relative z-10"
                    >


                        <div className="flex items-center mb-8 sm:mb-12 lg:mb-16 relative z-10">
                            <span className="text-[#00A651] font-medium text-base sm:text-lg mr-3 sm:mr-4">04</span>
                            <div className="h-[1px] bg-[#e3dbc9] w-8 sm:w-12"></div>
                        </div>

                        <div className="flex relative z-10">
                            <span className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-['Playfair_Display'] text-[#00A651] leading-[0.6] mr-2 sm:mr-4 pt-2 sm:pt-4">“</span>
                            <div className="flex flex-col border-l border-[#e3dbc9] pl-4 sm:pl-8 lg:pl-10 py-2 ml-1 sm:ml-2">
                                <h2 className="font-['Playfair_Display'] text-[clamp(1.6rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em] mb-4 sm:mb-6">
                                    Precision<br />
                                    Quality<br />
                                    <span className="text-[#00A651]">Reliability</span>
                                    <svg className="inline-block w-[0.6em] h-[0.6em] ml-1 sm:ml-2 -translate-y-[0.05em] rotate-[15deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                                    </svg>
                                    <span className="text-[#00A651] text-[2rem] sm:text-[3rem] lg:text-[4rem] align-bottom leading-[0.5] ml-1 sm:ml-2">”</span>
                                </h2>
                                <div className="w-[50px] sm:w-[68px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm mb-5 sm:mb-7"></div>
                                <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[15px] max-w-[500px]">
                                    Our propagation systems are designed to preserve the superior characteristics of parent plants, ensuring consistency in growth, flowering, foliage quality, and overall performance. Through rigorous cultivation protocols and modern infrastructure, we deliver planting material trusted by farmers, industries, institutions, and corporate projects alike.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* SECTION 05 */}
            <div className="w-full bg-[#F7F7F8] px-4 py-6 sm:px-8 sm:py-8 md:px-16 md:py-10 lg:px-28 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 lg:gap-0">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/4 mb-0"
                >
                    <div className="flex items-center mb-5 sm:mb-8">
                        <span className="text-[#00A651] font-medium text-base sm:text-lg mr-3 sm:mr-4">05</span>
                        <div className="h-[1px] bg-[#e3dbc9] w-8 sm:w-12"></div>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-[clamp(1.8rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-[#111827] tracking-[-0.01em] mb-4 sm:mb-6">
                        Supporting a <br className="hidden sm:block" />
                        <span className="text-[#00A651]">Greener Tomorrow</span>
                        <svg className="inline-block w-[0.6em] h-[0.6em] ml-1 sm:ml-2 -translate-y-[0.05em] rotate-[15deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                        </svg>
                    </h3>
                    <div className="w-[50px] sm:w-[68px] h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-sm mb-5 sm:mb-7"></div>
                </motion.div>

                {/* Center */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    className="w-full lg:w-[45%] mb-0 flex justify-center"
                >
                    <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] lg:px-8 max-w-[500px] text-left lg:text-justify">
                        Beyond production, A-One Biotech is committed to advancing sustainable agriculture and green development. By combining biotechnology, research-driven cultivation practices, and scalable production capabilities, we help create healthier landscapes, stronger ecosystems, and long-term environmental value.
                    </p>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="w-full lg:w-1/4 flex flex-col items-center lg:items-end lg:text-right pt-0"
                >
                    <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-['Playfair_Display'] text-[#00A651] italic leading-[1.1] text-center lg:text-right">
                        Better Plants.<br />
                        Better Growth.<br />
                        Better Future.
                    </h2>
                    <div className="mt-4 sm:mt-6 text-[#00A651]">
                        <Leaf size={32} strokeWidth={1} className="sm:w-[40px] sm:h-[40px]" />
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default About;
