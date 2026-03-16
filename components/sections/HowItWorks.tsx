'use client'

import { useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import CtaButton from '@/components/ui/CtaButton'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Search, DatabaseBackup, GraduationCap, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'GAP Study & Configuration',
    desc: 'We study your existing workflows, data structures, and compliance requirements. InGov is then configured to match not the other way around.',
    duration: 'Week 1–2'
  },
  {
    icon: DatabaseBackup,
    title: 'Data Migration & Setup',
    desc: 'Complete migration from Excel, legacy ERP, or manual registers. Banking integrations set up with your existing account relationships.',
    duration: 'Week 2–5'
  },
  {
    icon: GraduationCap,
    title: 'User Training & UAT',
    desc: 'Comprehensive training for all user roles — Finance, HR, Admin. User Acceptance Testing before any go-live decision.',
    duration: 'Week 5–10'
  },
  {
    icon: Rocket,
    title: 'Go-Live & AMC Support',
    desc: 'Smooth launch with dedicated account manager, helpdesk support, and Annual Maintenance Contract from day one.',
    duration: 'Week 10–12+'
  }
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Add a smooth spring physics to the scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="how-it-works" className="bg-bgbase py-10 lg:py-16 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-card-grad opacity-40 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-inner relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <FadeUp delay={0}>
            <SectionLabel>The Process</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6 mt-5 leading-tight">
              From Signed to Live<br />
              in <em className="text-highlight italic">6–12 Weeks</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl mx-auto text-muted text-lg leading-relaxed">
              Our structured 4-phase implementation has delivered a 98%+ go-live success rate across government departments of every size.
            </p>
          </FadeUp>
        </div>

        {/* Scroll timeline container */}
        <div ref={containerRef} className="relative max-w-3xl mx-auto px-4 sm:px-0">

          {/* Timeline background line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[4px] bg-border -translate-x-1/2 rounded-full shadow-inner" />

          {/* Animated scroll progress line */}
          <motion.div
            className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[4px] bg-highlight origin-top -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(2,132,199,0.5)] z-10"
            style={{ scaleY }}
          />

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <div key={i} className="relative flex items-center w-full justify-between group">

                  {/* Left Side (Desktop Only) */}
                  <div className="hidden sm:flex w-[45%] justify-end items-center pr-12">
                    {isEven ? (
                      /* Card for Even */
                      <FadeUp delay={0.2} className="w-full">
                        <div className="bg-card-grad border border-[#cde6fa]/50 rounded-3xl p-8 shadow-sm text-right lg:hover:border-highlight/30 transition-colors">
                          <h4 className="font-heading font-black text-dark text-2xl mb-3">{step.title}</h4>
                          <p className="text-muted text-base leading-relaxed">{step.desc}</p>
                        </div>
                      </FadeUp>
                    ) : (
                      /* Duration for Odd */
                      <FadeUp delay={0.2} className="w-full text-center">
                        <div className="font-heading font-black text-4xl lg:text-5xl text-highlight/50 tracking-tight leading-tight">
                          {step.duration.split(' ')[0]}<br />
                          {step.duration.split(' ')[1]}
                        </div>
                      </FadeUp>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-white border-4 border-bgbase rounded-full shadow-[0_0_15px_-3px_rgba(2,132,199,0.3)] z-10 text-highlight">
                    <Icon className="w-5 h-5 bg-white" />
                  </div>

                  {/* Right Side */}
                  <div className="w-full pl-24 sm:pl-12 sm:w-[45%] flex items-center">
                    {isEven ? (
                      <>
                        {/* Duration for Even (Desktop) */}
                        <div className="hidden sm:block w-full">
                          <FadeUp delay={0.2} className="w-full text-center">
                            <div className="font-heading font-black text-4xl lg:text-5xl text-highlight/50 tracking-tight leading-tight">
                              {step.duration.split(' ')[0]}<br />
                              {step.duration.split(' ')[1]}
                            </div>
                          </FadeUp>
                        </div>
                        {/* Card for Even (Mobile) */}
                        <div className="sm:hidden w-full">
                          <FadeUp delay={0.2} className="w-full bg-card-grad border border-[#cde6fa]/50 rounded-3xl p-6 shadow-sm text-left">
                            <div className="inline-block text-xs font-bold px-3 py-1 bg-white border border-border text-highlight rounded-full mb-4">
                              {step.duration}
                            </div>
                            <h4 className="font-heading font-black text-dark text-xl mb-3">{step.title}</h4>
                            <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                          </FadeUp>
                        </div>
                      </>
                    ) : (
                      /* Card for Odd (Desktop & Mobile) */
                      <FadeUp delay={0.2} className="w-full bg-card-grad border border-[#cde6fa]/50 rounded-3xl p-6 sm:p-8 shadow-sm text-left lg:hover:border-highlight/30 transition-colors">
                        {/* Mobile duration, since desktop shows duration on left */}
                        <div className="sm:hidden inline-block text-xs font-bold px-3 py-1 bg-white border border-border text-highlight rounded-full mb-4">
                          {step.duration}
                        </div>
                        <h4 className="font-heading font-black text-dark text-xl sm:text-2xl mb-3">{step.title}</h4>
                        <p className="text-muted text-sm sm:text-base leading-relaxed">{step.desc}</p>
                      </FadeUp>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <FadeUp delay={0.6} className="text-center mt-24">
          <CtaButton
            href="/book-demo"
            variant="outline"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Discuss Your Implementation Timeline
          </CtaButton>
        </FadeUp>

      </div>
    </section>
  )
}
