import React from "react";
import "../../styles/StaticLanding.scss";

// Hand-drawn sketch star
const SketchStar = ({ className }) => (
  <svg
    className={`dressup-star ${className}`}
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M40 6 L44 28 L66 24 L50 40 L60 62 L40 50 L20 62 L30 40 L14 24 L36 28 Z"
      fill="none"
      stroke="rgba(210,210,210,0.55)"
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {/* inner sketch lines for hand-drawn feel */}
    <path
      d="M40 10 L43 27 L62 24 L48 39 L57 59 L40 48 L23 59 L32 39 L18 24 L37 27 Z"
      fill="none"
      stroke="rgba(210,210,210,0.2)"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export default function StaticLanding() {
  return (
    <main className="dressup-page">
      {/* ── Noise texture overlay ── */}
      <div className="dressup-noise" aria-hidden="true" />

      {/* ── Decorative stars ── */}
      <SketchStar className="star-tl" />
      <SketchStar className="star-tr" />
      <SketchStar className="star-bl" />
      <SketchStar className="star-br" />
      <SketchStar className="star-mid" />

      <div className="dressup-layout">

        {/* ══ LEFT PANEL ══ */}
        <div className="dressup-left">
          {/* Title block */}
          <div className="dressup-title-block">
            <h1 className="dressup-heading">
              DRESS
              <span className="dressup-heading-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#222" stroke="#444" strokeWidth="1.5" />
                  <text
                    x="50%"
                    y="54%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="9"
                    fontFamily="'Anton Regular', Anton, Impact, sans-serif"
                    letterSpacing="0.5"
                  >
                    TREND
                  </text>
                </svg>
              </span>
              UP
            </h1>
            <p className="dressup-tagline">
              Play dress-up!<br />
              Drag and drop clothes & accessories on your model!<br />
            </p>
          </div>

          {/* 2×2 clothing grid */}
          <div className="dressup-slot-section">
            <button className="dressup-arrow" aria-label="Previous items">
              ▲
            </button>
            <div className="dressup-grid dressup-grid--2x2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="dressup-slot" />
              ))}
            </div>
            <button className="dressup-arrow" aria-label="Next items">
              ▼
            </button>
          </div>
        </div>

        {/* ══ CENTER: Empty Model Cutout ══ */}
        <div className="dressup-center">
          <div className="dressup-model-cutout" aria-label="Model area" />
        </div>

        {/* ══ RIGHT PANEL ══ */}
        <div className="dressup-right">
          <div className="dressup-slot-section">
            <button className="dressup-arrow" aria-label="Previous items">
              ▲
            </button>
            <div className="dressup-grid dressup-grid--2x3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="dressup-slot" />
              ))}
            </div>
            <button className="dressup-arrow" aria-label="Next items">
              ▼
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
