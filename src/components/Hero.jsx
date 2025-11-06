import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient aura overlay for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Create on-brand marketing, faster
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/70">
          An AI-powered, mobile-first studio for content creation, strategy, and analysis —
          fueled by Gemini and designed to help you grow.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white font-medium shadow-lg shadow-pink-500/20 hover:opacity-95 transition"
          >
            Get started
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-white font-medium backdrop-blur-md border border-white/10 hover:bg-white/15 transition"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
