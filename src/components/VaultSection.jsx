import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function VaultSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Door open progress from 0 (closed) to 1 (open) as section enters viewport
  const openProgress = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.9, 1])
  const rotate = useTransform(openProgress, [0, 1], [0, -100])
  const scale = useTransform(openProgress, [0, 1], [0.9, 1])
  const glow = useTransform(openProgress, [0, 1], [0, 1])

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const unsub = openProgress.on('change', (v) => {
      setIsOpen(v > 0.85)
    })
    return () => unsub()
  }, [openProgress])

  return (
    <section id="vault" ref={ref} className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Your secure vault</h2>
            <p className="mt-4 text-slate-300">As you scroll into this section, the vault door smoothly opens, revealing your content. This effect is driven by scroll position for a delightful, tactile feel.</p>
            <ul className="mt-8 space-y-3 text-slate-300">
              <li>• Smooth scroll-controlled animation</li>
              <li>• Minimalist, fintech-inspired design</li>
              <li>• Ready for product screenshots or secrets</li>
            </ul>
          </div>

          <div className="relative">
            <motion.div
              style={{ rotateY: rotate, scale }}
              className="relative h-72 w-full rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl perspective-1000 overflow-hidden"
            >
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-28 w-28 rounded-full border-4 border-slate-600" />
                <div className="absolute h-2 w-10 rounded bg-slate-500" />
              </div>

              <motion.div
                style={{ opacity: glow }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,80,80,0.25),transparent_60%)]"
              />
            </motion.div>

            <div className="mt-4 text-sm text-slate-400">{isOpen ? 'Vault is open' : 'Scroll to open the vault'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VaultSection
