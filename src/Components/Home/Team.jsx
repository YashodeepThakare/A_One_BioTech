"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
    const teamMembers = [
        {
            id: 1,
            name: "Kailas Jadhav",
            role: "Nursery In-Charge",
            image: "/Team/K_Jadhav.png",
            delay: 0.1,
        },
        {
            id: 2,
            name: "Ramdas Shelke",
            role: "Production Specialist",
            image: "/Team/S_Ramdas.png",
            delay: 0.2,
        },
        {
            id: 3,
            name: "Samuel Jeurkar",
            role: "Human Resources",
            image: "/Team/S_Jeurkar.png",
            delay: 0.3,
        },
        {
            id: 4,
            name: "Amol Chopade",
            role: "Production Specialist",
            image: "/Team/A_Chopade.png",
            delay: 0.4,
        },
    ];

    return (
        <section id="team" className="relative pt-12 lg:pt-16 pb-16 lg:pb-20 bg-[#F7F7F8] overflow-hidden w-full flex flex-col items-center">
            {/* Background Designs & Soft Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(16,185,129,0.06)_0%,transparent_55%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(20,184,166,0.05)_0%,transparent_45%)]"></div>

                {/* Subtle Dot Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00A651 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }}></div>

                {/* Abstract Organic Shape Left */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-64 top-20 w-[600px] h-[600px] opacity-[0.02] text-[#00A651]"
                >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M44.7,-76.4C58.3,-69.2,70.1,-58.1,79.5,-44.8C88.9,-31.5,95.8,-15.8,96.3,-0.1C96.9,15.7,91,31.4,81.8,44.9C72.5,58.4,59.9,69.7,45.4,76.5C31,83.4,15.5,85.8,0.3,85.2C-14.8,84.7,-29.7,81.3,-43.3,74.2C-57,67.1,-69.4,56.3,-77.9,42.8C-86.4,29.3,-91,14.6,-91.1,-0.1C-91.2,-14.8,-86.8,-29.5,-78.4,-42.6C-70.1,-55.6,-57.8,-66.8,-43.9,-73.8C-30,-80.8,-15,-83.5,0.7,-84.7C16.5,-85.9,31,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </motion.div>

                {/* Abstract Organic Shape Right */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-64 bottom-20 w-[700px] h-[700px] opacity-[0.02] text-[#00A651]"
                >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M47.7,-74.2C59.9,-63.3,66.8,-46.8,73.5,-30.9C80.2,-15,86.6,0.3,84.1,14.5C81.6,28.7,70.1,41.9,57.1,52.2C44.1,62.5,29.6,70.1,13.8,74.5C-2.1,78.9,-19.2,80.1,-33.5,74.1C-47.8,68.1,-59.3,54.9,-68.8,40.1C-78.3,25.4,-85.8,9.1,-84.9,-6.6C-84,-22.3,-74.7,-37.4,-62.4,-47.9C-50.1,-58.4,-34.8,-64.3,-19.9,-68.9C-5,-73.4,9.5,-76.6,23.6,-76.4C37.8,-76.2,51.6,-72.6,47.7,-74.2Z" transform="translate(100 100)" />
                    </svg>
                </motion.div>

                <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#F7F7F8] to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#F7F7F8] to-transparent z-10"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <style>{`
          .team-eyebrow {
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
            .team-eyebrow {
              font-size: 0.7rem;
              padding: 0.3rem 1rem;
            }
          }
          .leaf-inline {
            display: inline-block;
            width: 0.55em;
            height: 0.55em;
            vertical-align: middle;
            margin-left: 0.18em;
            transform: rotate(15deg) translateY(-0.06em);
          }
        `}</style>

                {/* Header Section (Matching Gallery Style) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[1100px] mx-auto text-center flex flex-col items-center mb-16 lg:mb-20"
                >
                    <div className="flex justify-center" style={{ marginBottom: '24px' }}>
                        <div className="team-eyebrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                            <span style={{ marginRight: '-0.15em' }}>CORE TEAM</span>
                        </div>
                    </div>

                    <h2 className="font-semibold text-[#111827] text-center text-[clamp(2.4rem,3.5vw,3.6rem)] leading-[1.1] tracking-[-0.01em] w-full max-w-[900px] mx-auto flex flex-col items-center justify-center" style={{ fontFamily: "'Playfair Display', serif", marginBottom: '28px' }}>
                        <span>A Dedicated Task Force Of</span>
                        <span className="text-[#00A651] relative inline-flex items-center justify-center mt-2">
                            120+ Professionals
                            <svg className="leaf-inline absolute" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ right: '-0.8em', top: '50%', marginTop: '-0.275em' }}>
                                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                            </svg>
                        </span>
                    </h2>


                    <p className="text-center text-[#4b5563] text-[18px] sm:text-[22px] leading-[1.8] max-w-[800px] ">
                        "We are a team because we respect, trust, and care for each other."
                    </p>
                </motion.div>

                {/* Premium Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-16">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: member.delay }}
                            className="group flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 cursor-pointer"
                        >
                            {/* Image with crisp radius and attractive hover shadow */}
                            <div className="w-full aspect-[3/4] relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#00A651]/30">
                                {/* Subtle gradient overlay on hover for depth (lightened since there are no icons) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>

                            {/* Text below the image */}
                            <div className="mt-4 sm:mt-6 text-center flex flex-col items-center">
                                <div className="relative inline-block pb-1">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#00A651]">{member.name}</h3>
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00A651] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1 transition-colors duration-300 group-hover:text-[#00A651] flex items-center justify-center text-center px-2">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
