import React from 'react'
import Hero from './components/Hero'
import VaultSection from './components/VaultSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <VaultSection />

      {/* Extra content after vault to enable scrolling past it */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <div className="grid gap-8 sm:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Feature {i}</h3>
                <p className="mt-2 text-slate-600">Use this space for product benefits, screenshots, or content unlocked by the vault.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
