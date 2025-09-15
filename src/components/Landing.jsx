import React from 'react';

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">
          Build websites with <span className="highlight">plain English</span>
        </h1>
        <p className="landing-subtitle">
          Describe your vision in natural language and watch as AI transforms your ideas into beautiful, functional websites instantly.
        </p>
        <button className="cta-button">
          Get Started Free
        </button>
      </div>
    </div>
  );
}