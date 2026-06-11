"use client";

import React from "react";
import { motion } from "framer-motion";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <div className="w-full bg-[#F7F7F8]">
      <footer className="footer-section">
        {/* Top Drip Wave */}
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            {/* Faint overlay wave for premium overlapping effect */}
            <path fill="#ffffff" fillOpacity="0.08" d="M0,0 C 100,70 150,120 250,120 C 350,120 400,50 500,20 C 550,5 580,0 660,0 L1200,0 Z"></path>
            {/* Main solid wave */}
            <path fill="#F7F7F8" d="M0,0 C 80,50 130,100 250,100 C 350,100 400,30 500,10 C 550,0 580,0 600,0 L1200,0 Z"></path>
          </svg>
        </div>

        <div className="footer-content">
          <motion.div
            className="footer-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {/* Column 1: Brand & Info */}
            <motion.div
              className="footer-col brand-col"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <div className="footer-logo">
                <img src="/Logos/LogoBiotech.jpg" alt="A-One Biotech" />
              </div>
              <p className="footer-desc">
                Pioneering the future of agriculture with advanced tissue culture technology and sustainable green solutions.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/AOneBiotech/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://www.instagram.com/a_one_biotech/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
                <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              className="footer-col links-col"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <h3 className="footer-heading">Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="#products">Our Products</a></li>
                <li><a href="#">Tissue Culture</a></li>
                <li><a href="#">Research & Development</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </motion.div>

            {/* Column 3: Find Us (Map) */}
            <motion.div
              className="footer-col map-col"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <h3 className="footer-heading">Find Us</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8243.927776366121!2d73.691789!3d18.769294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b2364823b599%3A0x462e73c176a4cca0!2sA-ONE%20BIOTECH%20%26TISSUE%20CULTURE%20PVT.%20LTD.!5e1!3m2!1sen!2sus!4v1781160192748!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="A-One Biotech Location"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2024 A-One Biotech. All Rights Reserved.
            </div>
            <div className="design-credit">
              <span>Developed by MasterMind</span>
              <a href="https://www.mastermindweb.in/" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src="/Logos/logo1.png"
                  alt="MasterMind Logo"
                  style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </a>
            </div>
          </div>
        </motion.div>

        <style>{`
        .footer-section {
          position: relative;
          background-color: #111111;
          background: linear-gradient(135deg, #1f1f1f 0%, #000000 100%);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          padding-top: 100px;
          border-radius: 0;
          overflow: hidden;
        }

        .footer-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          display: block;
          width: 100%;
          height: 120px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 2rem 40px;
        }

        .footer-grid {
          display: grid;
          /* 3 columns: left side narrower, middle narrower, map wider */
          grid-template-columns: 1fr 1fr 1.5fr;
          gap: 3rem;
          align-items: flex-start;
        }

        .brand-col {
          max-width: 340px;
        }

        .map-col {
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          padding-left: 2rem;
        }

        .footer-logo img {
          max-width: 160px;
          margin-bottom: 1.5rem;
          border-radius: 6px;
        }

        .footer-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .footer-heading {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .links-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-col li {
          margin-bottom: 0.8rem;
        }

        .links-col a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .links-col a:hover {
          color: #ffffff;
        }

        .map-container {
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
          padding: 4px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #d1d5db;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bottom-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .bottom-links a:hover {
          color: #ffffff;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        .design-credit {
          color: #d1d5db;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .map-col {
            grid-column: 1 / -1;
            border-left: none;
            padding-left: 0;
            padding-top: 1rem;
          }
        }

        @media (max-width: 768px) {
          .footer-wave svg {
            height: 50px;
          }
          .footer-section {
            padding-top: 70px;
          }
          .footer-content {
            padding: 40px 1.5rem 30px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .brand-col {
            max-width: 100%;
          }
          .footer-logo img {
            margin-left: auto;
            margin-right: auto;
          }
          .social-links {
            justify-content: center;
          }
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .design-credit {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
      </footer>
    </div>
  );
}
