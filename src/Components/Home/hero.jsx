"use client";

import { useState } from "react";

const panels = [
  {
    id: 1,
    title: "RESEARCH &\nINNOVATION",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v6h6" />
        <path d="m11.5 13.5-3.5 3.5" />
        <circle cx="16" cy="11" r="5" />
        <path d="m20 15 2 2" />
      </svg>
    ),
    img: "/hero-panel1.png",
  },
  {
    id: 2,
    title: "TISSUE CULTURE\nEXCELLENCE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v17a2 2 0 1 0 4 0V2" />
        <path d="M6 2h10" />
        <path d="M9 12s1-2 3-2 3 2 3 2" />
        <path d="M15 2v10a3 3 0 0 1-3 3" />
        <path d="M12 15c2 0 3 2 3 2" />
      </svg>
    ),
    img: "/hero-panel2.png",
  },
  {
    id: 3,
    title: "MASS\nPROPAGATION",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12c-2-2-4-2-4-2s-2 2-2 4 2 4 2 4c0-2 2-4 4-6Z" />
        <path d="M12 12c2-2 4-2 4-2s2 2 2 4-2 4-2 4c0-2-2-4-4-6Z" />
        <path d="M12 6c-1-1-2-1-2-1s-1 1-1 2 1 2 1 2c0-1 1-2 2-3Z" />
        <path d="M12 6c1-1 2-1 2-1s1 1 1 2-1 2-1 2c0-1-1-2-2-3Z" />
      </svg>
    ),
    img: "/hero-panel3.png",
  },
  {
    id: 4,
    title: "NURSERY\nDEVELOPMENT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20a2 2 0 0 1-2-2v-5" />
        <path d="M15 20a2 2 0 0 0 2-2v-3" />
        <path d="M8 2h8l2 7H6l2-7Z" />
        <path d="M12 9v11" />
        <path d="M7.5 13s2-2 4.5-2" />
        <path d="M16.5 15s-2-2-4.5-2" />
        <path d="M6 22h12" />
      </svg>
    ),
    img: "/hero-panel4.png",
  },
  {
    id: 5,
    title: "GREEN\nINFRASTRUCTURE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
      </svg>
    ),
    img: "/hero-panel5.png",
  },
  {
    id: 6,
    title: "SUSTAINABLE\nFUTURE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    img: "/hero-panel6.png",
  },
];

const stats = [
  {
    value: "15M+",
    label: "Plants Production\nCapacity Annually",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C12 22 4 14 4 8c0-3.5 2.5-6 6-6 3.5 0 6 2.5 6 6 0 6-8 14-8 14z" />
        <path d="M12 22s8-8 8-14c0-3.5-2.5-6-6-6" />
        <path d="M12 22v-8" />
      </svg>
    )
  },
  {
    value: "180+",
    label: "Ornamental\nVarieties",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9c0-3 3-5 5-3s1 4-2 5M12 15c0 3-3 5-5 3s-1-4 2-5M15 12c3 0 5-3 3-5s-4-1-5 2M9 12c-3 0-5 3-3 5s4 1 5-2" />
      </svg>
    )
  },
  {
    value: "20+",
    label: "Years of Research\n& Expertise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M9.5 13.5 7 22l5-3 5 3-2.5-8.5" />
      </svg>
    )
  },
  {
    value: "2003",
    label: "Established with\na Green Vision",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    )
  }
];

