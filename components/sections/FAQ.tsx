'use client'
import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import CtaButton from '@/components/ui/CtaButton'

const faqs = [
  {
    q: "Is InGov suitable for very large government departments?",
    a: "Absolutely. InGov is architected for scale and is currently processing over 11,000+ salaries monthly and handling massive transaction volumes for existing state department clients."
  },
  {
    q: "Do we need to change our existing workflows to use InGov?",
    a: "No. Unlike generic ERPs, InGov is specifically mapped to Indian government workflows out-of-the-box. We configure the system during the GAP study phase to mirror your exact treasury and operational processes."
  },
  {
    q: "How long does implementation and data migration take?",
    a: "A typical full-scale deployment takes 6 to 12 weeks. This includes GAP analysis, complete data migration from legacy systems or physical records, and comprehensive hands-on user training."
  },
  {
    q: "Where is our data hosted and is it secure?",
    a: "Your data is hosted on Microsoft Azure's India regions, ensuring strict data residency compliance. The platform is ISO 27001 certified and undergoes regular VAPT (Vulnerability Assessment and Penetration Testing) audits."
  },
  {
    q: "Does InGov support mobile applications for employees?",
    a: "Yes. InGov includes a dedicated mobile application (iOS & Android) for employee self-service (ESS), allowing staff to manage leaves, view payslips, and handle approvals on the go."
  },
  {
    q: "How does the pricing work for InGov?",
    a: "InGov operates on a SaaS (Software as a Service) model. Instead of massive upfront capital expenditure (CapEx), you pay a predictable annual subscription that includes hosting, maintenance, and continuous upgrades."
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-bgbase py-10 lg:py-16 relative overflow-hidden">
      <div className="section-inner max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp delay={0}>
            <SectionLabel>Questions & Answers</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6">
              Frequently Asked <em className="text-highlight italic">Questions</em>
            </h2>
          </FadeUp>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <FadeUp delay={0.1 * i} key={i}>
                <div
                  className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${isOpen ? 'bg-white border-highlight shadow-md' : 'bg-white border-border hover:border-highlight/50 hover:shadow-md'}`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <span className={`font-heading font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-highlight' : 'text-dark'}`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? 'bg-highlight text-white' : 'bg-white border border-border text-muted'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-muted leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            )
          })}
        </div>

        <FadeUp delay={0.8} className="mt-16 text-center">
          <p className="text-muted text-lg mb-8">Still have questions? Our implementation experts are ready to assist.</p>
          <CtaButton
            href="mailto:info@iprofit.in"
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Contact Implementation Team
          </CtaButton>
        </FadeUp>
      </div>
    </section>
  )
}
