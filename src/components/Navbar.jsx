import React from 'react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-slate-200/70 bg-white/80 px-5 py-3 shadow backdrop-blur">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-red-500 to-rose-600" />
            Vault
          </div>
          <nav className="hidden gap-8 text-sm text-slate-600 sm:flex">
            <a href="#vault" className="hover:text-slate-900">Vault</a>
            <a href="/test" className="hover:text-slate-900">Status</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