export default function Hero() {
  const [activeCard, setActiveCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --green:       #7bb528;
          --dark-green:  #2c5f1a;
          --bg:          #030e06;
          --card-bg:     #09170c;
          --gray:        #b0b5b1;
        }

        /* ─── HERO WRAPPER ─────────────────────────────── */
        .hero {
          width: 100%;
          height: 100vh;
          max-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: var(--bg);
          font-family: 'Inter', sans-serif;
        }

        /* ambient glow bottom-left */
        .glow {
          position: absolute;
          bottom: 10%; left: -5%;
          width: 620px; height: 620px;
          background: radial-gradient(circle, rgba(123,181,40,.13) 0%, transparent 62%);
          pointer-events: none;
          z-index: 0;
        }

        /* ─── MAIN GRID ────────────────────────────────── */
        .hero-main {
          flex: 1;
          display: grid;
          grid-template-columns: 35% 65%;
          padding: 1rem 0 0 3rem;
          position: relative;
          z-index: 10;
          align-items: stretch;
          min-height: 0;
        }

        /* ─── LEFT COPY ────────────────────────────────── */
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 2.2rem;
          padding-top: 4rem;
        }

        .eyebrow {
          font-size: .65rem;
          font-weight: 600;
          letter-spacing: .12em;
          display: flex;
          align-items: center;
          gap: .55rem;
          margin-bottom: 1.6rem;
          color: var(--gray);
        }
        .eyebrow .dot  { color: var(--green); font-size: .72rem; }
        .eyebrow .hi   { color: var(--green); }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 4.5vw, 4.8rem);
          font-weight: 600;
          line-height: 1.06;
          color: #fff;
          letter-spacing: -.01em;
          margin: 0;
        }
        .headline .leaf-icon {
          display: inline-block;
          width: .55em; height: .55em;
          vertical-align: middle;
          margin-left: .18em;
          transform: rotate(15deg) translateY(-.06em);
        }
        .headline .green { color: var(--green); }

        .divider {
          width: 68px; height: 2px;
          background: var(--green);
          margin: 1.8rem 0;
        }

        .desc {
          font-size: .95rem;
          line-height: 1.65;
          color: #d1d5db;
          max-width: 460px;
          margin-bottom: 2.4rem;
        }

        /* CTA row */
        .cta-row { display: flex; align-items: center; gap: 2rem; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: .78rem 1.6rem;
          background: var(--dark-green);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: .9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background .3s;
        }
        .btn-primary:hover { background: #347a22; }
        .btn-primary svg { width: 17px; height: 17px; transition: transform .3s; }
        .btn-primary:hover svg { transform: translateX(4px); }

        .btn-play {
          display: inline-flex;
          align-items: center;
          gap: .8rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: .9rem;
          font-weight: 500;
          transition: color .3s;
        }
        .btn-play:hover { color: var(--green); }
        .play-circle {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,.75);
          display: flex; align-items: center; justify-content: center;
          transition: border-color .3s, transform .3s, background-color .3s;
          flex-shrink: 0;
          position: relative;
        }
        .btn-play:hover .play-circle { 
          border-color: var(--green); 
          transform: scale(1.1);
          background-color: rgba(123, 181, 40, 0.12);
        }
        .play-circle::after {
          content: '';
          position: absolute;
          inset: -1.5px;
          border: 1.5px solid var(--green);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        .btn-play:hover .play-circle::after {
          animation: playRipple 1.2s infinite ease-out;
        }
        .play-circle svg { 
          width: 11px; height: 11px; 
          margin-left: 2px; 
          fill: #fff; 
          transition: fill .3s, transform .3s;
        }
        .btn-play:hover .play-circle svg {
          fill: var(--green);
          transform: scale(1.1);
        }

        @keyframes playRipple {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* ─── RIGHT PANELS ─────────────────────────────── */
        .hero-right {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .panels-wrapper {
          justify-content: center;
        }
        /* ─── STATS BAR ────────────────────────────────── */
        .stats-wrap {
          padding: 0 3rem 1.5rem;
          position: relative;
          z-index: 20;
          margin-top: 1rem;
        }

        .stats-bar {
          background: var(--card-bg);
          border-radius: 12px;
          display: flex;
          align-items: stretch;
          border: 1px solid rgba(255,255,255,.055);
          box-shadow: 0 12px 44px rgba(0,0,0,.42);
          overflow: hidden;
        }

        .stats-left {
          display: flex;
          flex: 1;
          padding: 0.75rem 0;
        }

        .stat {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.15rem;
          border-right: 1px solid rgba(255,255,255,.1);
        }
        .stat:last-child { border-right: none; }

        .stat-icon {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid var(--green);
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
          flex-shrink: 0;
        }
        .stat-icon svg { width: 20px; height: 20px; }

        .stat-text {}
        .stat-val {
          color: #fff;
          font-size: 1.62rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: .22rem;
          letter-spacing: -.01em;
        }
        .stat-lbl {
          color: #9ca3af;
          font-size: .73rem;
          line-height: 1.35;
          white-space: pre-line;
        }

        /* right tagline section */
        .stats-right {
          width: 470px;
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-left: 1px solid rgba(255,255,255,.1);
          background: var(--card-bg);
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .tagline-text {
          max-width: 250px;
          position: relative;
          z-index: 10;
        }
        .tagline-title {
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 1.12rem;
          font-weight: 600;
          margin-bottom: .45rem;
        }
        .tagline-title span { color: var(--green); }
        .tagline-desc {
          color: #9ca3af;
          font-size: .73rem;
          line-height: 1.55;
        }
        .tagline-img-wrap {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 60%;
          max-width: 280px;
          z-index: 1;
        }
        .tagline-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right center;
        }
        .tagline-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--card-bg) 0%, rgba(9, 23, 12, 0.4) 60%, transparent 100%);
        }

        /* Panel Responsive Logic */
        .panel-item {
          width: 180px;
          margin-left: -60px;
        }
        .panel-item:first-child {
          margin-left: 0;
        }
        .panel-item.active {
          width: 280px;
        }
        .panel-bg-container {
          position: relative;
          height: 100%;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
          clip-path: polygon(60px 0%, 100% 0%, calc(100% - 60px) 100%, 0% 100%);
        }
        .panel-content {
          position: absolute;
          top: 2rem;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          left: 56px;
          right: 0px;
        }
        .panel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 16px;
          z-index: 40;
        }

        @media (max-width: 1200px) {
          .hero {
            height: auto;
            max-height: none;
          }
          .hero-main {
            grid-template-columns: 1fr;
            padding: 2rem 3rem 0;
            align-items: center;
          }
          .panels-wrapper {
            justify-content: flex-start;
          }
          .panels-container {
            width: 100%;
            padding-right: 0;
            display: flex;
          }
          .hero-right { 
            height: 400px; 
            margin-top: 3rem; 
            width: 100%;
            overflow: hidden;
          }
          .panel-item {
            flex: 1;
            width: auto;
            margin-left: -8%;
          }
          .panel-item.active {
            flex: 3;
            width: auto;
          }
          .panel-bg-container {
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
          }
          .panel-content {
            left: 15%;
            top: 1.5rem;
          }
          .panel-arrow {
            display: none;
          }
          .stats-bar { flex-direction: column; }
          .stats-right { width: 100%; border-left: none; border-top: 1px solid rgba(255,255,255,0.1); }
          .stats-left { flex-wrap: wrap; }
          .stat { min-width: 50%; padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .stat:nth-child(even) { border-right: none; }
        }

        @media (max-width: 768px) {
          .hero-main {
            padding: 7rem 1.5rem 0;
          }
          .hero-left {
            padding-top: 1rem;
            padding-right: 0;
          }
          .stats-wrap {
            padding: 0 1.5rem 1.5rem;
          }
          .eyebrow {
            flex-wrap: wrap;
          }
          .headline {
            font-size: 2.8rem;
          }
          .desc {
            font-size: .9rem;
          }
          .cta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .hero-right {
            height: auto;
            margin-top: 2rem;
            margin-bottom: 2rem;
            overflow: visible;
          }
          .panels-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: 100%;
          }
          .panel-item {
            margin: 0 !important;
            width: 100% !important;
            height: 160px;
            flex: none !important;
          }
          .panel-item.flipped {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            z-index: 100 !important;
          }
          .panel-bg-container {
            clip-path: none !important;
            border-radius: 12px;
          }
          .panel-content {
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }
          .panel-item:not(.active) .panel-title {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
          .panel-title {
            font-size: 10px !important;
            letter-spacing: 0.1em !important;
          }
          .panel-icon svg {
            width: 28px !important;
            height: 28px !important;
          }
          .stat {
            min-width: 100%;
            border-right: none;
          }
          .tagline-img-wrap {
            width: 50%;
          }
        }
        
        @media (max-width: 480px) {
          .headline {
            font-size: 2.2rem;
          }
          .panels-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .panel-item {
            height: 140px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="glow" />

        {/* MAIN GRID */}
        <div className="hero-main">
          {/* LEFT */}
          <div className="hero-left">
            <div className="eyebrow">
              <span>BIOTECHNOLOGY</span>
              <span className="dot">•</span>
              <span>RESEARCH</span>
              <span className="dot">•</span>
              <span className="hi">GREEN INFRASTRUCTURE</span>
            </div>

            <h1 className="headline">
              Engineering
              <svg className="leaf-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22C2 22 4 10 14 6C14 6 18 4 22 2C22 2 20 12 16 16C16 16 14 20 2 22Z" fill="#7bb528" opacity=".9" />
              </svg>
              <br />the Future of<br />
              <span className="green">Green Life</span>
            </h1>

            <div className="divider" />

            <p className="desc">
              From advanced plant tissue culture to large-scale production
              and green infrastructure, we deliver innovative solutions
              for a greener tomorrow.
            </p>

            <div className="cta-row">
              <button className="btn-primary">
                Explore Our Capabilities
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button className="btn-play">
                <span className="play-circle">
                  <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* RIGHT PANELS */}
          <div className="hero-right md:max-h-[580px] md:mt-24">
            <div className="relative flex items-center h-full panels-wrapper">

              <div className="flex h-full items-stretch w-max panels-container">

                {panels.map((panel, idx) => (
                  <div
                    key={panel.id}
                    onPointerEnter={(e) => {
                      if (e.pointerType === 'mouse') setActiveCard(panel.id);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType === 'mouse') setActiveCard(null);
                    }}
                    onClick={() => {
                      if (typeof window !== "undefined" && window.innerWidth <= 768) {
                        setFlippedCard(flippedCard === panel.id ? null : panel.id);
                      }
                    }}
                    className={`group relative h-full flex-shrink-0 transition-all duration-700 ease-out panel-item ${(activeCard === panel.id || flippedCard === panel.id) ? "active z-30" : "z-10"} ${flippedCard === panel.id ? "flipped z-50" : ""}`}
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      className="relative h-full w-full transition-transform duration-700"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: flippedCard === panel.id ? "rotateY(180deg)" : "rotateY(0deg)"
                      }}
                    >
                      {/* FRONT OF CARD */}
                      <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                        <div className="panel-bg-container">
                          <img
                            src={panel.img}
                            alt={panel.title}
                            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${activeCard === panel.id ? "scale-110" : ""}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/10" />
                          <div className="panel-content">
                            <div className="mb-4 text-white [&>svg]:w-7 [&>svg]:h-7 panel-icon">
                              {panel.icon}
                            </div>
                            <div className="whitespace-pre-line text-[11px] font-semibold tracking-[0.15em] leading-relaxed text-white uppercase panel-title">
                              {panel.title}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* BACK OF CARD (Complete Img) */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)"
                        }}
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
                          <img src={panel.img} alt={panel.title} className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {idx < panels.length - 1 && (
                      <div className="panel-arrow">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#7bb528] bg-[#08130A] text-[#7bb528] shadow-lg">
                          →
                        </div>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* ─── STATS BAR ─── */}
        <div className="stats-wrap">
          <div className="stats-bar">
            <div className="stats-left">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-text">
                    <div className="stat-val">{stat.value}</div>
                    <div className="stat-lbl">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-right">
              <div className="tagline-text">
                <div className="tagline-title">Science. Innovation. <span>Sustainability.</span></div>
                <div className="tagline-desc">
                  A-One Biotech is committed to delivering high-quality plants,
                  advanced research, and green infrastructure solutions that
                  enhance life and build a sustainable future.
                </div>
              </div>
              <div className="tagline-img-wrap">
                <img
                  className="tagline-img"
                  src="/BottomsideImg.png"
                  alt="Hands holding plant"
                />
                <div className="tagline-img-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}