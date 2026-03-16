'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Globe, Building2, ArrowRight } from 'lucide-react'
import CtaButton from '@/components/ui/CtaButton'

export default function FinalCTA() {
  return (
    <section className="bg-bgbase relative py-10 lg:py-16 overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-card-grad opacity-50" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-highlight/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

      <div className="section-inner relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-border shadow-sm rounded-full text-xs font-bold uppercase tracking-widest mb-10 group">
            <Building2 className="w-4 h-4 text-highlight" />
            <span className="text-dark">Digital Governance Platform</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-black text-dark mb-8 leading-tight">
            Ready to transform your<br />
            <em className="text-highlight italic">department's efficiency?</em>
          </h2>

          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Book a free 30-minute GAP analysis. We'll show you exactly how InGov replaces manual processes with automated compliance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
            <CtaButton
              href="/book-demo"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5 mx-1" />}
              className="w-full sm:w-auto text-lg"
            >
              Book My Free Demo
            </CtaButton>

            <CtaButton
              href="tel:+919815844028"
              variant="outline"
              icon={<Phone className="w-5 h-5" />}
              className="w-full sm:w-auto text-lg"
            >
              Call Us Now
            </CtaButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-dark text-sm bg-white/60 p-8 rounded-3xl border border-border backdrop-blur-md shadow-sm">
            <Link href="mailto:info@iprofit.in" className="flex flex-col items-center gap-3 hover:text-highlight transition-colors">
              <div className="p-3 rounded-full bg-white border border-border"><Mail className="w-5 h-5" /></div>
              <span className="font-medium">info@iprofit.in</span>
            </Link>
            <Link href="tel:+919815844028" className="flex flex-col items-center gap-3 hover:text-highlight transition-colors">
              <div className="p-3 rounded-full bg-white border border-border"><Phone className="w-5 h-5" /></div>
              <span className="font-medium">Call: +91 98158-44028</span>
            </Link>
            <Link href="https://wa.me/918989800098" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 hover:text-highlight transition-colors">
              <div className="p-3 rounded-full bg-white border border-border"><MessageCircle className="w-5 h-5" /></div>
              <span className="font-medium">Sufi: +91 89898-00098</span>
            </Link>
            <Link href="https://www.iprofit.in" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 hover:text-highlight transition-colors">
              <div className="p-3 rounded-full bg-white border border-border"><Globe className="w-5 h-5" /></div>
              <span className="font-medium">www.iprofit.in</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
