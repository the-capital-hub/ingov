'use client'
import Link from 'next/link'
import { Twitter, Linkedin, ArrowUp } from 'lucide-react'
import { useLenis } from '@/lib/lenis'

export default function Footer() {
  const lenis = useLenis()

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-hero text-white relative overflow-hidden">
      <div className="section-inner py-10 lg:py-16 relative z-10 flex flex-col items-center text-center">

        <Link href="/" className="font-heading font-black text-4xl tracking-tight text-white mb-4 transition-transform hover:scale-[1.02]">
          InGov
        </Link>
        <p className="max-w-md text-sm text-white/80 mb-8 leading-relaxed">
          ERP Solution for Government. Made in India, Made for India. We process millions of secure transactions daily for departments nationwide.
        </p>
        <div className="flex gap-4 mb-10">
          <Link href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-hero text-white transition-all shadow-sm">
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-hero text-white transition-all shadow-sm">
            <Twitter className="w-4 h-4" />
          </Link>
        </div>

        <div className="w-full border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-xs font-semibold text-white/70">
          <div className="text-center md:text-left order-2 md:order-1">
            &copy; {new Date().getFullYear()} InGov by iProfit. All Rights Reserved.
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <button
              onClick={handleScrollToTop}
              className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-hero transition-all duration-300 shadow-sm">
                <ArrowUp className="w-4 h-4" />
              </div>
              <span className="text-[9px] uppercase font-bold tracking-[0.1em] opacity-50 group-hover:opacity-100 transition-opacity">Back to Top</span>
            </button>
          </div>

          <div className="text-center md:text-right order-3">
            Built precisely for Documented Govt Workflows
          </div>
        </div>
      </div>
    </footer>
  )
}
