"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone, Mail, MapPin, Send,
    Leaf, User, ChevronDown, MessageSquare,
    ShieldCheck, Clock, ArrowRight, Tag
} from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Required";
        } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            }, 1500);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Prevent numbers and special characters in name field (allow letters, spaces, hyphens, apostrophes)
        if (name === "name" && value !== "" && !/^[a-zA-Z\s\-']+$/.test(value)) {
            return;
        }

        // Prevent letters in phone number field
        if (name === "phone" && value !== "" && !/^[0-9+\s\-()]+$/.test(value)) {
            return;
        }

        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    return (
        <section className="relative pt-4 pb-16 lg:pt-8 lg:pb-20 overflow-hidden font-sans bg-[#F7F7F8] selection:bg-[#264635] selection:text-white" id="contact">

            {/* Center 3D Plant Element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-1/2 w-[700px] h-[95%] z-0 pointer-events-none hidden lg:block opacity-90">
                <Image
                    src="/Background_Images/bg-contact.png"
                    alt="Plant Decor"
                    fill
                    className="object-contain object-bottom"
                    priority
                />
            </div>

            <div className="max-w-[1280px] w-full mx-auto relative z-10 px-6 lg:px-10">

                <div className="flex flex-col lg:flex-row justify-between relative z-20 gap-8 lg:gap-4">

                    {/* Left Column - Heading & Form */}
                    <div className="w-full lg:w-[52%] xl:w-[50%] flex flex-col">

                        <style>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover, 
              input:-webkit-autofill:focus, 
              textarea:-webkit-autofill,
              textarea:-webkit-autofill:hover,
              textarea:-webkit-autofill:focus {
                -webkit-box-shadow: 0 0 0px 1000px white inset !important;
                -webkit-text-fill-color: #1f2937 !important;
                transition: background-color 5000s ease-in-out 0s;
              }
              .contact-eyebrow {
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
                .contact-eyebrow {
                  font-size: 0.7rem;
                  padding: 0.3rem 1rem;
                }
              }
              .leaf-inline-contact {
                display: inline-block;
                width: 0.55em;
                height: 0.55em;
                vertical-align: middle;
                margin-left: 0.18em;
                transform: rotate(15deg) translateY(-0.06em);
              }
            `}</style>

                        {/* Top Label */}
                        <div className="flex justify-start" style={{ marginBottom: '24px' }}>
                            <div className="contact-eyebrow">
                                <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                    <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                                </svg>
                                <span style={{ marginRight: '-0.15em' }}>CONTACT US</span>
                            </div>
                        </div>

                        {/* Headings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start"
                        >
                            <h2 className="font-semibold text-[#111827] text-left text-[clamp(2.4rem,3.5vw,3.6rem)] leading-[1.1] tracking-[-0.01em] w-full max-w-[900px] flex flex-col items-start justify-start" style={{ fontFamily: "'Playfair Display', serif", marginBottom: '16px' }}>
                                <span>Let's Grow</span>
                                <span className="text-[#00A651] relative inline-flex items-center justify-start mt-2">
                                    Great Things
                                    <svg className="leaf-inline-contact absolute" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ right: '-0.8em', top: '50%', marginTop: '-0.275em' }}>
                                        <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#00A651" opacity=".9" />
                                    </svg>
                                </span>
                            </h2>

                            <div className="flex justify-start" style={{ marginBottom: '16px' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 60 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                    className="h-[3px] bg-gradient-to-r from-[#F51521] to-[#00A651] rounded-[2px]"
                                />
                            </div>

                            <p className="text-left text-[#4b5563] text-[18px] sm:text-[22px] leading-[1.8] max-w-[800px] mb-8">
                                Have a project in mind, a specific requirement, or <br className="hidden lg:block" /> any question? <br className="hidden lg:block" />
                                We'd love to hear from you.
                            </p>
                        </motion.div>

                        {/* Form Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#f0f8f3] p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,166,81,0.06)] border border-[#e8f2eb] relative z-20 overflow-hidden"
                        >
                            {/* Decorative ambient glows */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#00A651]/[0.08] to-transparent rounded-full blur-3xl -z-0 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#00A651]/[0.05] to-transparent rounded-full blur-3xl -z-0 pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

                            <form onSubmit={handleSubmit} className="relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    {/* Name Input */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className={`flex items-center bg-white/60 backdrop-blur-sm border ${errors.name ? 'border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100' : 'border-[#e0e8e2] hover:border-[#b3cebc] focus-within:border-[#00A651] focus-within:bg-white focus-within:shadow-[0_0_15px_rgba(0,166,81,0.08)]'} rounded-2xl px-5 py-3.5 transition-all duration-300`}
                                    >
                                        <User className={`w-4 h-4 mr-3 ${errors.name ? 'text-red-400' : 'text-gray-500'}`} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="bg-transparent w-full outline-none text-[16px] leading-normal text-gray-800 placeholder-gray-500 font-medium py-1"
                                        />
                                    </motion.div>

                                    {/* Email Input */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className={`flex items-center bg-white/60 backdrop-blur-sm border ${errors.email ? 'border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100' : 'border-[#e0e8e2] hover:border-[#b3cebc] focus-within:border-[#00A651] focus-within:bg-white focus-within:shadow-[0_0_15px_rgba(0,166,81,0.08)]'} rounded-2xl px-5 py-3.5 transition-all duration-300`}
                                    >
                                        <Mail className={`w-4 h-4 mr-3 ${errors.email ? 'text-red-400' : 'text-gray-500'}`} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            className="bg-transparent w-full outline-none text-[16px] leading-normal text-gray-800 placeholder-gray-500 font-medium py-1"
                                        />
                                    </motion.div>

                                    {/* Phone Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className={`flex items-center bg-white/60 backdrop-blur-sm border ${errors.phone ? 'border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100' : 'border-[#e0e8e2] hover:border-[#b3cebc] focus-within:border-[#00A651] focus-within:bg-white focus-within:shadow-[0_0_15px_rgba(0,166,81,0.08)]'} rounded-2xl px-5 py-3.5 transition-all duration-300 md:col-span-2`}
                                    >
                                        <Phone className={`w-4 h-4 mr-3 ${errors.phone ? 'text-red-400' : 'text-gray-500'}`} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="bg-transparent w-full outline-none text-[16px] leading-normal text-gray-800 placeholder-gray-500 font-medium py-1"
                                        />
                                    </motion.div>
                                </div>

                                {/* Message Textarea */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className={`flex items-start bg-white/60 backdrop-blur-sm border ${errors.message ? 'border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100' : 'border-[#e0e8e2] hover:border-[#b3cebc] focus-within:border-[#00A651] focus-within:bg-white focus-within:shadow-[0_0_15px_rgba(0,166,81,0.08)]'} rounded-2xl px-5 py-3.5 mb-5 transition-all duration-300 relative`}
                                >
                                    <MessageSquare className={`w-4 h-4 mr-3 mt-0.5 ${errors.message ? 'text-red-400' : 'text-gray-500'}`} />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows={3}
                                        className="bg-transparent w-full outline-none text-[16px] leading-normal text-gray-800 placeholder-gray-500 font-medium resize-none py-1"
                                    ></textarea>
                                    <div className="absolute bottom-4 right-5 w-2 h-2 border-r-[1.5px] border-b-[1.5px] border-gray-400 opacity-60"></div>
                                </motion.div>

                                {/* Submit Row */}
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-br from-[#35523b] to-[#1a2f20] text-[#dceade] px-8 py-3.5 rounded-full font-semibold text-[16px] flex items-center shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-300 whitespace-nowrap"
                                    >
                                        {isSubmitting ? 'Sending...' : isSuccess ? 'Sent!' : 'Send Message'}
                                        {!isSubmitting && !isSuccess && <ArrowRight className="w-4 h-4 ml-3" />}
                                    </motion.button>

                                    <div className="flex items-center text-gray-600">
                                        <ShieldCheck className="w-6 h-6 text-[#264635]/60 mr-3" strokeWidth={1.5} />
                                        <p className="text-[11px] leading-tight font-medium text-gray-600">
                                            We respect your privacy.<br />
                                            Your information is safe with us.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Right Column - Contact Info (Attractive Dark Theme) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full lg:w-[40%] xl:w-[35%] relative z-20 mt-12 lg:mt-0 lg:ml-auto self-stretch drop-shadow-[0_20px_25px_rgba(20,83,45,0.15)]"
                    >
                        <div
                            className="bg-[#1a3525] p-8 md:p-10 lg:p-12 rounded-[2.5rem] h-full flex flex-col justify-center text-white relative overflow-hidden"
                            style={{
                                maskImage: 'linear-gradient(to top left, transparent 45px, black 46px)',
                                WebkitMaskImage: 'linear-gradient(to top left, transparent 45px, black 46px)'
                            }}
                        >
                            {/* Concentric circles background with pulse animation */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 -right-[30%] -translate-y-1/2 w-[160%] aspect-square pointer-events-none"
                            >
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.2]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.4]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.6]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[0.8]" />
                                <div className="absolute inset-0 rounded-full border border-white scale-[1.0]" />
                            </motion.div>

                            {/* FAQ Logo */}
                            <div className="absolute top-6 right-6 w-24 md:w-32 pointer-events-none z-10">
                                <img src="/Logos/faqs_logo.png" alt="Logo" className="w-full h-auto object-contain drop-shadow-md" />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-10">
                                    <h3 className="text-[26px] sm:text-[30px] font-medium text-white tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3>
                                    <div className="h-[2px] w-12 bg-[#c5a867] mt-4"></div>
                                </div>

                                <div className="space-y-6">
                                    {/* Phone */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="flex items-center gap-4 sm:gap-6 pb-6 border-b border-green-200/20 group"
                                    >
                                        <div className="w-[54px] h-[54px] bg-gradient-to-br from-[#2a5236] to-[#152e1e] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-[22px] h-[22px] text-[#dceade] fill-none drop-shadow-md" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-semibold text-[#a5c2b0] mb-0.5 group-hover:text-[#c5a867] transition-colors">Phone</p>
                                            <div className="flex flex-col gap-0.5 mb-1">
                                                <p className="text-[15px] sm:text-[16px] font-bold text-white">+91 99211 83935</p>
                                                <p className="text-[15px] sm:text-[16px] font-bold text-white">+91 94225 23210</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Email */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center gap-4 sm:gap-6 pb-6 border-b border-green-200/20 group"
                                    >
                                        <div className="w-[54px] h-[54px] bg-gradient-to-br from-[#2a5236] to-[#152e1e] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-[22px] h-[22px] text-[#dceade] fill-none drop-shadow-md" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-semibold text-[#a5c2b0] mb-0.5 group-hover:text-[#c5a867] transition-colors">Email</p>
                                            <p className="text-[16px] font-bold text-white mb-0.5">info@aonebiotech.com</p>
                                            <p className="text-[12px] font-medium text-green-100/80">We'll reply as soon as possible.</p>
                                        </div>
                                    </motion.div>

                                    {/* Location */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="flex items-center gap-4 sm:gap-6 pb-6 border-b border-green-200/20 group"
                                    >
                                        <div className="w-[54px] h-[54px] bg-gradient-to-br from-[#2a5236] to-[#152e1e] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="w-[22px] h-[22px] text-[#dceade] fill-none drop-shadow-md" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-semibold text-[#a5c2b0] mb-0.5 group-hover:text-[#c5a867] transition-colors">Location</p>
                                            <p className="text-[15px] font-bold text-white mb-0.5 leading-snug">
                                                Floriculture Park Ambi, <br />
                                                Talegaon Dabhade MIDC, <br />
                                                Maharashtra 410507, India
                                            </p>
                                            <p className="text-[12px] font-medium text-green-100/80 mt-1">Visit us anytime.</p>
                                        </div>
                                    </motion.div>

                                    {/* Working Hours */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        className="flex items-center gap-4 sm:gap-6 pt-2 group"
                                    >
                                        <div className="w-[54px] h-[54px] bg-gradient-to-br from-[#2a5236] to-[#152e1e] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                            <Clock className="w-[22px] h-[22px] text-[#dceade] stroke-[1.5] drop-shadow-md" />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-semibold text-[#a5c2b0] mb-0.5 group-hover:text-[#c5a867] transition-colors">Working Hours</p>
                                            <p className="text-[15px] font-bold text-white mb-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                            <p className="text-[12px] font-medium text-green-100/80">Sunday: Take appointment</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
