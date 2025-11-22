import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/k3vzWf8TfEDJKl71/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette to improve text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            Secure • Minimal • Modern
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            A vault that unlocks as you scroll
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Scroll down to reveal the vault. Built with a clean, minimalist 3D lock and a smooth, tactile opening animation.
          </p>
          <a href="#vault" className="mt-8 inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow transition hover:bg-slate-800">
            Explore the vault
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
